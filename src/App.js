import React, { useState } from 'react';

import useFetch from './hooks/useFetch';

import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

	const [ busqueda, setBuqueda ] 			= useState( '' );
	const [ thereImages, setThereImages ] 	= useState( false ); 
	const [ paginaActual, setPaginaActual ] = useState( 1 );
	const [ totalPaginas, setTotalPaginas ] = useState( 1 );

	const results = useFetch( busqueda, 30, paginaActual );

	const calcularTotalPaginas = totalHits => setTotalPaginas( Math.ceil( totalHits / 30 ) ); 

	const paginaAnterior = () => {
		const nuevaPagina = paginaActual - 1;

		if( !nuevaPagina ) return;

		results.setLoading( true );
		setPaginaActual( nuevaPagina );
	};
	
	const paginaSiguiente = () => {
		const nuevaPagina = paginaActual + 1;
		
		if( nuevaPagina > totalPaginas ) return;
		
		results.setLoading( true );
		setPaginaActual( nuevaPagina );
	};

	return (
		<div className="container">
			<div className="jumbotron">
				<p className="lead text-center">Buscador de Imágenes</p>
			
				<Formulario 
					setBuqueda={ setBuqueda }
					setLoading={ results.setLoading } 
					setThereImages={ setThereImages }
				/>
			</div>

			<div className="row justify-content-center">
				{ thereImages ?
					(
						<>
							<ListadoImagenes 
								results={ results }
								calcularTotalPaginas={ calcularTotalPaginas }
							/>
							
							{ ( results.result && !results.loading ) &&
							 	(
									<>
										{
											( paginaActual > 1 ) && 
												
											<button
												onClick={ paginaAnterior }
												className="btn btn-info mr-1"
												type="button"
											>&laquo; Anterior</button>
										}

										{
											( paginaActual < totalPaginas ) &&
										
											<button
												onClick={ paginaSiguiente }
												className="btn btn-info"
												type="button"
											>Siguiente &raquo;</button>
										}
									</>
							 	)
							}
						</>
					)
					:
						<p style={{ marginTop: 150 }}>Realiza una búsqueda...</p>
				}
			</div>
		</div>
	);
};

export default App;
