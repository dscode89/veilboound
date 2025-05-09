import readline from "node:readline/promises";
import {stdin as input, stdout as output } from 'node:process'

const rl = readline.createInterface({ input, output });
const logo = ` ▄▀▀▄ ▄▀▀▄  ▄▀▀█▄▄▄▄  ▄▀▀█▀▄    ▄▀▀▀▀▄      ▄▀▀█▄▄   ▄▀▀▀▀▄   ▄▀▀▄ ▄▀▀▄  ▄▀▀▄ ▀▄  ▄▀▀█▄▄      
█   █    █ ▐  ▄▀   ▐ █   █  █  █    █      ▐ ▄▀   █ █      █ █   █    █ █  █ █ █ █ ▄▀   █     
▐  █    █    █▄▄▄▄▄  ▐   █  ▐  ▐    █        █▄▄▄▀  █      █ ▐  █    █  ▐  █  ▀█ ▐ █    █     
   █   ▄▀    █    ▌      █         █         █   █  ▀▄    ▄▀   █    █     █   █    █    █     
    ▀▄▀     ▄▀▄▄▄▄    ▄▀▀▀▀▀▄    ▄▀▄▄▄▄▄▄▀  ▄▀▄▄▄▀    ▀▀▀▀      ▀▄▄▄▄▀  ▄▀   █    ▄▀▄▄▄▄▀     
            █    ▐   █       █   █         █    ▐                       █    ▐   █     ▐      
            ▐        ▐       ▐   ▐         ▐                            ▐        ▐             
            
 Welcome to Veilbound...a game of choice and chance,  where ultimately you will decide the fate of your chosen character..are
 you ready to precede?`;

const initialAnswer = await rl.question(`${logo}`);


// rl.question(`${logo}`, (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });
