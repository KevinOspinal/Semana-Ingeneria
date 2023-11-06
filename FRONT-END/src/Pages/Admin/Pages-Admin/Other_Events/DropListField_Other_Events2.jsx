export default function DropListField_Other_Events2({
    selectTipoEvento,
    handleChange,
    options
}) {
    return (
    <div className="mb-3 d-flex align-items-center">
        <label
        className="col-2 d-flex justify-content-end align-items-center form-label me-2"
        >
        Tipo Evento
        </label>
        <div className="col-7 mx-auto">
        <select
            className="form-select mb-auto list border-black"
            id="lista1"
            value={selectTipoEvento}
            onChange={handleChange}
        >
            <option value="">
            Seleccionar Tipo Evento
            </option>
            {options.map((option) => (
            <option key={option.id_tipo_evento} value={option.id_tipo_evento}>
                {option.descripcion_otro_evento}
            </option>
            ))}
        </select>
        </div>
    </div>

    );
}