import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

interface contactObj {
    firstName: string, 
    lastName: string, 
    isActive: boolean,
}


interface NewContactProps{
    firstName: string,
    setFirstName: (any: any) => void,
    lastName: string,
    setLastName: (any: any) => void,
    isActive: boolean,
    setIsActive: (any: any) => void,
    contactList: any[],
    setContactList: (c:any[]) => void,
}
 
function NewContact(props: NewContactProps) {
    const [addMore, setAddMore] = useState(true);

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (e.target.value && typeof e.target.value === "string") {
            if (e.target.value.toLowerCase() === "true") props.setIsActive(true);
            if (e.target.value.toLowerCase() === "false") props.setIsActive(false);
       }
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(props.contactList));
    }, [props.contactList])
    
    const handleOnSubmit = (e: any) =>{
        e.preventDefault(); 
        const newList = [...props.contactList, {
            id: props.contactList.length > 0 ? props.contactList[props.contactList.length - 1].id + 1 : 0,
            firstName: props.firstName, 
            lastName: props.lastName,
            isActive: props.isActive,
        }]
        props.setContactList(newList);
        setAddMore(false)
        
    }

  return (
    <form onSubmit={(e) => handleOnSubmit(e)} >
        <label htmlFor="fname">First name </label>
        <input type="text"  id="fname" onChange={(e) => props.setFirstName(e.target.value)}/>

        <br />

        <label htmlFor="lname">Last name </label>
        <input type="text"  id="lname" onChange={(e) => props.setLastName(e.target.value)}/>

        <br />

        <label>Is Active? </label>
        <input type="radio" name="isActive" value='true' onChange={handleRadioChange} />
            Yes
        <input type="radio" name="isActive" value='false' onChange={handleRadioChange} />
            No

        <br />
        {
            (addMore) ? 
            <button>Add</button> : 
            (
                <Link to='/Contact'>
                    <button>Done</button>
                </Link>
            )
        }

    </form>
  )
}

export default NewContact
