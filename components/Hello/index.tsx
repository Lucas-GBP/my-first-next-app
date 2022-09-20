import {FC} from "react"

interface helloProps{
    name: string;
}

export const Hello:FC<helloProps> =(props) =>{
    return <h1 className="HelloClass ">
        Hello World! {props.name}
    </h1>
}