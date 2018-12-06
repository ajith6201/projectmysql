'use strict';
var sql = require('./db.js');

//create constructor of task

var Task = function(task){
    this.FirstName = task.FirstName,
    this.LastName = task.LastName,
    this.Age = task.Age,
    this.Sex = task.Sex;
};

    Task.getAllTask = function getAllUser(result){
        sql.query("SELECT * FROM sample",function(err,res){
            if(err)
            {
                console.log('error :',err);
                result(err,null);                
            }
            else
            {
                result(null,res);
            }
        });
    };

    Task.getTaskById = function getTaskId(taskId,result){
        
        sql.query("SELECT * FROM sample WHERE id = ?",taskId,function(err,res){
            if(err)
            {
                console.log(err);
                result(err,null);
            }
            else
            {
                result(null,res);
            }
        });
    };

    Task.CreateTask = function create_user(newTask,result){
        sql.query("INSERT INTO sample SET ?",newTask,function(err,res){
            if(err)
            {
                console.log(err);
                result(err,null);
            }
            else
            {
                result(null,res);
            }
        });
    };

    Task.UpdateTaskById = function(id,task,result){
        sql.query("UPDATE sample SET FirstName = ?,LastName = ?,Age = ?,Sex = ? WHERE id = ?",[task.FirstName,task.LastName,task.Age,task.Sex,id],function(err,res){
            if(err)
            {
                console.log(err);
                result(err,null);
            }
            else
            {
                result(null,res);
            }
        });
    };

    Task.DeleteById = function(id,result){
        sql.query("DELETE FROM sample WHERE id = ?",id,function(err,res){
            if(err)
            {
                console.log(err);
                result(err,null);
            }
            else
            {
                result(null,res);
            }
        });
    };
module.exports = Task;