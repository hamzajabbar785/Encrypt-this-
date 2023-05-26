// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.

// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

const encryptThis = (str) => {
    let newArr = []
    str = str.split(" ")
    for(let letter of str){
        let strArr = letter.split("")
        strArr = strArr.map((el, i, arr) => {
            if(i === 0){
                return el.charCodeAt(0)
            }else if(i === 1){
                return arr[arr.length - 1]
            }else if(i === arr.length - 1){
                return arr[1]
            }else{
                return el
            }
        })
        newArr.push(strArr.join(""))
    }
    return newArr.join(" ")
}

encryptThis("Hello")