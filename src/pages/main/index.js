import React, { Component } from "react";
import api from '../../services/api';

import "./styles.css";

export default class Main extends Component {

  //state é sempre um array
  state = {
    products: [],
  }

  //Componente executado assim que o componente é renderizado em tela
  componentDidMount() {
    this.loadProducts();
  }
  
  //necessario utilizar arrow function, pois só assim consigo utilizar o this
  loadProducts = async () => {
    const response = await api.get('/products');

    //console.log(response.data.docs);
    this.setState({ products: response.data.docs });
  }

  render() {
  //return <h1>Contagem de produtos: {this.state.products.length}</h1>
    const { products } = this.state;

    return (
      <div className="product-list">
        {
          products.map(product => (
          //<h2 key={product._id}>{product.title}</h2>
          <article key={product._id}>
            <strong>{product.title}</strong>
          <p>{product.description}</p>

          <a href="">Acessar</a>
          </article>
          ))
        }
      </div>
    );
  }
}