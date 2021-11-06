import React from 'react'
import {AffairType} from "./HW2";
import classes from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)

    const priorityClass = /*classes.task + ' ' +*/  classes.priority + " " + classes[props.affair.priority]

    return (
        <div className={classes.tasksBlock}>
            <div className={classes.task}>{props.affair.name}</div>
            <div className={priorityClass}>[{props.affair.priority}]</div>

            <SuperButton
                red // пропсу с булевым значением не обязательно указывать true
                onClick={deleteCallback}
            >
                X {/*// название кнопки попадёт в children*/}
            </SuperButton>

            {/*<button onClick={deleteCallback} className={classes.buttonX}>X</button>*/}
        </div>
    )
}

export default Affair
