const { api_list } = require("./functions/api")
const { startSearching } = require('./functions/search')


const keyToFind = "isDone"


async function main() {
    for(index in api_list){
        let isDone = undefined
        let success = false
        for(let i = 0; i < 3; i++) {
            try{
                let response = await fetch(api_list[index]);
                if(response.ok) {
                    json = await response.json()
                    isDone = await startSearching(json, keyToFind)
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
    };
}

main()