import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}


function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }


    const cnAll = classes.button + " " + (props.filter === 'all' ? classes.active : "")
    const cnHigh = classes.button + " " + (props.filter === 'high' ? classes.active : "")
    const cnMiddle = classes.button + " " + (props.filter === 'middle' ? classes.active : "")
    const cnLow = classes.button + " " + (props.filter === 'low' ? classes.active : "")

    return (
        <div>

            {mappedAffairs}

            <SuperButton
                onClick={setAll}
                className={cnAll}
            >
                all {/*// название кнопки попадёт в children*/}
            </SuperButton>
            <SuperButton
                onClick={setHigh}
                className={cnHigh}
            >
                high {/*// название кнопки попадёт в children*/}
            </SuperButton>
            <SuperButton
                onClick={setMiddle}
                className={cnMiddle}
            >
                middle {/*// название кнопки попадёт в children*/}
            </SuperButton>
            <SuperButton
                onClick={setLow}
                className={cnLow}
            >
                low {/*// название кнопки попадёт в children*/}
            </SuperButton>






{/*            <button onClick={setAll} className={cnAll}>All</button>
            <button onClick={setHigh} className={cnHigh}>High</button>
            <button onClick={setMiddle} className={cnMiddle}>Middle</button>
            <button onClick={setLow} className={cnLow}>Low</button>*/}
        </div>
    )
}

export default Affairs
