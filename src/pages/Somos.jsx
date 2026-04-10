import React, { Fragment } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import './Somos.css';

const Somos = () => {
    return (
        <Fragment>
            <Navbar />

            <div className="container-fluid">
                <div className="row fondo">
                    <div className="col-6 ">
                        <h1 className='margen'>¿Quiénes somos?</h1>
                        <p >
                            Somos un equipo de desarrolladores apasionados por crear soluciones digitales innovadoras y personalizadas para nuestros clientes.
                            
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default Somos;