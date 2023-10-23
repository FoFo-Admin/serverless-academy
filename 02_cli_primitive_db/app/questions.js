export const userNameQuestion = [
    {
        type: 'input',
        message: `Enter the user's name. To cancel press ENTER: `,
        name: 'user'
    }
]


export const userQuestions = [
    {
        type: 'list',
        choices: ['male', 'female'],
        message: 'Choose your Gender.',
        name: 'gender'
    },
    {
        type: 'number',
        message: 'Enter your age: ',
        name: 'age',
        validate: (age) => {
            if(age > 0 && age < 100)
                return true
            else
                return "Invalid age"
        }
    }
]


export const findUserQuestion = [
    {
        type: 'confirm',
        message: `Whould you like to search values in DB? `,
        name: 'search',
        default: true
    }
]

export const findUserByNameQuestion = [
    {
        type: 'input',
        message: `Enter user's name you wanna find in DB: `,
        name: 'user'
    }
]