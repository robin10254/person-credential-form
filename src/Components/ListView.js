import { useContext } from 'react';

import EditDeleteView from './EditDeleteView';
import { UserContext } from './FormView';

const ListView = ()=>{

    const {list, setList} = useContext(UserContext);

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

    return (
        <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
            <h3 className='card shadow-lg p-3 mb-5 bg-white rounded text-center'>Person Credential List</h3>
            { list.map(( item ) => {
                const {id, firstName, middleName, lastName, age, contactNumber, email, status} = item;

                return(
                    <div>
                        <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
                            <p>Full Name: {firstName} {middleName} {lastName}</p>
                            <p>Age: {age}</p>
                            <p>Contact Number: {contactNumber}</p>
                            <p>Email Address: {email}</p>
                            <p className= {( status === 'Online' )?'active':'inActive'}>Status: {status}</p>
                            <div className='flex-row card p-3'>
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
                            <EditDeleteView item={item}/>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ListView;