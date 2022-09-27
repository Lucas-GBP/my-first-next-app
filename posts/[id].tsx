import { GetStaticProps, NextPage } from "next";

interface pageProps{

}
const Page:NextPage<pageProps> = (props) => {
    return <></>;
}
export default Page;


export const GetStaticPaths = () => {
    
}

interface staticProps {

}
export const getStaticProps:GetStaticProps<staticProps> = async (context) => {
    return {    
        props:{

        }
    }
}