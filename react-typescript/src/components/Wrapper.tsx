type WrapperProps = {
  children: React.ReactNode
}

const Wrapper = (props:WrapperProps) => {
  return (
    <div><p>{props.children}</p></div>
  )
}

export default Wrapper