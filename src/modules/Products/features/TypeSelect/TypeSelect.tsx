import type { ITypeSelectProps } from "./TypeSelect.types";

export const TypeSelect: React.FC<ITypeSelectProps> = ({ value, onChange, types, loading }) => {
  return (
    <select
      value={value ?? ""}
      onChange={(e) => onChange(e.target.value || null)}
      disabled={loading}
    >
      <option value="">Все типы</option>
      {loading ? (
        <option disabled={true}>Загрузка...</option>
      ) : (
        types.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))
      )}
    </select>
  );
};
