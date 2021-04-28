import IDatabaseConfiguration from './database-configuration.interface';
import IEnvironment from './environment.interface';
import ISonarqubeConfiguration from './sonarqube-configuration.interface';

export default interface IConfiguration {
    service: {
        name: string;
    };
    environment: IEnvironment;
    database: IDatabaseConfiguration;
    sonarqube: ISonarqubeConfiguration;
}
