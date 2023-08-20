import { useParams } from 'react-router-dom';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

interface Editprops{
    contactList: any[],  
    setContactList: (c: any[]) => void, 
    handleDelete: (id: number, isEditing: boolean) => void,                                                               
}

function Edit(props: Editprops) {
    const id = useParams();
    const contact = props.contactList.find(contact => (contact.id).toString() === id.id.toString());
    const [fname, setFname] = useState(contact.firstName)
    const [lname, setLname] = useState(contact.lastName)
    const [active,setActive] = useState(contact.Active)
    const navigate = useNavigate();

    const handleOnSubmit = (e: any) => {
        e.preventDefault(); 
        
        let list2 = [...props.contactList]
        for (let index = 0; index < list2.length; index++) {
            if(list2[index].id.toString() === id.id.toString()){
                list2.splice(index, 1);
                break;
            }
        }

        const newList = [...list2, {
            id: contact.id,
            firstName: fname, 
            lastName: lname,
            isActive: active,
        }]
        props.setContactList(newList);

        navigate('/contact', {replace:true})
    }
  return (
    <div>
      <form className='form' onSubmit={(e) => {handleOnSubmit(e)}} >
        <label htmlFor="fname">First name </label>
        <input type="text"  id="fname" value={fname} onChange={(e) => {setFname(e.target.value)}}/>

        <br />

        <label htmlFor="lname">Last name </label>
        <input type="text"  id="lname" value={lname} onChange={(e) => {setLname(e.target.value)}}/>

        <br />

        <label>Is Active? </label>
        <input className="radio" type="radio" name="isActive" value={active} onChange={(e) => {setActive(e.target.value)}} />
            Yes
        <input className='radio' type="radio" name="isActive" value={active} onChange={(e) => {setActive(e.target.value)}} />
            No

        <br />

        <button className='add-del-btn'>Done</button>
    </form>
    </div>
  )
}

export default Edit
