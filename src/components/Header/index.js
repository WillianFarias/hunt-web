import React from 'react';

import "./styles.css";

//Constante que possui uma funcao com retorno
//states component
const Header = () => (
  <header id="main-header">JSHunt</header>
);

export default Header;

/*
faz a mesma coisa que a func acima, no entanto é utilizado quando tratamos estado
class Header extends Component {
  render() {
    return <h1>Hello</h1>
  }
}*/