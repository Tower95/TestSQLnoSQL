const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'test1',
    password: 'example',
    port: 5432,
})
var faker = require('faker');

exports.Insert = (total) => {
    for (let i = 0; i < total; i++) {
        var randomName = faker.name.findName();
        pool.query(`INSERT INTO tabla(name ) VALUES ('${randomName.toString()}');`, (err, res) => {
            if (err) {
                console.log(err);
            }

        })
    }
}
exports.Select = () => {
    pool.query(`SELECT all FROM tabla;`, (err, res) => {
        if (err) {
            console.log(err);
        } if (res) {
            console.log('postgres respond is ok');
        }

    })
}
exports.Update = (total) => {
    for (let i = 0; i < total; i++) {
        var randomName = faker.name.findName();
        pool.query(`UPDATE tabla SET name = '${randomName}'where id = ${i + 393}`, (err, res) => {
            if (err) {
                console.log(err);
            } if (res) {
                console.log(res);
            }

        });
    }
}

exports.Delete = (total) => {
    pool.query(`DELETE FROM tabla`, (err, res) => {
        if (err) {
            console.log(err);
        } if (res) {
            console.log(res);
        }

    });

}
exports.Close = () => {
    pool.end().then(()=>{
        console.log('Test end ');
    });
}


