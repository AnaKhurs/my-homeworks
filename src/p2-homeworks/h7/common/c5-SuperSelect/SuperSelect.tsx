import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import classes from './superSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, className,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options
        ? options.map((o, i) => <option className={classes.option} key={o + "-" + i} value={o}>{o}</option>)
        : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const finalSelectClassName = classes.select + (
        className
            ? " " + className
            : ""
    )

    return (
        <select className={finalSelectClassName} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
