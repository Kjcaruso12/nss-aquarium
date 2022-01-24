import { getFish } from "./database.js"

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []
    const fishFilter = getFish()
    for (fish of fishFilter) {
        if (fish.length % 3 === 0)
        holyFish.push(fish)
    }
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldierFish = []
    const fishFilter = getFish()
        for (fish of fishFilter) {
            if (fish.length % 5 === 0) {
            soldierFish.push(fish)
            }
        }    
    return soldierFish
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    const fishFilter = getFish()
    for (fish of fishFilter) {
        if (fish.length % 3 !== 0 || fish.length % 5 !== 0)
        regularFish.push(fish)
    }
    return regularFish
}