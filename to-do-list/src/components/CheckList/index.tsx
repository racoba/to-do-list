import { CheckListOption } from "./CheckListOption"

interface IProps {
    options: string[]
    onRemoveItem: (index: number) => void;
    onResetOptions: () => void;
}


export const CheckList = ({ options, onRemoveItem, onResetOptions }: IProps) => {
    const onDeleteOption = (index: number) => {
        onRemoveItem(index);
    }
    return (
        <div className="flex flex-col gap-4">
            {options.map((opt, index) => {
                return (
                    <CheckListOption
                        key={index}
                        label={opt}
                        onRemove={() => onDeleteOption(index)}
                    />
                )
            })}
            {options.length > 0 && (
                <button
                    onClick={onResetOptions}
                    className="bg-red-400 px-4 py-2 rounded text-white cursor-pointer"
                >
                    Clear All
                </button>
            )}
        </div>
    )
}