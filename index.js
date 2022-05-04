require("colors");

const { saveData, readData } = require("./helpers/saveFile");

const { 
     inquirerMenu, 
     pause,
     readInput
} = require("./helpers/inquirer");

const Tasks = require("./models/tasks");

console.clear();

const main = async() => {
     let opt = 0;

     const tasks = new Tasks();

     const tasksdb = readData();

     if (tasksdb){
          tasks.loadTasksFromArray ( tasksdb );
     }

     

     do {                    
          opt = await inquirerMenu();          

          switch (opt) {
               case 1:
                    const desc = await readInput('Description: ');
                    tasks.createTask( desc );
                    break;
          
               case 2:
                    tasks.listAllTaks ();
                    // console.log( tasks.listArr);
                    break;
               case 3:
                    tasks.listfinishPending ( true );
                    break;
               case 4:
                    tasks.listfinishPending ( false );
                    break;
          }

          saveData(tasks.listArr);

          if (opt !== 0) await pause();

     }while( opt !== 0);
          
};

 main();