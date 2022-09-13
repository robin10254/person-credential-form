import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const EditDeleteView = ( {list, setList, id } ) => {
    // const [ isEditing, setIdEditing] = useState(false);
    // const [ editId, setEditId] = useState(null);

    // const handleSubmit = (id) => {
    //     e.preventDefault();
        
    //     if( id && isEditing ){
    //       setList(
    //         list.map((item) => {
    //           if( item.id === editId ){
    //             return { ...item, firstName: firstName}
    //           }
    //           return item
    //         })
    //       );
    //       setName("");
    //       setEditId(null);
    //       setIdEditing(false);
    //     }
    // };
    // const editItem = () => {
    //     const editItem = list.find((item) => item.id === id );
    //     setIdEditing( true );
    //     setEditId( id );
    //     handleSubmit(id);
    //     // setName( editItem.title );
    // };

    const removeItem = () => {
        setList( list.filter( (item) => item.id !== id ));
    };

    return (

        <div>
            <button 
                type="button" 
                className='edit-btn'>
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