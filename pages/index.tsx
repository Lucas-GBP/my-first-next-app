import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import LeftBarLink from './../components/LeftBarLinks'

const Home: NextPage = () => {
    return <>
        <Head>
            <title>Home</title>
        </Head>
        <header className="bg-black shadow-lg pb-3">
            <h1 className="text-6xl text-center">Home</h1>
        </header>
        <main className='pl-5'>
            <LeftBarLink 
                links={[ 
                    {href: '/projects/calculatorReact', label:'React Calculator', description: 'Uma Descrição'},
                    {href: '/projects/serverSideRendering', label: 'Server Side Rendering '}
                ]}>
                Projects
            </LeftBarLink>
        </main>
        <footer className=''>
            A footer
        </footer> 
    </>;
}

export default Home;