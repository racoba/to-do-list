"use client"

interface IProps {
    value: string;
    setValue(newValue: string): void;
}

export const SearchInput = ({ value, setValue }: IProps) => {

    return (
        <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-white border border-blue-300 rounded px-3 py-2 w-40"
        />
    )
}