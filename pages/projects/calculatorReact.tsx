import React from "react";
import { Calculator } from '../../components/Calculator'
import { Page } from "../../components/Page";
import Link from "next/link";
import Head from "next/head";

export default function calculatorReactPage(){
    return <>
        <Page title="Calculadora com React">
            <Calculator id="calculadoraMassa"/>
        </Page>
    </>
}