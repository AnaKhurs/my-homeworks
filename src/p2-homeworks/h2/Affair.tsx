import React from 'react'
import {AffairType} from "./HW2";
import classes from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)

    const priorityClass = classes.task + ' ' + classes[props.affair.priority]

    return (
        <div className={classes.tasksBlock}>
            <div className={classes.task}>{props.affair.name}</div>
            <div className={priorityClass}>[{props.affair.priority}]</div>
            <button onClick={deleteCallback} className={classes.buttonX}>X</button>
        </div>
    )
}

export default Affair
