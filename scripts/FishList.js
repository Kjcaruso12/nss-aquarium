// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = `<h2>Fish Collection</h2><article class="fish_list">`

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish_card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish_properties">
                <ul>
                    <li>${fish.name}</li>
                    <li>${fish.species}</li>
                    <li>${fish.length}</li>
                    <li>${fish.location}</li>
                    <li>${fish.food}</li>
                </ul>
            </div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}