import { useContext } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { UserContext } from './FormView';

const EditDeleteView = ( {item} ) => {
    const {list, setList, setPerson, setIdEditing, setEditId} = useContext(UserContext);
    const { id, firstName, middleName, lastName, age, contactNumber, email, status} = item;

    const handleChange = ( ID, value ) => {
        setList(
            list.map((item) => {
              if( item.id === ID ){
                item = { ...item, status: value};
                setList([ ...list, item]);
                alert("Your information updated.");
              }
              return item;
            })
        );
    }

    const editItem = () => {
        // const editItem = list.find((item) => item.id === id );
        setIdEditing( true );
        setEditId( id );
        setPerson({ ...item, id: id});
        setPerson({ ...item, firstName: firstName});
        setPerson({ ...item, middleName: middleName});
        setPerson({ ...item, lastName: lastName});
        setPerson({ ...item, age: age});
        setPerson({ ...item, contactNumber: contactNumber});
        setPerson({ ...item, email: email});
        setPerson({ ...item, status: status});
    };

    const removeItem = () => {
        setList( list.filter( (item) => item.id !== id ));
    };

    return (

        <div style={{flexDirection: 'row'}}>
            <div className='card' style={{width: '6rem', alignItems: 'center'}}>
                { ( status === 'Online' ) ? <div className='margin-right'>
                    <input 
                        type='checkbox'
                        onClick={() => {handleChange(id, "Offline")}}
                    /> Offline
                </div> : <div className='margin-right'>
                    <input 
                        type='checkbox'
                        onClick={() => {handleChange(id, "Online")}}
                    /> Online
                </div>}
            </div>
            <button 
                type="button" 
                className='edit-btn margin-right'
                onClick={()=>editItem()}
                >
                <Link className='edit-btn' to='/createperson'><FaEdit /></Link>
            </button>
            <button 
                type="button" 
                className='delete-btn margin-right'
                onClick={()=>removeItem()}
                >
                <FaTrash />
            </button>
        </div>
    )
}

export default EditDeleteView;