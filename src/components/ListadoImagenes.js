import React from 'react';
import PropTypes from 'prop-types';

import Imagen from './Imagen';
import Spinner from './Spinner';

const ListadoImagenes = ({ results, calcularTotalPaginas }) => {

    const { loading, result } = results;

    if( loading || !result ) return <Spinner />;

    const { totalHits, hits } = result;
    calcularTotalPaginas( totalHits );

    return (
        <div className="col-12 p-5 row">
            {
                hits.map( imagen => (
                    <Imagen 
                        key={ imagen.id }
                        imagen={ imagen }
                    />
                ))                   
            }
        </div>
    );
};

ListadoImagenes.propTypes = {
    results: PropTypes.object.isRequired,
    calcularTotalPaginas: PropTypes.func.isRequired
};

export default ListadoImagenes;