import {useRef, useState} from 'react'

// const FormTodo = () => {
//     const inputField = useRef();
//     const [inputValue, setInputValue] = useState('')
//     const handlerSubmit = (event) => {
//         event.preventDefault();
//         const value = inputField?.current?.value ?? '';
//         setInputValue(value)
//     }
//     return (
//       <div>
//           <form onSubmit={handlerSubmit}>
//             <input type={'text'} ref={inputField} />
//             <button type='submit'>AFFICHER LA SAISIE</button>
//           </form>
//           <p>{inputValue}</p>
//       </div>
//     )
// }


const FormTodo = () => {
    const [inputValue, setInputValue] = useState('')
    const handlerInput = (event) => {
        event.preventDefault();
        const value = event?.target?.value;
        setInputValue(value);
    }
    return (
        <div>
            <input value={inputValue} onChange={handlerInput} />
            {inputValue ? (
                <p>{inputValue}</p>
            ) : null}
        </div>
    )
}

export default FormTodo
