import { useEffect } from "react";

type Props = {
    message: string;
}

function Hello( { message }: Props) {

    useEffect( () => {
        // chamada da API para buscar produtos
        console.log('Iniciou componente Hello!')
    }, []);
    return (
        <h1>Hello { message }!</h1>
    )
}

export default Hello;