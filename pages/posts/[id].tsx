import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from 'next/head'
import Link from "next/link";
import { getAllPostsIds, getPostData } from "../../lib/posts";

interface pageProps{
    postData:{
        title:string,
        id:string,
        date:string,
        contentHtml:string
    }
}
const Page:NextPage<pageProps> = (props) => {
    return <>
        <Head>
            <title>{props.postData.id}</title>
        </Head>
        <section>
            {props.postData.title} <br/>
            {props.postData.id} <br/>
            {props.postData.date} <br/>
            <br />
            <div dangerouslySetInnerHTML={{__html: props.postData.contentHtml}} />
        </section>
        <Link href='/projects/serverSideRendering'>Return</Link>
    </>;
}
export default Page;

export const getStaticPaths:GetStaticPaths = async () => {
    const paths = getAllPostsIds();
        return {
            paths,
            fallback: false,
        }
}

export const getStaticProps:GetStaticProps = async (context) => {
    let postData;
    if (context.params != undefined && context.params.id != undefined){
        postData = await getPostData(context.params.id);
    }

    return {    
        props:{
            postData
        }
    }
}