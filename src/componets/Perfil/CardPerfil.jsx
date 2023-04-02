import { useContext } from "react"
import AuthContext from "../../context/AuthProvider"

export const CardPerfil = () => {
    const {auth} = useContext(AuthContext)
    return (
        <div className="bg-white border border-slate-200 h-full p-4 
                        flex flex-col items-center justify-between shadow-xl rounded-lg">

            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/4715/4715329.png" alt="img-client" className="m-auto " width={120} height={120} />
            </div>
            <div className="self-start">
                <p>Nombre: {auth.nombre}</p>
            </div>
            <div className="self-start">
                <p>Apellido: {auth.apellido}</p>
            </div >
            <div className="self-start">
                <p>Dirección: {auth.direccion}</p>
            </div>
            <div className="self-start">
                <p>Teléfono: {auth.telefono}</p>
            </div>
            <div className="self-start">
                <p>Email: {auth.email}</p>
            </div>
        </div>
    )
}
