import inquirer from 'inquirer';
import * as questions from './questions.js'
import {insertUser, selectUser, selectAll} from './db.js'


export function createUser() {
    inquirer.prompt(questions.userNameQuestion).then(answer => {
        if(answer.user.trim().length == 0) {
            findUser()
        }
        else {
            inquirer.prompt(questions.userQuestions).then(answers => {
                insertUser(answer.user, answers.gender, answers.age)
                createUser()
            })
        }
    })
}


function findUser() {
    inquirer.prompt(questions.findUserQuestion).then(answer => {
        if(answer.search) {
            selectAll()
            inquirer.prompt(questions.findUserByNameQuestion).then(find => {
                let user = selectUser(find.user)
                if(user) {
                    console.log(`User ${find.user} was found`)
                    console.log(user)
                }
                else {
                    console.log(`User ${find.user} was not found`)
                }
            })
        }
    })
}


export default createUser
