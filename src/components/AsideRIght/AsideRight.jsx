import VideoInfo from "../VideoInfo/VideoInfo";
import "../../styles/AsideRIght.css"

const AsideRight = () => {
    return (
        <div className="container-AsideRL">
            <aside>
                <article className="articles">
                    <h4 className="article-title">
                        Poder de las Finanzas en la tus manos!
                    </h4>
                    <p className="article-text">
                        Bienvenido a la App de Cambio de Divisas:
                        ¿Te imaginas tener acceso instantáneo a las tasas de cambio de todas las divisas del mundo?
                        ¡Nosotros lo hacemos posible!
                    </p>
                </article>
                <VideoInfo />
                <article className="articles">
                    <p className="article-text">
                        Desde el dólar hasta el yen, te ofrecemos un abanico completo de tasas de cambio.
                        ¿Tienes una moneda específica en mente? ¡La encontrarás aquí!
                    </p>
                </article>

            </aside>

        </div>
    )
}

export default AsideRight;