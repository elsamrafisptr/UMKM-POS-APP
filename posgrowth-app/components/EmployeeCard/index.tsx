import Image from "next/image";
import React from "react";
import { EmployeeDataType } from "@/utils/dummyEmployeeData";
import DeleteEmployee, { EmployeeType } from "./deleteEmployee";
import UpdateEmployee from "./updateEmployee";

const EmployeeCard = (props: EmployeeType) => {
    return (
        <div className="p-4 bg-white grid grid-cols-3 gap-2 rounded">
            <span className="col-span-1 relative h-20 w-20">
                <Image
                    src={"/img3.webp"}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </span>
            <span className="flex flex-col gap-0.5 col-span-2">
                <h1 className="font-bold">{props.username}</h1>
                <p className="text-sm truncate text-gray-600">{`${props.email}`}</p>
                <span className="flex justify-end gap-2">
                    <UpdateEmployee employee={props} />
                    <DeleteEmployee employee={props} />
                </span>
            </span>
        </div>
    );
};

export default EmployeeCard;
