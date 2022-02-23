//Module 3

function trim() {
    let name = '  Vineet Kumar      '
    console.log('Trimmed name is: ',name.trim())
}

function changetoLowerCase() {
    let name = 'VinEEt kUmAR'
    console.log('Name in lowercase is: ',name.toLowerCase())
}

function changeToUpperCase() {
    let name = 'vineet kumar'
    console.log('Name in uppercase is: ',name.toUpperCase())
}

module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase = changeToUpperCase