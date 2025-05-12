import { addNumbers, averageFrom } from "./main/helpers/my-things.js"
import { firstLetterToUpper as capitalize } from "./main/tools/tool-1.js"
import { countWords } from "./main/tools/tool-2.js"
import someUtil, { toSecondPower } from './main/utils/some-util.js'

/*
const lastLetter = someUtil.lastLetter
const numberOfChars = someUtil.numberOfChars
*/
const {lastLetter, numberOfChars} = someUtil; // object destructuring

export const stringHelper = {
    lastLetter,
    numberOfChars,
    countWords,
    capitalize,
}

export const numberHelper = {
    toSecondPower,
    addNumbers,
    averageFrom
}

//console.log(numberHelper)