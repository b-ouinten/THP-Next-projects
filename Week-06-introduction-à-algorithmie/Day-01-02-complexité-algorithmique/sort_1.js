const fs = require('fs');

console.log('New execution !')

class Sort {
  constructor(fileName) {
    this.fileName = fileName;
    this.numComparaisons = 0;
  }

  readFile = () => {
    fs.readFile(fileName, 'utf8', (error, data) => {
      if (error) {
        console.error(error.message);
        return ;
      }
      
      if (!data.length) {
        console.error('File empty !');
        return;
      }
      
      const er = data.split(' ').reduce((acc, el, index) => Number(el) ? acc : [...acc, index + 1], []);
    
      if (er.length) {
        console.error(`No numbers in positions : ${er.join(', ')} !`);
        return
      }
      
      console.log(Array.from(data.split(' '), (el) => Number(el)));
    });
  }
}

const fileName = process.argv[2] || '';

s = new Sort(fileName);

s.readFile();
