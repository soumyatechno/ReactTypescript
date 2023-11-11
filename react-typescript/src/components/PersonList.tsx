type PersonListProps = {
  items: {
    id: number,
    title: string,
    price: number
  }[]
}

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <h2>CourseLists</h2>
      <h3>
        {props.items.map((item) => {
          return <li key={item.id}>{item.title} - { item.price}</li>
          })}
      </h3>
    </div>
  )
}

export default PersonList