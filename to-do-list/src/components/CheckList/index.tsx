import { CheckListOption } from "./CheckListOption"

interface IProps {
    options: string[]
    onRemoveItem: (index: number) => void;
}


export const CheckList = ({ options, onRemoveItem }: IProps) => {
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
        </div>
    )
}