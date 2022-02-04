const fs = require('fs');

const readFile = (filename, callback) => {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.log('Error: ', err);
        } else {
            callback(data);
        }
    });
};

const writeFile = (fileName, fileContent, callback) => {
    console.log(fileContent);
    fs.writeFile(fileName, fileContent, err => {
        if (err) {
            console.log('Error: ', err);
        } else {
            callback();
        };
    });
};

readFile('./input-file.json', fileContent => {
    console.log(fileContent)
    const newFileContent = JSON.parse(fileContent);
    newFileContent.user = 'Mamen';
    writeFile('./output-file.json', JSON.stringify(newFileContent), () => {
        console.log('The file content has been copied');
    });
});