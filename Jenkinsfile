pipeline {
  agent any

  tools {
    sonarQubeScanner 'sonar-scanner'
  }

  environment {
    SONARQUBE_SCANNER_HOME = tool 'sonar-scanner'
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/Yug3010/SonarCube.git'
      }
    }

    stage('SonarQube Analysis') {
      steps {
        withSonarQubeEnv('MySonar') {
          sh "${SONARQUBE_SCANNER_HOME}/bin/sonar-scanner"
        }
      }
    }
  }
}
