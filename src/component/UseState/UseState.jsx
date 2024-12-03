import React,{useState} from 'react';


const UseState = () => {
    const[name, setName] = useState("Guest");
    const[age, setAge] = useState(0)
    const[employed, setEmployed] = useState(false)

    const handleNameChange = (e) => {
        setName("SpongeBob");
    };

    const handleAge = () => {
        setAge(age + 1);
    };

    const handleEmployement = () => {
        setEmployed(!employed);
    };
    


  return (
    <div>
        <p>Name : {name} </p>
        <button onClick={handleNameChange}>SetName</button>

        <p>Age : {age} </p>
        <button onClick={handleAge}>SetAge</button>


        <p>Employment status : {employed?"Does Work" : "Is Student"} </p>
        <button onClick={handleEmployement}>ToggleStatus </button>
        </div>
  )
}

export default UseState