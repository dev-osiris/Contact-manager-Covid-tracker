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
                <h3>Name: {contact.firstName} {contact.lastName}</h3>
                <h3>Is Active: { contact.isActive ? 'true' : 'false'}</h3>
                <h3>Id: {contact.id} </h3>
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
