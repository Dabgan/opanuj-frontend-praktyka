import { FC, ReactNode } from 'react';

type SearchLabelProps = {
    children: ReactNode;
    title: string;
};

export const Label: FC<SearchLabelProps> = ({ children, title }) => {
    return (
        <label className="flex flex-col">
            {title}
            {children}
        </label>
    );
};
