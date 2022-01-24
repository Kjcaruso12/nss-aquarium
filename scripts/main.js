import { FishList } from "./fish/FishList.js";
import { fishCareList } from "./tips/FishCareTips.js";


const parentHTMLElement = document.querySelector(".fish_collection")
parentHTMLElement.innerHTML = FishList()

const parentHTMLElement2 = document.querySelector(".aside")
parentHTMLElement2.innerHTML = fishCareList()