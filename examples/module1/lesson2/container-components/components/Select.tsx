import { FC } from 'react';

type SelectProps = {
    value: string;
    onChange: (name: string) => void;
    options: string[];
};

export const Select: FC<SelectProps> = ({ value, onChange, options }) => {
    return (
        <select value={value} onChange={e => onChange(e.target.value)} className="border h-7 mt-1">
            {options.map((option, index) => {
                const value = index === 0 ? '' : option.toLowerCase();
                return (
                    <option key={index} value={value}>
                        {option}
                    </option>
                );
            })}
        </select>
    );
};
