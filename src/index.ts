import 'reflect-metadata';
import config from 'config';
import chalk from 'chalk';
import { Mongoose } from 'mongoose';
import initializeServer from './app';
import getConnection from './config/database';
import IDatabaseConfiguration from './interfaces/database-configuration.interface';

async function main() {
    try {
        const dbConfig: IDatabaseConfiguration = await config.get('database');
        const databaseConnection: Mongoose = await getConnection(dbConfig);
        const app = await initializeServer(databaseConnection);
        app.listen(80, () => console.log(chalk.green("Service's already ready to connect!")));
    } catch (e) {
        console.error(`An error has occurred. ${e.message}`);
    }
}

main();
