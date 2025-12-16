import { useState } from "react";

export default function TestPage(){

    const [count, setCount] = useState(10);

    return(
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[500px] h-[500px] bg-amber-100 text-white flex justify-center items-center gap-[25px]">

                <button
                    onClick={() => {
                        console.log("Adding....");
                        setCount(count + 1);
                    }}
                    className="w-[100px] bg-accent h-[50px] rounded-lg"
                >
                   +
                </button>

                <span className="text-accent text-5xl">
                    {count}
                </span>

                <button
                    onClick={() => {
                        console.log("decreasing....");
                        setCount(count - 1);
                    }}
                    className="w-[100px] bg-accent h-[50px] rounded-lg"
                >
                    -
                </button>

            </div>
        </div>
    );
}