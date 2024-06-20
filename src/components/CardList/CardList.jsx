import icono1 from "/imagenes/icon-team-builder.svg";
import icono2 from "/imagenes/icon-supervisor.svg";
import icono3 from "/imagenes/icon-karma.svg";
import icono4 from "/imagenes/icon-calculator.svg";
import { CardItem } from "../CardItem/CardItem";

export const CardList = () => {
  return (
    <ul className="list_container">
      <CardItem
        styles='container supervisor'
        title="Supervisor"
        text={`Monitor activity to identify project 
          roadblocks`}
        img={icono2}
      />
      <CardItem
        styles="container team_builder"
        title="Team Builder"
        text={`Scans our talent network to create the
          optimal team for your project`}
        img={icono1}
      />
      <CardItem
        styles="container karma"
        title="Karma"
        text={`Regularly evaluates our talent to 
          ensure quality`}
        img={icono3}
      />
      <CardItem
        styles="container calculator"
        title="Calculator"
        text={`Uses data from past projects to 
          provide better delivery estimates `}
        img={icono4}
      />
    </ul>
  );
};
