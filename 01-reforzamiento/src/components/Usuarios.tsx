import { Usuario } from '../interfaces/reqRes';
import "../styles/Usuarios.css"
import { useUsuarios } from '../hooks/useUsuarios';
const Usuarios = () => {
    const { usuarios, paginaSiguiente, paginaAnterior } = useUsuarios();

    const renderItem = ({ last_name, first_name, id, email, avatar }: Usuario) => (
        <tr key={id.toString()}>
            <td>
                <img
                    src={avatar}
                    alt={first_name}
                    width="100"
                    className='rounded-circle'
                />
            </td>
            <td>{first_name} {last_name}</td>
            <td>{email}</td>
        </tr>
    )

    return (
        <>
            <h3>Usuarios:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(renderItem)
                    }
                </tbody>
            </table>


            <button
                className="btn btn-primary"
                onClick={paginaAnterior}
            >
                Anteriores
            </button>

            &nbsp;

            <button
                className="btn btn-primary"
                onClick={paginaSiguiente}
            >
                Siguientes
            </button>
        </>
    )
}

export default Usuarios
