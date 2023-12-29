"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ProductType } from "../ProductCard";

const CartProduct = (props: ProductType) => {
    //  Counter is a state initialized to 0
    const [counter, setCounter] = useState(1);

    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
        if (counter !== props.stock) {
            setCounter(counter + 1);
        }
        // Counter state is incremented
    };

    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
        if (counter !== 1) {
            setCounter(counter - 1);
        }
        // Counter state is decremented
    };
    return (
        <div className="flex flex-row gap-2 items-start w-full">
            <div className="w-16 h-16 relative">
                <Image
                    src={"/img3.webp"}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt=""
                />
            </div>
            <div className="w-full flex flex-col gap-2">
                <h1 className="font-bold">{props.name}</h1>
                <div className="flex flex-row justify-between">
                    <h1>Rp {props.price}</h1>
                    <span className="flex flex-row gap-1">
                        <button onClick={handleClick2}>min</button>
                        <h1 className="font-bold">{counter}</h1>
                        <button onClick={handleClick1}>plus</button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
