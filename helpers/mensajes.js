const { read } = require('fs');

require('colors');

const showMenu = () => {
    return new Promise( resolve => {

        console.clear();
    
        console.log("===============================".green);
        console.log("       Select an option ". green);
        console.log("===============================\n". green);
    
        console.log(`${ '1.'.green } Create task.`);
        console.log(`${ '2.'.green } List tasks.`);
        console.log(`${ '3.'.green } List finish tasks.`);
        console.log(`${ '4.'.green } List pending tasks.`);
        console.log(`${ '5.'.green } Finalize task(s).`);
        console.log(`${ '6.'.green } Delete task.`);
        console.log(`${ '0.'.green } Exit.\n`);
    
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question('Input selection: ', (opt) => {        
            readLine.close();
            resolve(opt);
        });
    });
    
}

const pause = () => {

    return new Promise(resolve => {
        
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        readLine.question(`\nPress ${ 'ENTER'.green } for continue \n`, (opt) => {        
            readLine.close();
            resolve();
        });    
    });
}

module.exports = { showMenu, pause }