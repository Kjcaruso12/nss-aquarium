import { getLocations } from "../fish/database.js"

export const locationList = () => {

    const locations = getLocations()

    let htmlString = `<h2>Locations</h2><section>
    <ul class="locations">`

    for (const location of locations) {
        htmlString += `<li>${location.name}</li>`
    }

    htmlString += `</ul></section>`

    return htmlString
}