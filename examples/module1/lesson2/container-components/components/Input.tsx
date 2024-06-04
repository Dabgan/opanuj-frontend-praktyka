type SearchInputProps = {
    name: string;
    onChange: (name: string) => void;
};

function Input({ name, onChange }: SearchInputProps) {
    return (
        <input
            className="border h-7 mt-1 indent-2"
            type="text"
            placeholder="Rick Sanchez..."
            value={name}
            onChange={e => onChange(e.target.value)}
        />
    );
}

export default Input;
