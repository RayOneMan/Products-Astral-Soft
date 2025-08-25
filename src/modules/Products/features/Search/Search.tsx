import type { ISearchInputProps } from "./Search.types";

export const SearchInput: React.FC<ISearchInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Поиск"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
