
const TiposBasicos = () => {
    const nombre: string = "andres";
    const edad: number = 22;
    const estaActivo: boolean = true;

    const proderes: string[] = ['Velocidad', 'Volar', 'Respirar en el Agua'];

    return (
        <>
            <h3>Tipos basicos</h3>
            {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'}
            <br />
            {proderes.join(', ')}
        </>
    )
}

export default TiposBasicos