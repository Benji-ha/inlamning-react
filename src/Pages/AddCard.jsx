import "./AddCard.css";

import Top from "../Components/Top/Top.jsx";
import CardForm from "../Components/CardForm/CardForm.jsx";

function AddCard() {

  return (
    <div className="container">
      <Top h1text={"Add a new \nbank card"} />
      <CardForm />
    </div>
  );
}

export default AddCard;
