import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation = () => {
    return (
        <nav className="flex justify-end">
            <ul className="flex gap-4">
                <Link href=""><Image src="/images/menu.png" width={25} height={25} alt={"menu"}/></Link>
                <Link href="/search"><Image src="/images/search.png" width={25} height={25} alt={"search"}/></Link>
                <Link href="/profile"><Image src="/images/user.png" width={25} height={25} alt={"profile"}/></Link>
            </ul>
        </nav>
    
    )
}

export default Navigation;