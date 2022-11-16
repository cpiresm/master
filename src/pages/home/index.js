import Button from "../../components/buttons";
import { useNavigate } from "react-router-dom";
import background from "../../assets/background.jpg";
import background1 from "../../assets/background1.jpg";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();

  const onClickButton = (url) => {
    navigate(url);
  };

  const [changeBackground, setChangebackground] = useState(background)

  return (
    <section className="hero is-medium is-fullheight" style={{ backgroundImage: `url(${changeBackground})`, backgroundSize: "cover" }}
    >
      ;
      <div className="hero-body">
        <div className="container has-text-centered">
          <Button onClick={() => onClickButton("/game")}text="Iniciar Juego"/>
          <br/>
          <button onClick={()=>setChangebackground(background1)}>Cambiar Fondo</button>
          <br/>
        </div>
      </div>
    </section>
  );
}

export default Home;
