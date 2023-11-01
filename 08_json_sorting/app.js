const { api_list } = require("./functions/api")
const { startSearching } = require('./functions/search')


const keyToFind = "isDone"


async function main() {
    trueValues = 0
    falseValues = 0

    for(index in api_list){
        let isDone = undefined
        let success = false
        for(let i = 0; i < 3; i++) {
            try{
                let response = await fetch(api_list[index]);
                if(response.ok) {
                    json = await response.json()
                    isDone = await startSearching(json, keyToFind)
                    if(isDone)
                        trueValues++
                    else if(isDone === false)
                        falseValues++
                    success = true
                    break;
                }
            }
            catch(err) {}
        }
        if(success) {
            console.log(`[Success] ${api_list[index]}: isDone - ${isDone}`)
        }
        else {
            console.log(`[Fail] ${api_list[index]}: The endpoint is unavailable`)
        }
    }
    console.log(`\nFound True values: ${trueValues},\nFound False values: ${falseValues}`)
}

main()