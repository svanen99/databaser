import React from "react";
import Navigation from "../Navigation";
import Link from "next/link";

const Header = () => {
    return (
        <header className="sticky top-0 bg-white shadow-md z-50">
            <div className="flex justify-between items-center py-4 px-8">
                <Link href="/"> <h1 className="text-2xl font-light font-reddit">Reddit</h1> </Link>
                <Navigation />
            </div>
        </header>
    )
}

export default Header;