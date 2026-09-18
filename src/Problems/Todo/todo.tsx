import React, { useEffect, useState } from "react";

function Todo(){

    const [todo,setTodo] = useState<string>("");
    const [todoList,setTodoList] = useState<string[]>([]);

    useEffect(()=>{

         let savedTodos = JSON.parse(localStorage.getItem('todo') || []);

         setTodoList(savedTodos)

    },[])
   
    function addTodo():void{

        if(!todo.trim()) return;

        const updatedTodo = [...todoList,todo];

        localStorage.setItem("todo",JSON.stringify('todos'))

        setTodo('');


        


    }
    return (

        <>
            <input type="text" name="todo" id="todo" placeholder="Please add task" onChange={e=>setTodo(e.target.value)}/>
            <button onClick={addTodo}>add</button>
            <div className="todo-list">

               <ul>
                 {
                    todos.map((todo:string,index:number)=>{

                        <li key={index}>{todo}</li>
                    })
                 }
               </ul>
            </div>
        </>
    )
}

export default Todo;