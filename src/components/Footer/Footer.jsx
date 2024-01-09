import { Link } from "react-router-dom";
import "../../styles/Footer.css"
import socialIcons from "../../utils/api/footerApi";
const Footer = () => {
    return (
        <div className="footer-column">
            <div className="footer-nav">
                <div className="container-currencies">
                    <section>
                        <h5>Monedas Populares</h5>
                        <Link to="/currencies/us-dollar">Dólar USA</Link>
                        <Link to="/currencies/euro">Euro</Link>
                        <Link to="/currencies/swiss-franc">Franco Suizo</Link>
                        <Link to="/currencies/british-pound">Libra Esterlina</Link>
                        <Link to="/currencies/brazilian-real">Real Brasileño</Link>
                        <Link to="/currencies/japanese-yen">Yen Japonés</Link>
                    </section>
                </div>
                <div className="container-info">
                    <section>
                        <h5>Informacion</h5>
                        <Link to="/about">Acerca de Nosotros</Link>
                        <Link to="/contact">Contáctanos</Link>
                        <Link to="/questions">Preguntas Frecuentes</Link>
                        <Link to="/developers">Desarrolladores</Link>
                    </section>
                </div>
                <div className="container-social">
                    <section>
                        <h5>Enlaces de Contacto</h5>
                        <a href={socialIcons.whatsapp.api} target="_blank" rel="nofollow">
                            <img src={socialIcons.whatsapp.icon} alt="iconWhatsapp" />
                        </a>
                        <a href={socialIcons.facebook.api} target="_blank" rel="nofollow">
                            <img src={socialIcons.facebook.icon} alt="iconFacebook" />
                        </a>
                        <a href={socialIcons.email.api} target="_blank" rel="nofollow">
                            <img src={socialIcons.email.icon} alt="iconEmail" />
                        </a>
                    </section>
                </div>
            </div>
            <div className="container-copyright">
                <article>
                    <p><small>Copyright © 2024 PaoloDevX & Jeermuce.</small></p>
                    <p><small>Todos los derechos reservados.</small></p>
                </article>
            </div>

        </div>
    );
};

export default Footer;

