import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Produto from './Produto';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';

function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    listar();
  }, []);

  function listar() {
    axios.get(`https://fakestoreapi.com/products`)
      .then(resposta => {
        setProdutos(resposta.data);
      })
  }

  return (
    <div className="App">
      <NavBar/>
      <div className="container text-center">
        
        <div className="row row-cols-4">
          {produtos.map((produto) => (
            <Produto
              image={produto.image}
              title={produto.title}
              price={produto.price}          
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
