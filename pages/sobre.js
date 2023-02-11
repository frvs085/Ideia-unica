import Link from "next/link";

function Sobre() {
    return (
        <div>
            <h2>Navegando para Sobre</h2>
            <br/>
            <Link legacyBehavior href="/">
                <a>Página Home</a>
            </Link>
        </div>
    )    
}
export default Sobre