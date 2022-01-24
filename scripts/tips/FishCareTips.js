import { getFishTips } from "../fish/database.js"


export const fishCareList = () => {
    
    const tips = getFishTips()


    let htmlString = `<aside><h2>Martin's Tips</h2><div class="martins_tips"></div><section>
    <ul class="cleaning_tips">`

    for (const tip of tips) {
        htmlString += `<li>${tip.content}</li>`
            
    }
    
    htmlString += `</ul></section>`

    return htmlString
}