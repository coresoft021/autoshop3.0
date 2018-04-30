import { Sequelize } from "sequelize";


var sequelize = new Sequelize('postgres://eabenglqnnlxii:3895dc322b94f951b9e3eddc203744d5fcfa9c228c504b489cd1a96f875c74cd@ec2-54-235-193-34.compute-1.amazonaws.com:5432/d50eu6rmqqbp5r');



// var sequelize = new Sequelize('postgres://etaqmobqletrrd:01e51d39889a89dd5aa428ee93de45dc15a2f5c7c4b20f4d6d732256df9b55df@ec2-184-73-189-190.compute-1.amazonaws.com:5432/ddr69qdleugjll');


export {   Sequelize, sequelize };
