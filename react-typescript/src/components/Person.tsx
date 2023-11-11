type PersonProps = {
  identity: {
    firstName: string,
    lastName: string
  
  }
}
const Person = (props:PersonProps) => {
  return (
    <div>
      <h3> {props.identity.firstName} {props.identity.lastName} 
      </h3></div>
  )
}

export default Person