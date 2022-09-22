import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

export default function ServerSideRendering(){
    return <>
        <h2>Information: </h2>
        <p></p>
    </>;
}

export const getStaticProps:GetStaticProps = async () =>{
    return{
        props:{
            data: "A data",
        }
    }
}