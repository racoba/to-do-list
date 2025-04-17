"use client"
import { useState } from "react"
import { useId } from "react";

interface IProps {
    label: string
    onRemove?: () => void
}

export const CheckListOption = ({ label, onRemove }: IProps) => {
    const uniqueId = useId();
    const [isChecked, setIsChecked] = useState(false);
    
    return (
        <div className="flex flex-row gap-2">
            <input
                id={uniqueId}
                type="checkbox"
                className="w-6 h-6 cursor-pointer"
                aria-label={label}
                checked={isChecked}
                onClick={() => setIsChecked(!isChecked)}
                onChange={() => console.log("changed")}
            />
            <label
                htmlFor={uniqueId}
                className={`${isChecked ? "line-through text-gray-600" : "text-white"} cursor-pointer`}
            >
                {label}
            </label>
            <button
                onClick={onRemove}
                className="text-red-400 hover:text-red-700 font-bold text-lg cursor-pointer"
                aria-label={`Remover ${label}`}
            >
                −
            </button>
        </div>
    )
}