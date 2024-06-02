import styles from "../Contact/Contact.module.css";

import { MdEmail, MdWhatsapp } from "react-icons/md";

import { Container } from "react-bootstrap";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className={styles.contact_container}>
            <Container>
                <h2>Contato</h2>
                <div className={styles.contact_content}>
                    <p>Envie-me um E-mail</p>
                    <form action="https://formspree.io/f/mgegjaqw" method="POST" className={styles.form_contact}>
                        <div className={styles.input_group}>
                            <input type="email" id="email" name="email" placeholder="exemplo@email.com" required />
                            <label htmlFor="email">E-mail</label>
                        </div>

                        <div className={styles.input_group}>
                            <input type="text" name="message" id="message" placeholder="Sua mensagem..." required></input>
                            <label htmlFor="message">Mensagem</label>
                        </div>

                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </Container>
        </section>
    );
};
