const AddTaskForm=({newTask,setNewTask,addTask})=>{
    return(
        <>
       
    <div className="row">
     <div className="col">
       <input 
       value={newTask}
       onChange={(e)=>setNewTask(e.target.value)}
       
       className="form-control form-control-lg" required></input>
       {console.log(newTask)}
     </div>
     <div className="col-auto">
       <button className="btn btn-lg btn-success" onClick={addTask}>Add Task</button>
     </div>
    </div>


       </>
    )
}
export default AddTaskForm;
