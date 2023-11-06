export default function DropListField_Programs({
    selectFacultades,
    handleChange,
    options
}) {
    return (
    <div className="mb-3 d-flex align-items-center">
        <label
        className="col-2 d-flex justify-content-end align-items-center form-label me-2"
        >
        Facultad
        </label>
        <div className="col-7 mx-auto">
        <select
            className="form-select mb-auto list border-black"
            id="lista1"
            value={selectFacultades}
            onChange={handleChange}
        >
            <option value="">
            Seleccionar Programa
            </option>
            {options.map((option) => (
            <option key={option.id_facultad} value={option.id_facultad}>
                {option.nombre_facultad}
            </option>
            ))}
        </select>
        </div>
    </div>

    );
}