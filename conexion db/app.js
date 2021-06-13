
var mysql=require('mysql');

var conexion=mysql.createConnection({
host: 'localhost',
database: 'mysql',
user: 'root',
password: '',
port: 3306
});
    
conexion.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log('conexion exitosa');
    }
}
);

conexion.end();