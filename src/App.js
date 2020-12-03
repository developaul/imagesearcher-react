import React, { useState } from 'react';

import Formulario from './components/Formulario';
import useFetch from './hooks/useFetch';

function App() {

	const [ busqueda, setBuqueda ] = useState( '' ); 
	const results = useFetch( busqueda, 30 );

	return (
		<div className="container">
			<div className="jumbotron">
				<p className="lead text-center">Buscador de Imagenes</p>
			
				<Formulario 
					setBuqueda={ setBuqueda }
					setLoading={ results.setLoading } 
				/>
			</div>
		</div>
	);
};

export default App;
