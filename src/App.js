import React,{Fragment,useState} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Mensaje from './Components/Mensaje'
import Resultado from './Components/Resultado'
import Spinner from './Components/Spinner'


function App() {
//definir state
  const [cantidad,guardarCantidad]= useState(0);
  const [plazo,guardarPlazo]= useState('');
  const [total,guardarTotal]=useState(0);
  const [cargando,guardarCargando]=useState(false);
  let componente;

  if(cargando){
    componente=<Spinner/>;
  }else if(total===0){
    componente=<Mensaje/>
  }else{
    componente=<Resultado
                total={total}
                plazo={plazo}
                cantidad={cantidad}
    />
  }

  return (
    <Fragment>
      <Header 
        titulo="Cotizador de prestamos"
      />
      <div className="container">
        <Formulario
        cantidad={cantidad}
        guardarCantidad={guardarCantidad}
        plazo={plazo}
        guardarPlazo={guardarPlazo}
        guardarTotal={guardarTotal}
        guardarCargando={guardarCargando}
        />
          <div className="mensajes">
           {componente}
          </div>
      </div>
    </Fragment>
  );
}




export default App;
