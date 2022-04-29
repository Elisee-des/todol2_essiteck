import React, { Fragment } from "react";

// const MessageFromUser = (props) => {
//   const ageStatus = (age) => {
//     let message = "Vous avez l'age de la maturité";
//     if (age > 20) {
//       message = `Vous etes mature il ya ${+age - 20} ans`;
//     } else if (age < 20) {
//       message = `Vous netes pas mature.il vous reste ${20 - +age} ans`;
//     }

//     return message;
//   };
//   return <Fragment>{ageStatus(props.age)}</Fragment>;
// };

const MessageFromUser = ({ age }) => {
  const ageStatus = (age) => {
    let message = "Vous avez l'age de la maturité";
    if (age > 20) {
      message = `Vous etes mature il ya ${+age - 20} ans`;
    } else if (age < 20) {
      message = `Vous netes pas mature.il vous reste ${20 - +age} ans`;
    }

    return message;
  };
  return <Fragment><hr />{ageStatus(age)}</Fragment>;
};

const Cv = (props) => (
  <Fragment>
    <hr />
    <h3>Prenom :{props.name}</h3>
    <h3>Age : {props.age}</h3>
    <hr />
  </Fragment>
);

const InfoPersone = ({ name, age, children }) => {
  return (
    <Fragment>
        <hr />
      <h1>Nom: {name}</h1>
      <h1> Age: {age}</h1>
      <h1>{`Bonsoir mon cher ${name}`}</h1>
      <h2>{`Votre nom compte ${name?.length} caractere${
        name?.length > 1 ? "s" : ""
      }`}</h2>
      <h2>{children}</h2>
      <hr />
    </Fragment>
  );
};

const App2 = () => {
  const name = "prince";
  const age = 26;

  return (
    <Fragment>
      <InfoPersone name={name} age={age}>
        <MessageFromUser age={age} />
      </InfoPersone>
      <InfoPersone name={name} age={age}>
        <Cv name={name} age={age} />
      </InfoPersone>
    </Fragment>
  );
};

export default App2;
