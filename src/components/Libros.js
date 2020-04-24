import React, { Component } from 'react';
import axios from 'axios';


export default class Libros extends Component {
    

  manejarSubmit = () => {
    const jsonSend = this.state;
    const URL = 'https://pokeapi.co/api/v2/pokemon/3/';
    axios.post(URL, jsonSend)
      .then(res => alert('¡Artículo creado!'))
      .catch(err => alert('Error al crear artículo'))
  };

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
