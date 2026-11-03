
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Downloading application code from GitHub'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies'
                sh 'npm install'
            }
        }

        stage('Deploy Application') {
            steps {
                echo 'Deploying application using PM2'
                sh 'pm2 startOrReload ecosystem.config.js'
            }
        }
    }
}
