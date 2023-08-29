import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

interface contactObj {
    firstName: string, 
    lastName: string, 
    isActive: boolean,
    id: number,
}


interface NewContactProps{
    contactList: contactObj[],
    setContactList: (c: contactObj[]) => void,
    setFilteredPosts: (a: contactObj[]) => void,
}
 
function NewContact(props: NewContactProps) {
    let firstName: string = "";
    let lastName: string = "";
    let isActive: boolean = false;
    const navigate = useNavigate();


    //converts string value of 'true' and 'false' to boolean true and false respectively
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>): void => {

        if (e.target.value && typeof e.target.value === "string") {
            if (e.target.value.toLowerCase() === "true") isActive = true;
            if (e.target.value.toLowerCase() === "false") isActive = false;
       }
    }

    //append the new contact to local storage
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(props.contactList));
    }, [props.contactList])
    
    const handleOnSubmit = (e: any) =>{
        e.preventDefault(); 

        //merge the new contact with the list of older contacts
        const newList = [...props.contactList, {
            id: props.contactList.length > 0 ? props.contactList[props.contactList.length - 1].id + 1 : 0,
            firstName: firstName, 
            lastName: lastName,
            isActive: isActive,
        }]
        props.setContactList(newList);
        props.setFilteredPosts(newList); //this is necessary otherwise the contact list doesn't update
        navigate('/contact', {replace: true});
    }

  return (
    <form className="form" onSubmit={(e) => handleOnSubmit(e)} >
        <h2>Add new contact</h2>
        <label htmlFor="fname">First name* </label>
        <input type="text"  id="fname" required onChange={(e) => firstName = e.target.value}/>

        <br />

        <label htmlFor="lname">Last name </label>
        <input type="text"  id="lname" onChange={(e) => lastName = e.target.value}/>

        <br />

        <label>Is Active? </label>

        <input 
            id="yes" 
            className='radio' 
            type="radio" 
            name="isActive" 
            value='true' 
            checked
            onChange={handleRadioChange} 
        />
        <label htmlFor="yes">Yes</label>

        <input 
            id="no" 
            className='radio' 
            type="radio" 
            name="isActive" 
            value='false' 
            onChange={handleRadioChange} 
        />
        <label htmlFor="no">No</label>

        <br />
        <button className='add-del-btn' >Add</button> 

    </form>
  )
}

export default NewContact
