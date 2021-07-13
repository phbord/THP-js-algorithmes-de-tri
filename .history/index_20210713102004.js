const fs = require('fs');
const fileName = process.argv[2];

// Méthode Asynchrone
fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error('1. error ====> ', error.message);
        return;
    }
    console.log('1. data ====> ', data);
});
