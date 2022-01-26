import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg'

import './Task.css'

const Task= ({ task, handleTaskClik, handleTaskDeletion}) => {
    return (
        <div 
            className='task-conteiner' 
            style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}
        >
            <div className='task-title' onClick={() => handleTaskClik(task.id)}>
            {task.title}
            </div>

            <div className='buttons-conteiner'>
                <button className='see-task-details-button'>
                    <CgInfo />
                </button>
                <button className='remove-task-button' onClick={() => handleTaskDeletion(task.id)}>
                    <CgClose />
                </button>
            </div>
        </div>
    )
   // return <div className='task-conteiner'>{task.title}</div>
}
 
export default Task;