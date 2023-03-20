const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

// Create directory in Synchron Way
// If directory is exist you will receive ERROR
//fs.mkdirSync(path.resolve('dir'));

// to Create involved directories you need do recursively
//fs.mkdirSync(path.resolve('dir', 'dir1', "dir2"), {recursive:true})


// // Create and remove direction in Asynchron Way
// console.log("Start");
// // with error without {recursive:true}
// fs.mkdir(path.resolve(__dirname,"dir", 'dir1', 'dir2'), {recursive:true}, (err)=>{
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("Directories were created");
// } )
// // simgle directory
// fs.mkdir(path.resolve(__dirname,"dir"), (err)=>{
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("Directory was created successfully");
// } )

// fs.rmdir(path.resolve(__dirname, "dir"), (err)=>{
//     if (err) {
//         throw err
//     }
//     console.log('Directory was removed successfully');
// })
// console.log("End");

//Create files
// // Hell of callbacks
// fs.writeFile(path.resolve(__dirname, 'text.txt'), "flskjgsm sdfsl sdljs\n", (err)=>{
//     if (err) {
//         throw err
//     }
//     fs.appendFile(path.resolve(__dirname, 'text.txt'), "Add a text first time\n", (err)=>{
//         if (err) {
//             throw err
//         }
//         fs.appendFile(path.resolve(__dirname, 'text.txt'), "Add a text second time\n", (err)=>{
//             if (err) {
//                 throw err
//             }
//         })
//     })
// })

// Custom procedures to work with file
const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}
const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding:'utf-8'}, (err, data) => {
        if (err) {
            return reject(err);
        }
        resolve(data);
    }))
}

const removeFileAsync = async (path) => {
    return new Promise ((resolve, reject) => fs.rm(path, (err)=>{
        if (err) {
            return reject(err)
        }
        console.log("File is removed");
        resolve()
    }))
}

//const pathFile = path.resolve(__dirname, 'test.txt')
// writeFileAsync(pathFile, "Data:\n")
//     .then(() => appendFileAsync(pathFile, 'first\n'))
//     .then(() => appendFileAsync(pathFile, 'second\n'))
//     .then(() => readFileAsync(pathFile))
//     .then((data) => console.log(data))
//     .then(() => removeFileAsync(pathFile))
//     .catch((err) => console.log(err));


// // get a data from environment variables
// // write the data to file 
// // read from file data
// // count the number of data units
// // write the number to new file
// const pathFile = path.resolve(__dirname, 'test.txt')
// const text = process.env.TEXT || '';
// console.log("text = ", text, '-\n');
// writeFileAsync(pathFile, text)
//     .then(() => readFileAsync(pathFile))
//     .then(data => data.split(' ').length)
//     .then(length => writeFileAsync(path.resolve(__dirname, 'length.txt'), `Number of words: ${length}`))
//     .then(() => removeFileAsync(pathFile))
//     .catch((err) => console.log(err))