import Link from "next/link";
import { FC } from "react";

interface pageProps {
    title:string
    children:JSX.Element
}

export const Page:FC<pageProps> = (props) => {
    return <>
        <header className="bg-black h-16 text-left mb-4">
            <h1 className="text-5xl">{props.title}</h1>
        </header>
        <main>
            {props.children}
        </main>
        <footer className='hover:bg-blue-900'>
            <Link href="\">Home</Link>
        </footer>
    </>;
}