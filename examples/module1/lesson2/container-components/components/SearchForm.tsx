import Input from './Input';
import { Label } from './Label';
import { Select } from './Select';

type SearchFormProps = {
    name: string;
    setName: (name: string) => void;
    gender: string;
    setGender: (gender: string) => void;
    sortOption: string;
    setSortOption: (sortOption: string) => void;
};

const genderOptions = ['Any Gender', 'Female', 'Male', 'Genderless', 'Unknow'];
const sortOptions = ['Initial', 'Name', 'Created Date'];

function SearchForm({ name, setName, gender, setGender, sortOption, setSortOption }: SearchFormProps) {
    return (
        <form className="space-x-4 flex items-end justify-center">
            <Label title="Name">
                <Input name={name} onChange={setName} />
            </Label>
            <Label title="Gender">
                <Select value={gender} onChange={setGender} options={genderOptions} />
            </Label>
            <Label title="Sort by">
                <Select value={sortOption} onChange={setSortOption} options={sortOptions} />
            </Label>
        </form>
    );
}

export default SearchForm;
