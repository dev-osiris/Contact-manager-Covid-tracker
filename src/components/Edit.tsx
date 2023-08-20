import { useParams } from 'react-router-dom';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

type contactObj = {
    firstName: string, 
    lastName: string, 
    isActive: boolean,
    id: number,
}

interface Editprops{
    contactList: contactObj[],  
    setContactList: (c: contactObj[]) => void, 
    handleDelete: (id: number, isEditing: boolean) => void,                                                               
}

function Edit(props: Editprops) {
    const id = useParams();

    //find the contact that is to be edited from contactList[].
    const contact = props.contactList.find(contact => (contact.id).toString() === id.id.toString());
    const [fname, setFname] = useState(contact.firstName)
    const [lname, setLname] = useState(contact.lastName)
    const [active, setActive] = useState(contact.isActive)
    const navigate = useNavigate();

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault(); 
        
        let list2: contactObj[] = [...props.contactList];

        //delete the original contact and replace it with the edited one.
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


    //receives string valur from radio button and converts it into boolean so it can be used in state variable
    const string2bool = (val: string): boolean => {
        if (val && typeof val === "string") {
            if (val.toLowerCase() === "yes") return true;
            if (val.toLowerCase() === "no") return false;
       }
       else
        return false;
    }

  return (
    <div>
      <form className='form' onSubmit={(e) => {handleOnSubmit(e)}} >
      <h2>Edit contact</h2>
        <label htmlFor="fname">First name* </label>
        <input type="text"  id="fname" required value={fname} onChange={(e) => {setFname(e.target.value)}}/>

        <br />

        <label htmlFor="lname">Last name </label>
        <input type="text"  id="lname" value={lname} onChange={(e) => {setLname(e.target.value)}}/>

        <br />

        <label>Is Active? </label>
        <input 
            id="yes" 
            className="radio" 
            type="radio" 
            name="isActive" 
            checked={active}  
            value="yes"
            onChange={(e) => {setActive(string2bool(e.target.value))}} 
        />
        <label htmlFor="yes">Yes</label>

        <input 
            id="no" 
            className='radio' 
            type="radio" 
            name="isActive"  
            value="no"
            checked={!active} 
            onChange={(e) => {setActive(string2bool(e.target.value))}} 
        />
        <label htmlFor="no">No</label>

        <br />

        <button className='add-del-btn'>Done</button>
    </form>
    </div>
  )
}

export default Edit
