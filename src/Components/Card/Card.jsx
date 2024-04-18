import "./Card.scss";

function Card ({cardNumber, cardHolder, validThru, imageSrc, vendor, onClick}) {

    return(
        <div className={`card ${vendor}`} id="card-wrapper" onClick={onClick}>
            <article className="card-images">
                <img src="/src/assets/chip-light.svg" alt="Chip" />
                <img src={imageSrc} alt="" />
            </article>

            <article className="card-number">
                <h2>{cardNumber}</h2>
            </article>

            <div className="card-details">
                <section className="card-details-name">
                    <article className="card-info-name">
                        <h3 className="Cardholder">Cardholder name:</h3>
                        <p className="card-name">{cardHolder}</p>
                    </article>
                </section>

                <section className="card-details-date">
                    <article className="card-info-date">
                        <h3 className="card-valid">Valid Thru</h3>
                        <p className="card-date">{validThru}</p>
                    </article>
                </section>
            </div>
        </div>
    )
}

export default Card;