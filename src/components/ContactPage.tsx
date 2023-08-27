import moment from "moment";
import { Link } from "react-router-dom"

interface Contactprops{
    firstName: string,
    lastName: string,
    isActive: boolean, 
    id: number,                                                                   
}

function ContactPage(props: Contactprops) {
  const dateTime = moment().format('MMMM Do YYYY, h:mm:ss a')
  return (
    //pass the id of the selected contact through URL parameters
    <Link className="single-card-link" to={`/singlecontact/${props.id}`}>
        <div className="contact-card">
          <div className="dateTime">{dateTime}</div>
          <hr />

          <div>
            <span id="contact-info-item">Id: </span> {props.id}
            <br /> <br />
            <span id="contact-info-item">Name:</span> {props.firstName} {props.lastName}
            <br /> <br />
            <span id="contact-info-item">Active: </span>{ props.isActive ? 'yes' : 'No'}
          </div>
        </div>
    </Link>
  )
}

export default ContactPage;
