
import { useEffect } from "react";
import Buttons from "../../components/Buttons";
import { useForm } from "react-hook-form";
import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'



export default function Login({showLoginModal,closeModal}) {

    const { register, handleSubmit, formState:{errors}} = useForm()
    const { signin, isAuthenticatedLogin , errors: loginErrors } = useAuth()
    const navigate = useNavigate()

    console.log(isAuthenticatedLogin)

    useEffect(() => {

        if (isAuthenticatedLogin.id_tipo_usuario == 1) navigate('/Admin')

    }, [isAuthenticatedLogin]);

    return (
        <div
            className={`modal fade ${showLoginModal ? "show" : ""}`}
            tabIndex="-1"
            role="dialog"
            style={{
                display: showLoginModal ? "flex" : "none",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <form
                onSubmit={handleSubmit(async (values) => {
                    console.log(values)
                    signin(values)
                })}>
                <div className="modal-dialog custom" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Iniciar sesion</h5>
                            <Buttons
                                title="&times;"
                                color="#002f59"
                                fontSize="15px"
                                colorbutton="#ffffff"
                                className="close"
                                onClick={closeModal}
                            />
                        </div>
                        <div className="container modal-body d-flex justify-content-center align-items-center">
                            <div className="row">
                                {
                                    loginErrors.map((error, i) => (
                                        <div className="d-flex justify-content-center text-white rounded" key={i} style={{ background: '#002f59' }}>
                                            {
                                                error
                                            }
                                        </div>
                                    ))
                                }
                                <div className="col-12">
                                    <div className="mb-3 d-flex align-items-center">
                                        <label className="col-sm-4 col-lg-2 d-flex justify-content-end align-items-center form-label me-2">
                                            Numero de Documento
                                        </label>
                                        <div className="col-sm-5 col-lg-7 mx-auto rounded border-black">
                                            <input
                                                type="text"
                                                {...register("documento", { required: true })}
                                                className="form-control border-black"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {
                                    errors.documento && (
                                        <p className="text-danger">
                                            El documento es requerido
                                        </p>
                                    )
                                }
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <Buttons
                                type="submit"
                                title="Iniciar sesion"
                                color="#002f59"
                                fontSize="18px"
                                colorbutton="#ffffff"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
