import React, { useState } from 'react'
import './style.css'

interface Props{
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    handleAdd:(e:React.FormEvent)=>void
}
const InputField:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
    
  return (
    <form className='input' onSubmit={handleAdd}>
    <input type="text" placeholder="enter a task" id="" className='input__box' value={todo} onChange={(e)=>setTodo(e.target.value)} />
    <button className='input_submit'>SEND</button>
    </form>
  )
}

export default InputField