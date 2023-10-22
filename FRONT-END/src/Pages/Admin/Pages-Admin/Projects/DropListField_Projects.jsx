export default function DropListField_Projects({
  selectTipoProyecto,
  handleChange,
  options
}) {
  return (
    <div className="mb-3 d-flex align-items-center">
      <label
        className="col-2 d-flex justify-content-end align-items-center form-label me-2"
      >
        Tipo Proyecto
      </label>
      <div className="col-7 mx-auto">
        <select
          className="form-select mb-auto list border-black"
          id="lista1"
          value={selectTipoProyecto}
          onChange={handleChange}
        >
          <option value="" >
            Seleccionar tipo de proyecto
          </option>
          {options.map((option) => (
            <option key={option.id_tipo_proyecto} value={option.id_tipo_proyecto}>
              {option.descripcion_tipo_proyecto}
            </option>
          ))}
        </select>
      </div>
    </div>

  );
}