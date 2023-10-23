const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function askQuestion() {
    readline.question(`Hello. Enter a few words or digits deviding them in spaces: `,
    line => {
        values = line.trim().split(' ')
        numbers = values.filter(Number)
        valuesDict = {
            'values': values,
            'numbers': numbers,
            'words': values.filter(
                value => !(numbers.includes(value))
            )
        }

        askSelect(valuesDict)
    })
}

function askSelect(valuesDict) {
    console.log(`\n\nHow whould you like to sort values: 
1. Sort words alphabetically
2. Show numbers from lesser to greater
3. Show numbers from bigger to smaller
4. Display words in ascending order by number of letters in the word
5. Show only unique words
6. Display only unique values from the set of words and numbers entered by the user
        
Write exit to close program`)

    readline.question(`\n\nSelect (1 - 6) and press ENTER: `,
    option => {
        switch(option) {
            case '1':
                console.log(
                    valuesDict['words'].sort()
                    )
                askQuestion();
                break;
            case '2':
                console.log(
                    valuesDict['numbers'].sort((a, b) => a - b)
                    )
                askQuestion();
                break;
            case '3': 
                console.log(
                    valuesDict['numbers'].sort((a, b) => b - a)
                    )
                askQuestion();
                break;
            case '4':
                console.log(
                    valuesDict['words'].sort((a, b) => a.length - b.length)
                    )
                askQuestion();
                break;
            case '5':
                console.log(
                    Array.from(new Set(valuesDict['words']))
                    )
                askQuestion();
                break;
            case '6':
                console.log(
                    Array.from(new Set(valuesDict['values']))
                    )
                askQuestion();
                break;
            case 'exit':
                readline.close()
                break;
            default: 
                console.log('There is no such option')
                askQuestion()
        }
    })
}

module.exports = {
    askQuestion
}
