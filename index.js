// const fs = require('fs');
const fsPromises = require('fs').promises; 
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'starter.txt'), 'utf8');
        console.log(data);
        
        //delete
        await fsPromises.unlink(path.join(__dirname, 'starter.txt'));

        await fsPromises.writeFile(path.join(__dirname, 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'promiseWrite.txt'), '\n\nNice to meet you. ');
        await fsPromises.rename(path.join(__dirname, 'promiseWrite.txt'), path.join(__dirname, 'promiseComplete.txt'));

        const newData = await fsPromises.readFile(path.join(__dirname, 'promiseComplete.txt'), 'utf8');
        console.log(newData);
    } catch (err) {
        console.error(err);
    }
}

fileOps();

/*
//read
fs.readFile(path.join(__dirname, 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})
*/

// console.log('Hello...');

/*
//write
fs.writeFile(path.join(__dirname, 'reply.txt'), 'Hello gak', (err, data) => {
    if (err) throw err;
    console.log('Write complete');

    //update file
    fs.appendFile(path.join(__dirname, 'reply.txt'), '\n\nWohoo', (err, data) => {
        if (err) throw err;
        console.log('Append complete');

        //rename
        fs.rename(path.join(__dirname, 'reply.txt'), path.join(__dirname, 'newReply.txt'), (err, data) => {
            if (err) throw err;
            console.log('Rename complete');
        })

    })

})
    */

//exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})
