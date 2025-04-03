import Link from "next/link";
import Image from "next/image";

const notFound = () =>{
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <Image src={'/tan.png'} alt={'logo'} width={200} height={200} />
            <span className="text-violet-500">404</span>
            Page introuvable
            <br/>
            <Link href={'/'} className="hover:text-violet-500">Acceuil</Link>
        </div>
    )
}

export default notFound;