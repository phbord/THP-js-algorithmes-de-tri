const fs = require('fs');
const fileName = process.argv[2];

// Méthode asynchrone


// Méthode synchrone
try {
    const data = fs.readFileSync(fileName, 'utf8');
    console.log('2. data: ', data);
} catch (error) {
    console.error('2. error: ', error.message);
}