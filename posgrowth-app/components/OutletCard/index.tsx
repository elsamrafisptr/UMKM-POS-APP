"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ProductDataType } from "@/utils/dummyProductData";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { OutletDataType } from "@/utils/dummyOutletData";
import UpdateOutlet from "./updateOutlet";
import DeleteOutlet from "./deleteOutlet";

export type OutletType = {
    id: string;
    name: string;
    contact: string
    address: string
    owner: string
};

const OutletCard = (props: OutletType) => {

    return (
        <div className="p-4 bg-white flex flex-col gap-2 rounded-lg">
            <span className="relative w-full h-48 rounded overflow-hidden">
                <Image
                    src={"/img3.webp"}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </span>
            <span className="flex flex-col gap-0.5 col-span-2">
                <h1 className="font-bold">{props.name}</h1>
                <h2 className="font-medium text-sm text-gray-700">{props.owner}</h2>
                <p className="text-sm text-gray-700">Alamat : {props.address}</p>
                <p className="text-sm text-gray-700">Kontak : {props.contact}</p>
                <span className="flex flex-row gap-4 justify-end pr-2">
                    <UpdateOutlet outlet={props} />
                    <DeleteOutlet outlet={props} />
                </span>
            </span>
        </div>
    );
};

export default OutletCard;
