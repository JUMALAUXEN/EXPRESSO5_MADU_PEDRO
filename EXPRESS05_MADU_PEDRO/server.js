const express = require ('express')
const mysql = require ('mysql2')

const mysql_config=require('./mysql_config')

//subir o servidor
const app=express()
app.listen(3000,()=>{
    console.log("Servidor WEB em execução")
})

//criar a conexão com o BD
const connection = mysql.createConnection(mysql_config)

//escrever as rotas
app.get('/',(req,res)=>{
    //criar um objeto result para todos os endpoints da api
    let result = {
        status: 'sucesso',
        mesage: null,
        data: null
    }
})

//executar conexão 
    connection.query("SELECT * FROM tasks",(err,results)=>{
        if(err){
            result.status="Erro";
            result.mesage="Erro na obtenção das tarefas"
            result.data= [];
            //res.send(result);
            res.json(results);
        } else{
            result.status = "Sucesso"
            result.message = "Tarefas obtidas com sucesso"
            result.data = results;
            //res.send(results);
            res.json(results);
        }
    })