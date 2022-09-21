import {FC} from "react"
import styles from "./Hello.module.css"

interface helloProps{
    name?: string;
}

export const Hello:FC<helloProps> =(props) =>{
    return <h1 className={styles.HelloClass}>
        Hello World! {props.name}
    </h1>
}