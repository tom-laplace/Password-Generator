const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specials = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let firstPasswordEl = document.getElementById("first-password")
let randomIndex

let conditions = ["upperCase", "lowerCase", "number", "specials"]

function generatePassword() {
    let firstPassword = ""
    while (firstPassword.length < 15) {
        let randomTab = Math.floor(Math.random() * conditions.length)
        switch (randomTab) {
            case 0:
                randomIndex = Math.floor(Math.random() * upperCase.length)
                firstPassword += upperCase[randomIndex]
                break;
            case 1:
                randomIndex = Math.floor(Math.random() * lowerCase.length)
                firstPassword += lowerCase[randomIndex]
                break;
            case 2:
                randomIndex = Math.floor(Math.random() * number.length)
                firstPassword += number[randomIndex]
                break;
            case 3:
                randomIndex = Math.floor(Math.random() * specials.length)
                firstPassword += specials[randomIndex]
                break;
            default:
                break;
        }
    }
    firstPasswordEl.textContent = firstPassword
}