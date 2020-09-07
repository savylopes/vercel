import { useRouter } from "next/router";

export default function Post(){
    
    const {query} = useRouter();

    console.log(query)
    return <></>
}