export const CardItem = ({ styles, title, text, img }) => {
  return (
    <li className={styles}>
      <h1>{title}</h1>
      <p>{text}</p>
      <figure>
        <img src={img} alt="icono de la tarjeta " />
      </figure>
    </li>
  );
};
