import React from "react";

export default function UserReview() {
    const inputs = [
        {
            id: "review1",
            name: "person1",
            content: "review lorem ipsum dolor si amet",
        },
        {
            id: "review2",
            name: "person2",
            content: "review lorem ipsum dolor si amet",
        },
        {
            id: "review3",
            name: "person3",
            content: "review lorem ipsum dolor si amet",
        },
        {
            id: "review8",
            name: "person8",
            content: "review lorem ipsum dolor si amet",
        },
        {
            id: "review4",
            name: "person4",
            content: "review lorem ipsum dolor si amet",
        },
        {
            id: "review5",
            name: "person5",
            content: "review lorem ipsum dolor si amet",
        },
        {
            id: "review6",
            name: "person6",
            content: "review lorem ipsum dolor si amet",
        },
        {
            id: "review7",
            name: "person7",
            content: "review lorem ipsum dolor si amet",
        },
    ]
    return (
        <>
            <div className="overflow-hidden relative min-h-screen w-full">
                <div className="flex absolute left-0 justify-center items-center gap-4 h-full w-[200%] animate-[slide_linear_30s_infinite]">
                    {inputs.map((input) => (
                        <div key={input.id} className="flex justify-center flex-col items-start w-60 px-4 py-3 border rounded">
                            <h1 className="text-lg font-semibold">{input.name}</h1>
                            <p className="text-base">{input.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}