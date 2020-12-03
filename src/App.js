import React, { useState } from 'react';

import useFetch from './hooks/useFetch';

import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

	const [ busqueda, setBuqueda ] 			= useState( '' );
	const [ thereImages, setThereImages ] 	= useState( false ); 

	const results = useFetch( busqueda, 30 );

	return (
		<div className="container">
			<div className="jumbotron">
				<p className="lead text-center">Buscador de Imagenes</p>
			
				<Formulario 
					setBuqueda={ setBuqueda }
					setLoading={ results.setLoading } 
					setThereImages={ setThereImages }
				/>
			</div>

			<div className="row justify-content-center">
				{ thereImages ?
						<ListadoImagenes results={ results } />
					:
						<p style={{ marginTop: 150 }}>Realiza una búsqueda...</p>
				}
			</div>
		</div>
	);
};

export default App;
