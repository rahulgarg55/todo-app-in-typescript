class tasklists{
    private tasks:taskk[]=[]; //will store an array of 'task' objects.
 //marked private because it can be only accessed with the 'tasklist' class.
    
 addtask(task:taskk):void{
        this.tasks.push(task); 
}
completetask(index:number):void{
    this.tasks[index].completed = true; //marking task as completed by changing 'completed'
 //prooperty to 'true'
}
edittask(index:number,title:string,description:string):void{
    this.tasks[index].title=title;
    this.tasks[index].description=description;
}
deletetask(index:number):void{
    this.tasks.splice(index,1); //to specify the index of the task to be deleted
}
gettasks(completed:boolean|undefined=undefined):taskk[]{
    if(completed===undefined){ 
    return this.tasks;
}
return this.tasks.filter(task=>task.completed===completed);
//if completed is true or false, it filters the tasks based on their 'completed' property and returns the filtered arraay
//else it returns all the task.
}
}
