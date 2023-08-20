import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

interface contactObj {
    firstName: string, 
    lastName: string, 
    isActive: boolean,
}


interface NewContactProps{
    contactList: any[],
    setContactList: (c: contactObj[]) => void,
}
 
function NewContact(props: NewContactProps) {
    let firstName: string = "";
    let lastName: string = "";
    let isActive: boolean = false;
    const navigate = useNavigate();

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (e.target.value && typeof e.target.value === "string") {
            if (e.target.value.toLowerCase() === "true") isActive = true;
            if (e.target.value.toLowerCase() === "false") isActive = false;
       }
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(props.contactList));
    }, [props.contactList])
    
    const handleOnSubmit = (e: any) =>{
        e.preventDefault(); 
        const newList = [...props.contactList, {
            id: props.contactList.length > 0 ? props.contactList[props.contactList.length - 1].id + 1 : 0,
            firstName: firstName, 
            lastName: lastName,
            isActive: isActive,
        }]
        props.setContactList(newList);
        navigate('/contact', {replace: true})
    }

  return (
    <form className="form" onSubmit={(e) => handleOnSubmit(e)} >
        <label htmlFor="fname">First name </label>
        <input type="text"  id="fname" required onChange={(e) => firstName = e.target.value}/>

        <br />

        <label htmlFor="lname">Last name </label>
        <input type="text"  id="lname" onChange={(e) => lastName = e.target.value}/>

        <br />

        <label>Is Active? </label>
        <input className='radio' type="radio" name="isActive" value='true' onChange={handleRadioChange} />
            Yes
        <input className='radio' type="radio" name="isActive" value='false' onChange={handleRadioChange} />
            No

        <br />
        <button className='add-del-btn' >Add</button> : 

    </form>
  )
}

export default NewContact
