import { FC } from "react";
import styles from "./../Calculator.module.css"

export type matrixButton = {
    label: string;
    onClick: (()=>void);
}
interface matrixProps{
    matrix: matrixButton[][];
    sizeButton?: string|number;
}
export const CalMatrix: FC<matrixProps> = (props) => {
    const elements = props.matrix.map(
        (lista, index) => 
        <li key={index} className='min-w-fit'>{lista.map(
            (j, index) => 
            <button key={index} onClick={j.onClick} className={styles.calculator_button}>{j.label}</button>
        )}</li>
    );

    return <ul className="max-w-[288px]">{elements}</ul>;
}
