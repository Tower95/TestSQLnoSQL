var faker = require('faker');
const postgresDb = require('./postgres');
const mongoDb = require('./mongo');

const total = 1000000
console.log('........write.......');
console.log('Incert:', total, ' items')

console.time('postgres write');
postgresDb.Insert(total)
console.timeEnd('postgres write');

console.time('mongo write');
mongoDb.Insert(total);
console.timeEnd('mongo write');

console.log('....................\n');
console.log('........read..........');
console.time('postgres read');
postgresDb.Select();
console.timeEnd('postgres read');

console.time('mongo read');
mongoDb.Select();
console.timeEnd('mongo read');
console.log('......................\n');


console.log('........update..........');
console.time('postgres update');
postgresDb.Update();
console.timeEnd('postgres update');

console.time('mongo update');
mongoDb.Update();
console.timeEnd('mongo update');
console.log('......................\n');

console.log('........Delet..........');
console.time('postgres Delet');
postgresDb.Delete();
console.timeEnd('postgres Delet');

console.time('mongo Delet');
mongoDb.Delete();
console.timeEnd('mongo Delet');
console.log('......................\n');

postgresDb.Close();





