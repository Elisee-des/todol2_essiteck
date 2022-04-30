import {Fragment, useState} from 'react'

const InfoPersonne = (props) => (
  <Fragment>
    <h1>Bonjour</h1>
    <p>Nom:  {props?.name}</p>
    <p>Age:  {props?.age}</p>
    <p>{`Votre nom compte ${props?.name?.length} caractère${props?.name?.length > 1 ? 's' : ''}`}</p>
    <p>Vous avez {`${props?.age} ans`}</p>
  </Fragment>
)

const SectionContent = ({title, subTitle, children}) => {
  return(
    <div>
      <div>
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
      </div>
      <div>{children}</div>
    </div>
  )
}

const MessageFromAgeStatus = ({age, name, children}) => {
  const ageStatus = (age) => {
    let message = "Vous avez pile l'âge de la maturité";
    if(age > 20) {
      message = `Vous avez passé les 20 ans il ya ${+age - 20} ans`;
    } else if(age < 20) {
      message = `Il vous reste ${20 - (+age)} ans pour atteindre l'age de la maturité`;
    }
    return message;
  }
  return (
    <Fragment>
        <p>{ageStatus(age)}</p>
    </Fragment>
  )
}

function App() {
  const name = "p";
  const [age, setAge] = useState(130);
  const [salut, setSalut] = useState('Bonjour')
  const [isShow, setIsShow] = useState(true)
  const handlerSetAge = (event) => {
    event.preventDefault();
    setAge(60);
    setIsShow(false)
    salutation()
  }

  const salutation = () => {
    setTimeout(() => {
      let message = `${salut} le monde !!!`
      setSalut(message)
    }, 1000)
  }

  return (
    <Fragment>
      <SectionContent title={"Information sur son profile"} subTitle={"Profil"}>
        <InfoPersonne name={name} age={age} />
      </SectionContent>
      <SectionContent title={'Statut du profil'} subTitle={"Statut"}>
        <MessageFromAgeStatus age={age} name={name}>
          <p>Tu me vois</p>
        </MessageFromAgeStatus>
      </SectionContent>
      {salut ? salut : ""}
      {isShow ? (
        <p>
          <button onClick={handlerSetAge} >MODIFIER AGE</button>
        </p>
      ) : null}
    </Fragment>
  );
}

export default App;
