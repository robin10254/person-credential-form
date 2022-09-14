import { useContext } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

import { UserContext } from './FormView';

const EditDeleteView = ( {item} ) => {
    const {list, setList, setPerson, setIdEditing, setEditId} = useContext(UserContext);
    const { id, firstName, middleName, lastName, age, contactNumber, email, status} = item;

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

        <div>
            <button 
                type="button" 
                className='edit-btn'
                onClick={()=>editItem()}>
                <FaEdit />
            </button>
            <button 
                type="button" 
                className='delete-btn'
                onClick={()=>removeItem()}
                >
                <FaTrash />
            </button>
        </div>
    )
}

export default EditDeleteView;