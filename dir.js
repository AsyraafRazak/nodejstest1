const fs = require('fs');

if(!fs.existsSync('./new')){
    //make directory
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory created')
    });
}

if(fs.existsSync('./new')){
    //remove directory
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory removed')
    });
}