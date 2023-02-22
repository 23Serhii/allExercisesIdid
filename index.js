

// const http = require('http')
// const express = require('express');

// const Person = require('./person');

// let person = new Person("Serhii", 24, '23 Veresnya', 'Kiev');

// person.show()



const path = require('path');

// // let nameOfFile = path.basename('D:/JABASCRIPT/powerShell/index', 'js')
// // console.log(nameOfFile)
// // let ext = path.extname('D:/JABASCRIPT/powerShell/index.js')
// // console.log(ext)
// // let dirName = path.dirname('D:/JABASCRIPT/powerShell/index.js')
// // console.log(dirName)
// // let isAbsolutePathAre = path.isAbsolute('D:/JABASCRIPT/powerShell/index.js')
// // console.log(isAbsolutePathAre)


const fs = require('fs');

let dir = __dirname + '/folder'
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
}


fs.writeFile('./folder/test1.txt', 'dasfawfawfaagasgdsds;ogkfsjfksdngn', function (error) { if (error) throw error })


fs.readFile('./folder/test1.txt', {
    encoding: 'utf-8'
}, function (err, data) {
    if (err) throw err
    console.log(data)

});

fs.rename('./folder/test1.txt', './folder/test2.txt', (err) => { if (err) { throw ere } })

fs.appendFile('./folder/test2.txt', "21352354643213456754", (err) => { if (err) throw err })
fs.unlink("./folder/test2.txt", (err) => { if (err) throw err })