import React, { useState } from 'react';

import Error from './Error';

const Formulario = () => {

    const [ termino, setTermino ]   = useState( '' );
    const [ error, setError ]       = useState( false );

    const buscarImagenes = e => {
        e.preventDefault();

        // Validar
        if( !termino ) {
            setError( true );
            return;
        }
        
        setError( false );

        // Enviar el termino de busqueda
        console.log( termino );
    }

    return (
        <form
            onSubmit={ buscarImagenes }
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Ejemplo: Café"
                        onChange={ e => setTermino( e.target.value.trim() ) }
                    />
                </div>

                <div className="form-group col-md-4">
                    <input
                        className="btn btn-lg btn-danger btn-block"
                        type="submit"
                        value="Buscar"
                    />
                </div>
            </div>

            { error && <Error message='Agrega un término de búsqueda' /> }
        </form>
    );
};

export default Formulario;