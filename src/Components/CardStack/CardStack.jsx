import { setActiveCard } from "../../reducers/reducer.js";
import Card from "../Card/Card.jsx";
import "./CardStack.css";
import { useDispatch, useSelector } from "react-redux";
function CardStack({cards}) {
    
    const dispatch = useDispatch();

    const handleCardClick = (card) => {
        dispatch(setActiveCard(card));
        console.log("This is dispatched", card);
    };

    const activeCard = useSelector((state) => state.cards.activeCard);

    const cardItems = cards.map((card, index) => (
        card !== activeCard && (
        <Card 
        key={index}
        cardNumber={card.cardNumber}
        cardHolder={card.cardHolder}
        validThru={card.validThru}
        vendor={card.vendor}
        imageSrc={card.imageSrc}
        onClick={() => handleCardClick(card)}
        /> )
    ));

    return (

        <div className="card-stack">
            {cardItems}
        </div>
    )
}

export default CardStack;