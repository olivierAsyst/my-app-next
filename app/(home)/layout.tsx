import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
    children: React.ReactNode;
}

const layout = ({ children } : Props) =>{
    return (
        <div className="w-full h-screen flex flex-col">
            <Header />
            { children }
            <Footer />
        </div>
    )
}

export default layout;