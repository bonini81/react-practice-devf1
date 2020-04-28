import React, { Component } from 'react';
import Libros from './Libros';
import './Styles.css';


export default class Home extends Component {
    render() {
        return (
            <div>
                 <div className="container home-head">
                     <h2>Summary</h2>
                     <br />
                     <div className="row">
                         <div className="col-md-3 borde-adb">
                        <h3>Ingresos KPIs</h3>
                         </div>
                         <div className="col-md-3 borde-adb">
                        <h3>Gastos KPIs</h3>
                        </div>

                        <div className="col-md-3 borde-adb">

                        <h3>Inversiones KPIs</h3>
                        </div>

                        <div className="col-md-2 borde-adb">

                        <h3>Libros</h3>
                        <Libros />
                        </div>
                     </div>
                     </div> 
            </div>
        )
    }
}
