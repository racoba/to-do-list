import { CheckListOption } from "./CheckListOption"

interface IProps {
    options: string[]
}

export const CheckList = ({ options }: IProps) => {
    return (
        <div className="flex flex-col gap-4">
            {options.map((opt, index) => {
                return (
                    <CheckListOption
                        key={index}
                        label={opt}
                    />
                )
            })}
        </div>
    )
}