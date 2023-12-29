import Image from "next/image";
import React from "react";
import { EmployeeDataType } from "@/utils/dummyEmployeeData";
import DeleteEmployee, { EmployeeType } from "./deleteEmployee";
import UpdateEmployee from "./updateEmployee";

const EmployeeCard = (props: EmployeeType) => {
    return (
        <div className="p-4 bg-white grid grid-cols-3 gap-2 rounded">
            <span className="col-span-1 relative h-full w-full">
                <Image
                    src={"/img3.webp"}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </span>
            <span className="flex flex-col gap-0.5 col-span-2">
                <h1 className="font-medium">{props.username}</h1>
                <p className="text-sm truncate">{`${props.email}`}</p>
            </span>
            <span>
                <UpdateEmployee employee={props} />
                <DeleteEmployee employee={props} />
            </span>
        </div>
    );
};

export default EmployeeCard;
