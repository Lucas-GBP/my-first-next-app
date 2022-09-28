import { FC } from "react";
import Link from 'next/link';

export interface BarButtonProps{
    href:string,
    label:string,
    description?:string
}

const BarButton:FC<BarButtonProps> = (props) => {
    return <Link href={props.href}>
        <a className='w-full p-2 mt-2 text-blue-600 text-2xl
        hover:bg-blue-900 hover:text-white rounded-sm hover:underline 
        transition-all duration-250 group'>
        {props.label}
        <span className='absolute scale-0 bg-neutral-700 rounded-sm text-white text-xl
        group-hover:scale-100 transition-transform duration-200'>
            {props.description}
        </span>
        </a>
    </Link>
}
export default BarButton;