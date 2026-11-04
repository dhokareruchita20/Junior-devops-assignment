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
                sh '''
                    # ruchita युजरच्या फोल्डरमध्ये जाऊन लेटेस्ट कोड पुल करणे
                    cd /home/ruchita/Junior-devops-assignment
                    git pull origin main
                    
                    # ruchita युजर म्हणून PM2 प्रोसेस रीस्टार्ट करणे
                    sudo -u ruchita pm2 restart junior-devops-app || sudo -u ruchita pm2 start app.js --name "junior-devops-app"
                '''
            }
        }
    }
}
