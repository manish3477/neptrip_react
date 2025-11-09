pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git branch: 'master', url: 'https://github.com/manish3477/neptrip_react.git'
            }
        }

        stage('Create Container') {
            steps {
                sh '''
                docker build --no-cache -t neptrip_img:v1 .
                '''
            }
        }

        stage('Deploy container') {
            steps {
                sh '''
                docker rm -f neptrip_container || true
                docker run -d --name neptrip_container -p 80:80 neptrip_img:v1
                '''
            }
        }
    }
}
