const fs = require('fs');

// Load your JSON file
const inputFile = 'sample-keepa-notification.json'; // Change this to your input file name
const outputFilePrefix = 'extracted'; // Change this to your desired output file prefix

fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading JSON file: ${err}`);
    return;
  }

  try {
    const dataObj = JSON.parse(data);
    const dataArray = dataObj;

    const outputFiles = [];

    const asinArray = [];
    dataArray.forEach((obj) => {
      asinArray.push(obj.asin)
    })

    const outputFileName = `${outputFilePrefix}_${inputFile}.json`;
    console.log('outputfile', outputFileName)
    fs.writeFileSync(outputFileName, JSON.stringify(asinArray, null, 2));

    outputFiles.push(outputFileName);
    console.log(`Created ${outputFileName}`);

    console.log('Created the following output files:');
    console.log(outputFiles);
  } catch (error) {
    console.error(`Error parsing JSON data: ${error}`);
  }
});