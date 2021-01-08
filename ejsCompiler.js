const fs   = require('fs'),
      ejs  = require('ejs');
      data = require('./data');


const compileEjs = async () => {
    const templateString = await fs.promises.readFile('./src/index.html', {
        encoding: 'utf8'
    });

    const template = ejs.compile(templateString);

    const outputString = template(data);

    await fs.promises.writeFile('index.html', outputString);
};


compileEjs();
