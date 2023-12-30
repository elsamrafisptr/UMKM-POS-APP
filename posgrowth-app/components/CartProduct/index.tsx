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
                        <button onClick={handleClick2}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 text-red-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                        </button>
                        <h1 className="font-bold">{counter}</h1>
                        <button onClick={handleClick1}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 text-blue-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
