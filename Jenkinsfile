pipeline{
    agent any
    tools{
        nodejs 'node installation'
    }
    parameters{
        choice choices: ['practiceTests','regressionTests','smokeTests'], name: 'suite'
    }
    stages{
        stage('build'){
            steps{
                sh "npm install"
            }
        }
    }
}