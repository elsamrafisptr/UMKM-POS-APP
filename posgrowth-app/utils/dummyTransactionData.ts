import { number } from "zod";
import { ProductData, ProductDataType } from "./dummyProductData";
import { EmployeeData, EmployeeDataType } from "./dummyEmployeeData";
import { OutletData, OutletDataType } from "./dummyOutletData";

export type TransactionDataType = {
    id: string;
    date: string;
    paymentMethod: string;
    product: ProductDataType[];
    total: number;
    employee: EmployeeDataType["username"];
    outlet: OutletDataType[];
};

export const TransactionData: TransactionDataType[] = [
    {
        id: "1",
        date: "",
        paymentMethod: "Cash",
        product: [
            {
                title: ProductData[1].title,
                price: ProductData[1].price,
                category: ProductData[1].category,
                image: ProductData[1].image,
                stock: ProductData[1].stock,
            },
            {
                title: ProductData[2].title,
                price: ProductData[2].price,
                category: ProductData[2].category,
                image: ProductData[2].image,
                stock: ProductData[2].stock,
            },
        ],
        total: ProductData[1].price + ProductData[2].price,
        employee: EmployeeData[1].username,
        outlet: [OutletData[1]],
    },
    {
        id: "2",
        date: "",
        paymentMethod: "Cash",
        product: [
            {
                title: ProductData[1].title,
                price: ProductData[1].price,
                category: ProductData[1].category,
                image: ProductData[1].image,
                stock: ProductData[1].stock,
            },
            {
                title: ProductData[2].title,
                price: ProductData[2].price,
                category: ProductData[2].category,
                image: ProductData[2].image,
                stock: ProductData[2].stock,
            },
        ],
        total: ProductData[1].price + ProductData[2].price,
        employee: EmployeeData[1].username,
        outlet: [OutletData[1]],
    },
    {
        id: "1",
        date: "",
        paymentMethod: "Cash",
        product: [
            {
                title: ProductData[1].title,
                price: ProductData[1].price,
                category: ProductData[1].category,
                image: ProductData[1].image,
                stock: ProductData[1].stock,
            },
            {
                title: ProductData[2].title,
                price: ProductData[2].price,
                category: ProductData[2].category,
                image: ProductData[2].image,
                stock: ProductData[2].stock,
            },
        ],
        total: ProductData[1].price + ProductData[2].price,
        employee: EmployeeData[1].username,
        outlet: [OutletData[1]],
    },
];
