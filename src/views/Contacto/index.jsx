import React, { useCallback, useState, useEffect } from "react"
import "./styles.css"
import Footer from '../../components/footer';
import contacto from '../../images/contacto-image.jpg';

const Contact = () => {

    const [formMessage, setFormMessage]  = useState({});

    const handleForm = (e) => {
        const updateMessage = {
            ...formMessage,
            [e.target.name]: e.target.value
        }
        setFormMessage(updateMessage);
    }

    const sendForm = () => {
        console.log(formMessage)
    }


    return(
        <div>
            <div className="contact-header__container">
            <h2>Página de contacto</h2>
            </div>

            <div className="contenedor">
            <div className="contenedor__formulario">
            <div className="contact-form">
            
            <div className="inputs-fields">
            <form>
                <input 
                
                type="text"
                name="Nombre"
                className="msg"
                placeholder="Nombre y apellidos"
                onBlur={(e) => handleForm(e)} 
                /><br />

                <input 
                
                type="text"
                name="phone"
                className="msg"
                placeholder="Telefono"
                onBlur={(e) => handleForm(e)} 
                /><br />

            
            <input 
                type="email"
                name= "email"
                className="msg"
                placeholder="mensajae"
                onBlur={(e) => handleForm(e)}
                /><br />

                <div className="msg">
                <textarea name="Mensjae"  cols="30" rows="30" onBlur={(e) => handleForm(e)}></textarea><br />
                <div class="btn"><span onClick={() => sendForm()}>Enviar</span></div>
                </div> 
                 

            </form>
            </div>
            </div>
            </div>
            </div>
            
            
            <Footer />
        </div>
        
    )
    

};

export default Contact;



