pipeline {
    agent any
    
    tools {
        nodejs 'node20' // ต้องชื่อเดียวกับที่ตั้งใน Jenkins Tools
    }

    environment {
        // ดึง "กุญแจ จาก Jenkins Credentials (ชื่อ ID ต้องตรงกัน)
        VERCEL_PROJECT_NAME = 'devops07-quiz1-local'
        VERCEL_TOKEN = credentials('VERCEL_TOKEN_ID')
    }

    stages {
        stage('Test npm') {
            steps {
                sh 'npm install'
                sh 'node -v'
                echo 'Stage 1: Test npm passed!'
            }
        }

        stage('Build') {
            steps {
                echo 'Stage 2: Build passed!'
            }
        }

        stage('Deploy') {
            steps {
                // สั่ง Deploy ไป Vercel
                sh "vercel link --project $devops07_quiz1 --token $DevOps07_VERCEL_TOKEN_ID --yes"
                sh "npx vercel --token $VERCEL_TOKEN --prod --yes"
                echo 'Stage 4: Deploy passed!'
            }
        }
    }
}
