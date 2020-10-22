import React, { Component } from "react";
import api from '../../services/api';

import "./styles.css";

export default class Main extends Component {

  //state é sempre um array
  state = {
    products: [],
    productInfo: {},
    page: 1
  }

  //Componente executado assim que o componente é renderizado em tela
  componentDidMount() {
    this.loadProducts();
  }
  
  //necessario utilizar arrow function, pois só assim consigo utilizar o this
  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo} = response.data;

    //console.log(response.data.docs);
    this.setState({ products: docs, productInfo, page });
  };

  prevPage = () => {
    const { page, productInfo } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadProducts(pageNumber);
  }

  nextPage = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;

    this.loadProducts(pageNumber);
  }

  render() {
  //return <h1>Contagem de produtos: {this.state.products.length}</h1>
    const { products, page, productInfo } = this.state;

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
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
        </div>
      </div>
    );
  }
}