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
                className={`relative cursor-pointer transition-colors duration-300 ${isChecked ? "text-gray-500" : "text-white"
                    }`}
            >
                {label}
                <span
                    className={`absolute left-0 top-[45%] h-[1.5px] w-full bg-gray-500 transform transition-transform duration-500 origin-left ${isChecked ? "scale-x-100" : "scale-x-0"
                        }`}
                    style={{ transform: "translateY(-50%)" }}
                />
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