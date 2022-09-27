import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
    return <>
        <Head>
            <title>Home</title>
        </Head>
        <header className="bg-black shadow-lg pb-3">
            <h1 className="text-6xl text-center">Home</h1>
        </header>
        <main className='pl-5'>
            <div className='fixed left-0 flex flex-col shadow-lg p-2 pt-0 bg-black rounded-b-sm'>
                <h2 className='text-3xl p-2'>Projects</h2>
                <Link href='/projects/calculatorReact'>
                    <a className='w-full p-2 mt-2 text-blue-600 text-2xl
                        hover:bg-blue-900 hover:text-white rounded-sm hover:underline 
                        transition-all duration-250'>
                        Calculator React
                    </a>
                </Link>
                <Link href='/projects/serverSideRendering'>
                    <a className='w-full p-2 mt-2 text-blue-600 text-2xl
                        hover:bg-blue-900 hover:text-white rounded-sm hover:underline 
                        transition-all duration-250'>
                        Server Side Rendering 
                    </a>
                </Link>
            </div>
        </main>
        <footer className=''>
            A footer
        </footer> 
    </>;
}

export default Home;