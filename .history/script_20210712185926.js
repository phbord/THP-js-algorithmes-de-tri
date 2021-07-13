const fs = require('fs');
const fileName = process.argv[2];

// Méthode asynchrone
fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        console.log('1. data: ', data);
        return ;
    }
    console.log('1. data: ', data);
});

// Méthode synchrone
try {
    const data = fs.readFileSync(fileName, 'utf8');
    console.log(data);
} catch (error) {
    console.error(error.message);
}