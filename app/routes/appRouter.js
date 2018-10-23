module.exports = function(app){
    var appList = require('../controllers/appController.js');

    app.route('/users').get(appList.get_all_tasks).post(appList.create_task);    
    app.route('/users/:taskId').get(appList.get_task_by_id).put(appList.update_task).delete(appList.delete_task);
    
};