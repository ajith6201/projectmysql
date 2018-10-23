'use strict';
var sql = require('./db.js');

//create constructor of task

var Task = function(task){
    this.task = task.task,
    this.status = task.status,
    this.Created_at = new Date();
};

    Task.getAllTask = function getAllUser(result){
        sql.query("SELECT * FROM employee_demo",function(err,res){
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
        
        sql.query("SELECT * FROM employee_demo WHERE id = ?",taskId,function(err,res){
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
        sql.query("INSERT INTO employee_demo SET ?",newTask,function(err,res){
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
        sql.query("UPDATE employee_demo SET task = ?,status = ? WHERE id = ?",[task.task,task.status,id],function(err,res){
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
        sql.query("DELETE FROM employee_demo WHERE id = ?",id,function(err,res){
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