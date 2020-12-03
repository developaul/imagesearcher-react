import React from 'react';
import PropTypes from 'prop-types';

import Imagen from './Imagen';
import Spinner from './Spinner';

const ListadoImagenes = ({ results }) => {

    const { loading, result } = results;

    if( loading || !result ) return <Spinner />;

    const { hits } = result;

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
    results: PropTypes.object.isRequired
};

export default ListadoImagenes;