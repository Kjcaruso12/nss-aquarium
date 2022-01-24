import { FishList } from "./fish/FishList.js";
import { locationList } from "./locations/LocationsHarvested.js";
import { fishCareList } from "./tips/FishCareTips.js";


const parentHTMLElement = document.querySelector(".fish_collection")
parentHTMLElement.innerHTML = FishList()

const parentHTMLElement2 = document.querySelector(".aside")
parentHTMLElement2.innerHTML = fishCareList()

const parentHTMLElement3 = document.querySelector(".locations_list")
parentHTMLElement3.innerHTML = locationList()