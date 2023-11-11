type GreetProps = {
  name: string,
  add: string,
  age :number,
  isLoggedIn: boolean
}

const Greet = (props:GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? <h1>Welcome back</h1> : <h1>Please login</h1>}
      <h2>Hi {props.name}, how are you?</h2>
      <h3>Where are you currently now?</h3>
      <h2>Hi, currently I am in {props.add} </h2>
      <h4>My age is {props.age}</h4>
    </div>
  )
}

export default Greet