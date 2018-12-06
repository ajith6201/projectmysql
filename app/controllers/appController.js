'use scrict';
var Task = require('../model/appModel.js');

exports.get_all_tasks = function(req,res){
    Task.getAllTask(function(err,task)
    {
        if(err)
        {
            res.send(err);
        }
        else
        {
            res.json(task);
        }
    });
};

exports.get_task_by_id = function(req,res){
    //console.log(req.params.taskId);
    Task.getTaskById(req.params.taskId,function(err,task){
        if(err)
        {
            res.send(err);
        }
        else
        {
            res.json(task);
        }
    });
};

exports.create_task = function(req,res){
   var new_task = new Task(req.body);
   if(!new_task)
   {
       res.status(400).send({error:true,message:'please provide task'});
   }
   else
   {
        Task.CreateTask(new_task,function(err,task){
        if(err)
            {
                res.send(err);
            }
        else
            {
                res.json(task);
            }
        });
   }
};

exports.update_task = function(req,res){
    console.log(req);
    Task.UpdateTaskById(req.params.taskId,new Task(req.body),function(err,task){
        if(err)
        res.send(err);

        res.json(task);
    });
};

exports.delete_task = function(req,res){
    Task.DeleteById(req.params.taskId,function(err,task){
        if(err)
        res.send(err);

        res.json({message:'Task deleted successfully'});
    });
};

