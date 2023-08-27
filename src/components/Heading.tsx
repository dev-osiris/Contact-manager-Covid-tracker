
interface titleProps {
    title: string,
}

function Heading( props: titleProps ) {
  return (
    <div className="title">
      <img src={require("../favicon2.png")} alt="icon" />
      {props.title}
    </div>
  )
}

export default Heading;
