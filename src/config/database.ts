import { connect, Mongoose } from 'mongoose';
import chalk from 'chalk';
import IDatabaseConfiguration from '../interfaces/database-configuration.interface';

export default async function getConnection(opts: IDatabaseConfiguration):Promise<Mongoose> {
    const {username, password, host, port, database } = opts;
    const uri =  `mongodb://${username}:${password}@${host}:${port}/${database}`;
    console.info('Connecting to database server...');
    const cnn = await connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        authSource: 'admin',
        useFindAndModify: false,
        fsync: opts.synchronize
    });
    console.info(chalk.green('We\'ve connected successfully'));
    return cnn;
}