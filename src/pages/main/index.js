import React, { Component } from "react";
import api from '../../services/api';

export default class Main extends Component {
  //Componente executado assim que o componente é renderizado em tela
  componentDidMount() {
    this.loadProducts();
  }
  
  //necessario utilizar arrow function, pois só assim consigo utilizar o this
  loadProducts = async () => {
    const response = await api.get('/products');

    console.log(response.data.docs);
  }

  render() {
    return <h1>Hello Rocketseat</h1>
  }
}