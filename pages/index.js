import { useState } from "react";
import Link from "next/link";

function Home() {
    return (
        <div>
            <h2>Home - Navegar 1</h2>
            <Contador/>
            <br/>
            <Link legacyBehavior href="/sobre">
                <a>Página sobre</a>
            </Link>
        </div>
    )    
}


function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        console.log(contador);
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Contador</button>
        </div>
        
    )
}
export default Home

