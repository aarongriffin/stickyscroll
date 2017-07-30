var fs = require("fs");
try
{
    fs.mkdirSync("./source");
    fs.mkdirSync("./source/packages");
    fs.mkdirSync("./source/styles");
    fs.mkdirSync("./source/scripts");
    fs.mkdirSync("./source/assets");
    fs.mkdirSync("./build");
    fs.mkdirSync("./build/css");
    fs.mkdirSync("./build/fonts");
    fs.mkdirSync("./build/js");
    fs.mkdirSync("./build/images");
    fs.mkdirSync("./build/images/favicons");
    fs.mkdirSync("./build/images/logos");
    fs.mkdirSync("./dist");
    fs.mkdirSync("./dist/app");
    fs.mkdirSync("./dist/public");
    fs.mkdirSync("./dist/public/css");
    fs.mkdirSync("./dist/public/fonts");
    fs.mkdirSync("./dist/public/js");
    fs.mkdirSync("./dist/public/images");
    fs.mkdirSync("./dist/public/images/favicons");
    fs.mkdirSync("./dist/public/images/logos");
}
catch(e){}
