const fs = require('fs');
const sass = require('node-sass');

function renderStyle(path) {
   sass.render({
      file: path + '.scss',
      outputStyle: 'compact',
   }, (err, res) => {
      if (err) {
         console.error(err);
      } else {
         fs.writeFile(path + '.css', res.css, (err) => {
            if (err) {
               console.error(err);
            } else {
               console.log(`File "${path}.scss"\tsuccessfully compiled to "${path}.css"`)
            }
         });
      }
   });
}

renderStyle('./vk-customizer.user');
