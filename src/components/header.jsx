import { Link } from "react-router-dom"

export default function Header(){
    return (
        <header className="w-full bg-accent h-[100px] text-white px[40px">
            <div className="w-full h-full flex relative">
                <img src="/logo.png"  className="h-full absolute w-[150px] left-0 object-cover "/>
                <div className="h-full flex justify-center items-center w-full text-lg gap-[30px]">
                    <Link to="/" >Home</Link>
                    <Link to="/products" >Products</Link>
                    <Link to="/contact" >Contact Us</Link>
                    <Link to="/about" >About Us</Link>
                </div>
            </div>
            

        </header>
    )
}