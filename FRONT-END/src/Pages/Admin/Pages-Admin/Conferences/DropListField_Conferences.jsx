export default function DropListField_Conferences({
  selectSedes,
  handleChange,
  options
}) {
  return (
    <select
      className="form-select mb-5 list"
      id="lista1"
      value={selectSedes}
      onChange={handleChange}
    >
      <option value="" disabled>
        Seleccionar sede
      </option>
      {options.map((option) => (
        <option key={option.id_sede} value={option.id_sede}>
          {option.nombre_sede}
        </option>
      ))}
    </select>
  );
}