import type { NextPage } from 'next'
/*import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'*/
import Link from 'next/link'

import { Hello } from '../components/Hello'
import { Page } from '../components/Page'

const Home: NextPage = () => {
    return (
        <Page title='Home'>
            <ul>
                <li><Link href='/projects/calculatorReact'>Calculator React</Link></li>
            </ul>
        </Page>
    )
}

export default Home
