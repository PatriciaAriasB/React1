import "./Person.css"

const Person = (props) => {
   
console.log(props)
  return (
    <div className="text-welcome"> <p>Hola, me llamo {props.name} {props.surname} y mi edad es {props.age}</p></div>
  )
}

export default Person;

//<div className="text-welcome"> <h1>Hola, me llamo {props.name} {props.surname} y mi edad es {props.age}</h1></div>