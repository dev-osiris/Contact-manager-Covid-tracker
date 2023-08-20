import { useParams, Link } from "react-router-dom"

interface Contactprops{
    contactList: any[], 
    handleDelete: (id: number, isEditing: boolean) => void,
}

function SingleContact(props: Contactprops) {
  const id = useParams();
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

export default SingleContact
