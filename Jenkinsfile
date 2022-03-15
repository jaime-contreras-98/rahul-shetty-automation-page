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
        stage('test'){
            steps{
                sh "npm run ${params.suite} --reporter html:tests-reports/practice-tests-results.html"
            }
            post{
                always{
                    archiveArtifacts artifacts: 'tests-reports/practice-tests-results.html', followSymLinks: false
                }
            }
        }
    }
}