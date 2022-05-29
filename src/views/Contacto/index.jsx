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

            <div className="form__container">
            <div className="formulario__columna1">
            <form>
                <input 
                type="text"
                name="Nombre"
                placeholder="Nombre y apellidos"
                onBlur={(e) => handleForm(e)} 
                /><br />

            <input 
                type="email"
                name= "email"
                placeholder="Correo"
                onBlur={(e) => handleForm(e)}
                /><br />
                <textarea name="mensaje"  cols="30" rows="10" onBlur={(e) => handleForm(e)}></textarea><br />
                <span onClick={() => sendForm()}>Enviar</span>
                 

            </form>
            </div>
            <div className="formulario__columna2">
                <img src={contacto} alt="" />
            </div>
            </div>
            <Footer />
        </div>
        
    )
    

};

export default Contact;