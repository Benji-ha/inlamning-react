import "./Home.css";
import Card from "../Components/Card/Card.jsx";
import CardStack from "../Components/CardStack/CardStack.jsx";
import Top from "../Components/Top/Top.jsx";

import { Link } from "react-router-dom";
import {useSelector} from "react-redux";


function Home() {

  function handleClick() {
    console.log("clicked");
  }



const displayedCards = useSelector(state => state.cards.displayedCards);
console.log("Displayed Cards:", displayedCards);

// const activeCard = useSelector(state => state.cards.activeCard);
// console.log("Active Card:", activeCard );

const card = useSelector((state) => state.cards.cards.find(card => card.id === state.cards.activeCardId));
const activeCard = useSelector((state) => state.cards.activeCard);
console.log("Active Card:", activeCard);

const activeCardComponent = activeCard ? (
  <Card
    cardNumber={activeCard.cardNumber}
    cardHolder={activeCard.cardHolder}
    validThru={activeCard.validThru}
    vendor={activeCard.vendor}
    imageSrc={activeCard.imageSrc}
  />
) : (
  <Card/>
);

  return (
    <div className="container">
      <Top h1text="E-Wallet" />

      <article>
        <p className="active-card">Active Card</p>
      </article>
      <div className="active-card-container">
      {activeCardComponent}
      </div>
      < CardStack cards={displayedCards}/>

      <div className="add-new-card-container">
        <Link to="/AddCard" className="add-new-card">
          <button className="add-new-card-button" onClick={handleClick}>Add a new card</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
