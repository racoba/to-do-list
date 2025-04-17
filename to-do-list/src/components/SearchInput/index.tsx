"use client"

interface IProps {
    value: string;
    setValue(newValue: string): void;
    onSubmit(): void;
}

export const SearchInput = ({ value, setValue, onSubmit }: IProps) => {

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && value != "") {
            onSubmit();
        }
    };

    return (
        <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-white border border-blue-300 rounded px-3 py-2 w-100 text-black"
            placeholder="Type your todo item..."
        />
    )
}