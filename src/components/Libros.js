import React, { Component } from 'react';
import axios from 'axios';


export default class Libros extends Component {


  state = {
    
    libros: [],
  };
    
  // El componente se montó
  componentDidMount() {
    const URL = 'http://openlibrary.org/search.json?author=asimov';
    axios.get(URL)
      .then(response => {
        console.log('Oops i did it again...' , response.data);
        const libros = response.data;
        this.setState({ libros });
        //console.log(libros.docs.length);    
        //console.log(libros.docs[0].title_suggest);
      })
      .catch(err => console.log(err));
  }


//Hi

displayLibrosApi() {
  const { libros } = this.state;
   
  if (libros.length === 0) {
    console.log("Hello 0 man");
    return <span>Cargando libros Madafaka...</span>;

  } else if (libros.docs.length > 0) {
    console.log(libros);
    return (
    
     
      <React.Fragment>
          
        <p>Se encontraron: {libros.docs.length}</p>
      
        {libros.docs.map(libro => {
           return (
            <p>{`Libros: ${libro.title_suggest}`}</p>
            )
          })}
      </React.Fragment>
    )
  }
}


    render() {
        return (
          <React.Fragment>
            <div>
                {  this.displayLibrosApi() }
            </div>
            </React.Fragment>
        )
    }
}
