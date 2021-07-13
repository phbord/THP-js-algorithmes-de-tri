const fs = require('fs');
const fileName = process.argv[2];
console.log('>>>> ', fileName,'>>>> ');

// Méthode Asynchrone
fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error('1. error ====> ', error.message);
        return;
    }
    console.log('1. data ====> ', data);
});

// Méthode Synchrone
try {
    const data = fs.readFileSync(fileName, 'utf8');
    console.log('2. data ====> ', data);
}
catch (error) {
    console.error('2. error ====> ', error.message);
}

// Commandes :
// `node script.js data.txt`