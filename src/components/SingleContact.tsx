import { useParams, Link } from "react-router-dom"

interface Contactprops{
    contactList: any[], 
    handleDelete: (id: number) => void,
    handleEdit: (id: number) => void,                                                                 
}

function SingleContact(props: Contactprops) {
  const id = useParams();
  const contact = props.contactList.find(contact => (contact.id).toString() === id.id.toString());

  return (
    <div className="single-contact">
        {
            contact &&
            <>
                <h3>{contact.firstName} {contact.lastName}</h3>
                <h3>Is Active: { contact.isActive ? 'true' : 'false'}</h3>
                <h3>Id: {contact.id} </h3>
                <button onClick={() => props.handleDelete(contact.id)}>Delete</button>
                <button onClick={() => props.handleEdit(contact.id)}>Edit</button>
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

export default SingleContact
