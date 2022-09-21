import React from "react";
import Head from "next/head";
import { Calculator } from '../../components/Calculator'
import { Page } from "../../components/Page";

export default function calculatorReactPage(){
    return <>
        <Head>
            <title>Calculadora React</title>
        </Head>
        <Page title="Calculadora com React">
            <Calculator id="calculadoraMassa"/>
        </Page>
    </>
}