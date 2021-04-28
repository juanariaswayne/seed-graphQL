// nodejs
import config from 'config';
import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import chalk from 'chalk';

// graphql
import { ApolloServer } from 'apollo-server-express';

// our libs
import { Mongoose } from 'mongoose';
import models from './models';
import schema from './schema';
import IEnvironment from './interfaces/environment.interface';

export default async function initializeServer(dbConnection: Mongoose): Promise<any> {
    const environment: IEnvironment = config.get('environment');
    console.log(chalk.bgCyanBright(chalk.blackBright('ENVIRONMENT: ')), environment);

    const app = express();

    // middlewares
    app.use('*', cors());
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(compression());

    // health check endpoint
    app.use('/health', (req, res) => res.json('I am alive!'));

    const context: any = async () => {
        return {
            database: dbConnection,
            models,
        };
    };

    const server = await new ApolloServer({
        schema,
        context,
        introspection: true,
        playground: !environment.production,
    });
    server.applyMiddleware({ app, path: '/graphql' });
    return app;
}
