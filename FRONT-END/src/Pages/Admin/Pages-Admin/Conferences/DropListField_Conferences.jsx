export default function DropListField_Conferences({
  selectSedes,
  handleChange,
  options
}) {
  return (
    <div className="mb-3 d-flex align-items-center">
      <label
        className="col-2 d-flex justify-content-end align-items-center form-label me-2"
      >
        Sedes
      </label>
      <div className="col-7 mx-auto rounded border-black">
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
      </div>
    </div>

  );
}