import { JsxElement } from "typescript"

interface titleProps {
    title: string,
}

function Heading( props: titleProps ) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

export default Heading
