import { useParams, Link } from "react-router-dom"


type contactObj = {
    firstName: string, 
    lastName: string, 
    isActive: boolean,
    id: number,
}

interface Contactprops{
    contactList: contactObj[], 
    handleDelete: (id: number, isEditing: boolean) => void,
}

function SingleContact(props: Contactprops): JSX.Element {
  const id = useParams();

  //find the contact in the contactList[] that needs to be diplayed.
  const contact = props.contactList.find(contact => (contact.id).toString() === id.id.toString());

  return (
    <div className="single-contact">
        {
            contact &&
            <>
                <div style={{"marginBottom": "5%"}}>
                    <span id="contact-info-item-single">Id: </span> {contact.id}
                    <br /> <br />
                    <span id="contact-info-item-single">Name:</span> {contact.firstName} {contact.lastName}
                    <br /> <br />
                    <span id="contact-info-item-single">Active: </span>{ contact.isActive ? 'yes' : 'No'}
                </div>

                <button className='add-del-btn' onClick={() => props.handleDelete(contact.id, false)}>
                    Delete
                </button>
                
                <Link to={`/edit/${contact.id}`} >
                    <button className='add-del-btn' >Edit</button>
                </Link>
            </>
        }
        {!contact &&
            <>
                <h2>Oops this contact does not exist.</h2>
            </>
        }
    </div>
  )
}

export default SingleContact;
