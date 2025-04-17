"use client"
import { useState } from "react"
import { useId } from "react";

interface IProps {
    label: string
}

export const CheckListOption = ({ label }: IProps) => {
    const uniqueId = useId();
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="flex flex-row gap-2 cursor-pointer ">
            <input
                id={uniqueId}
                type="checkbox"
                className="w-6 h-6 cursor-pointer"
                aria-label={label}
                checked={isChecked}
                onClick={() => setIsChecked(!isChecked)}
            />
            <label
                htmlFor={uniqueId}
                className={`${isChecked? "line-through text-gray-600" : "text-white"} cursor-pointer`}
            >
                {label}
            </label>
        </div>
    )
}