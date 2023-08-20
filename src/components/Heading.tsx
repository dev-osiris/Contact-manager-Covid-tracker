
interface titleProps {
    title: string,
}

function Heading( props: titleProps ) {
  return (
    <div className="title">
      <h1>{props.title}</h1>
    </div>
  )
}

export default Heading
