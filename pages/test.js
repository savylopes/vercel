
import useSWR from "swr";
import Input from "../components/Input";
import Head from 'next/head'
import { Button } from "react-bootstrap";

export default function TestPage() {

    const fetcher = (...args)=> fetch(...args).then(res=>res.json())

    const {data,error} = useSWR('api/boris',fetcher);

    let content = <></>

    if (data) content = 
        <>
            <p>Nome: {data.name}</p>
            <p>Nome mãe: {data.motherName}</p>
            <Input/>
            <Button variant="outline-primar">test</Button>
            <Head>
                <script src="/script.js"></script>
            </Head>
        </>


  return content
  
}
