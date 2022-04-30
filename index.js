require("colors");

const { inquirerMenu, pause } = require("./helpers/inquirer");


// const { showMenu, pause } = require("./helpers/mensajes");


console.clear();

const main = async() => {
     let opt = 0;

     do {
          opt = await inquirerMenu();
          //console.log({opt});

           if (opt !== 0) await pause();

     }while( opt !== 0);
          
};

 main();