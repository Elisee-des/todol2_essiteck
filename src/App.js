import React, { Fragment } from "react";


const Cv = ({ name, age }) => (
    <Fragment>
      <h1>Prenom :{name}</h1>
      <h2>Age : {age}</h2>
  </Fragment>

// Etant donner que cest eux les enfants, il n'ont pas le droit de prendre *{}*
);

// const Cv = (props) => (
//   <Fragment>
//     <h1>Prenom :{props.name}</h1>
//     <h2>Age : {props.age}</h2>
// </Fragment>

// );

const ProfilUser = ({ title, subTitle, smsfin, children }) => {
  return (
    <Fragment>
      <div>
      <hr />
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <h3>{smsfin}</h3>
      </div>
      <div>{children}</div>
      {/* Il ne surtout pas oublier de passer les enfant en parametre pour les appeler*/}
      <h4>{smsfin}</h4>
      {/* <hr /> */}
    </Fragment>
  );
}


const App = () => {
  const name1 = "Emille";
  const age1 = 23;
  const name2 = "Adrihein";
  const age2 = 25;

  return (
    <Fragment>
      <ProfilUser title={"Mon Profil"} subTitle={"Mes donnes presonnels"} smsfin={"fin des donnes"}>
        <Cv name={name1} age={age1} />  
      </ProfilUser>
      
      <ProfilUser title={"Mon Profil"} subTitle={"Mes donnes presonnels"} smsfin={"fin des donnes"}>
      <Cv name={name2} age={age2} />
      </ProfilUser>
    </Fragment>
  )
};

export default App;
