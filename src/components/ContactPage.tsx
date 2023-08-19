import { render } from "@testing-library/react"
import SingleContact from "./SingleContact"
import { Link } from "react-router-dom"

interface Contactprops{
    firstName: string,
    lastName: string,
    isActive: boolean, 
    id: number,                                                                   
}

function ContactPage(props: Contactprops) {
  return (
    <Link  to={`/singlecontact/${props.id}`}>
        <div className="contact-card">
        <h3>{props.firstName} {props.lastName}</h3>
        <h3>Is Active: { props.isActive ? 'true' : 'false'}</h3>
        <h3>Id: {props.id} </h3>
        </div>
    </Link>
  )
}

export default ContactPage
