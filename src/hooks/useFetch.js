import { useState, useEffect } from 'react';

import { URL } from '../utils/constans';

const useFetch = ( busqueda, imagenesPorPaginas ) => {

    const [ loading, setLoading ] = useState( true );
    const [ result, setResult ] = useState( null );
    const [ error, setError ] = useState( null );
    

    useEffect( () => {

		( async () => {
            
            if( !busqueda ) return { loading, result, error, setLoading };

            try {

                const resp = await fetch( `${ URL }&q=${ encodeURI( busqueda ) }&per_page=${ imagenesPorPaginas }` );
                const json = await resp.json();

                setResult( json );

            } catch( err ) {

                setError( err );

            } finally {

                setLoading( false );

            }

		})();

        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ busqueda ] );

    return { loading, result, error, setLoading };
};

export default useFetch;