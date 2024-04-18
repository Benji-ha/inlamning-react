import "./CardForm.scss";

import {useDispatch} from 'react-redux';
import { addCard } from "../../reducers/reducer";
import { useState } from "react";

import Card from "../Card/Card.jsx";

function CardForm() {

  const dispatch = useDispatch();


    const [cardData, setCardData] = useState({
        cardNumber: "",
        cardHolder: "",
        validThru: "",
        ccv: "",
        vendor: "default",
        imageSrc: "",
    });

    function handleChange(event, vendorName) {
      const { value } = event.target;
      setCardData({
        ...cardData,
        [vendorName]: value,
        imageSrc: vendorName === "vendor" ? getImageSrc(value) : cardData.imageSrc,
      });
    }
    
    const handleAddCard = () => {
      dispatch(addCard(cardData));
    };

    function getImageSrc(vendor) {
      switch (vendor) {
        case "bitcoin":
          return "/src/assets/vendor-bitcoin.svg";
        case "ninja-bank":
          return "/src/assets/vendor-ninja.svg";
        case "block-chain":
          return "/src/assets/vendor-blockchain.svg";
        case "evil-corp":
          return "/src/assets/vendor-evil.svg";
        default:
          return "";
      }
    };

  return (

    
    <div className="card-form">

        <article className="new-card">
          <p>New Card</p>
        </article>

        <Card 
        cardNumber={cardData.cardNumber || "XXXX XXXX XXXX XXXX"} 
        cardHolder={cardData.cardHolder || "First Last"} 
        validThru={cardData.validThru || "MM/YY"} 
        ccv={cardData.ccv} 
        vendor={cardData.vendor}
        imageSrc={cardData.imageSrc}
        />

      <section className="card-number-container">
        <p className="card-number-text">Card Number</p>
        <input
          type="text"
          placeholder="XXXX XXXX XXXX XXXX"
          className="card-number-input"
          value={cardData.cardNumber}
          onChange={(e) => handleChange(e, "cardNumber")}
        />
      </section>

      <section className="name-container">
        <p className="name-text">Cardholder Name</p>
        <input 
        type="text" 
        placeholder="First Last"
        className="name-input"
        value={cardData.cardHolder}
        onChange={(e) => handleChange(e, "cardHolder")}
        />
        
      </section>

      <section className="date-container">
        <article className="date">
          <p className="date-text">Valid Thru</p>
          <input 
          type="text" 
          placeholder="MM/YY"
          className="date-input"
          value={cardData.validThru}
          onChange={(e) => handleChange(e, "validThru")} 
          />
        </article>

        <article className="ccv">
          <p className="ccv-text">CCV</p>
          <input 
          type="text" 
          placeholder="CCV"
          className="ccv-input"
          value={cardData.ccv}
          onChange={(e) => handleChange(e, "ccv")} 
          />
        </article>
      </section>

      <section className="vendor-container">
        <p className="vendor-text">Vendor</p>
        
        <select 
        name="vendor" 
        className="vendor-select"
        value={cardData.vendor}
        onChange={(e) => handleChange(e, "vendor")}
        >
          <option value="default">Select Vendor</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="ninja-bank">Ninja-bank</option>
          <option value="block-chain">Block-chain</option>
          <option value="evil-corp">Evil-corp</option>
        </select>
      </section>

      <section className="add-card-button-container">
        <button className="add-card-button" onClick={handleAddCard}>Add Card</button>
      </section>
    </div>
  );
}

export default CardForm;
