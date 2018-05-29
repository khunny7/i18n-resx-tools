if (process.argv.length <= 3) {
    console.log("Usage: " + __filename + "[i18n file path] [string.resx path]");
    process.exit(-1);
}

var i18FileName = process.argv[2];
var resxFileName = process.argv[3];

var fs = require('fs');

fs.readFile(resxFileName, 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }

    const resx2js = require('resx/resx2js');

    var xml = data;

    resx2js(xml, (err, res) => {
        console.log(res);
    });
});
