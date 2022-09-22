import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

import { Hello } from '../components/Hello'
import { getSortedPostsData } from '../lib/posts'

export const getStaticProps:GetStaticProps = async () =>{
    const res = getSortedPostsData();
    const info = res.json();

    console.log(info);
    return{
        props:{
            data: info,
        }
    }
}

const Home: NextPage = () => {
    return (<>
        <Head>
            <title>Home</title>
        </Head>

        <header className="bg-black h-16 text-left mb-4">
            <h1 className="text-5xl pl-5">Home</h1>
        </header>
        <main className='pl-5'>
            <Hello />

            <ul>
                <li className='hover:bg-blue-900'><Link href='/projects/calculatorReact'>Calculator React</Link></li>
            </ul>

        </main>
        <footer>
            
        </footer>
    </>);
}

export default Home;