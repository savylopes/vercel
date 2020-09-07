import {useRouter} from "next/router";

export default function Item(){

    const route = useRouter();

    console.log(route.query);

    return<p>Item: {route.query.id}</p>;

}