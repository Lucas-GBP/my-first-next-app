import { FC } from "react";
import BarButton from "./BarButton"
import {BarButtonProps} from "./BarButton"

interface BarProps{
    children:string
    links:BarButtonProps[]
}

const LeftBarLinks:FC<BarProps> = (props) => {
    return <div className='fixed left-0 flex flex-col shadow-lg p-2 pt-0 bg-black rounded-b-sm'>
        <h2 className='text-3xl p-2'>{props.children}</h2>
        {props.links.map((link, index) => {
                return <BarButton href={link.href} label={link.label} description={link.description} key={index}/>
            }
        )}
    </div>
}
export default LeftBarLinks;