import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { getSortedPostsData, MatterResult } from '../../lib/posts'

interface ServerSideProps {
    allPostsData:MatterResult[]
}

export const getStaticProps:GetStaticProps = async () =>{
    const allPostsData = getSortedPostsData();
    console.log(allPostsData);
    return{
        props:{
            allPostsData,
        },
    }
}

const ServerSideRendering:NextPage<ServerSideProps> = (props) => {
    return <>
        <Head>
            <title>Server Side Rendering Test</title>
        </Head>
        <header className="bg-black h-16 text-left mb-4">
            <h1 className="text-5xl pl-5">Server Side Rendering</h1>
        </header>
        <h2>Information: </h2>
        <ul>{
            props.allPostsData.map(
                ({id, title, date}) => (
                    <li key={id}>
                        {id}<br/>
                        {title}<br/>
                        {date}
                    </li>
                )
            )    
        }</ul>
        <footer className='hover:bg-blue-900'>
            <Link href="/">Home</Link>
        </footer>
    </>;
}
export default ServerSideRendering;