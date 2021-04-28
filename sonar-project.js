const sonarqubeScanner = require('sonarqube-scanner');
const config = require('config');
const sonarqube = config.get('sonarqube');
sonarqubeScanner(
  {
    serverUrl: `${sonarqube.host}:${sonarqube.port}`,
    options: {
      'sonar.sources': 'src',
      'sonar.tests': 'tests',
      'sonar.inclusions': '**',
      'sonar.test.inclusions': 'tests/**/*.ts,',
      'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'coverage/test-reporter.xml'
    }
  }, () => process.exit());
