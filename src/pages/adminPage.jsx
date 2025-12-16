import { Routes,Route } from "react-router-dom";

export default function AdminPage(){
    return (
        <div className="w-full h-full bg-primary flex p-2">
            <div className="w-[300px] h-full bg-accent">

            </div>
            <div className="w-[calc(100%-300px)] h-full  border-[2px] border-accent   rounded-[20px] ">
                <Routes path="/">
                    <Route path="/" element={<h1>Dashboard</h1>} />
                    <Route path="/products" element={<h2>Products</h2>} />
                    <Route path="/orders" element={<h3>Orders</h3>} />
                </Routes>

            </div>
            
        </div>

    )
}