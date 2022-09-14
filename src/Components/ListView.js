import { useContext } from 'react';

import EditDeleteView from './EditDeleteView';
import { UserContext } from './FormView';

const ListView = ()=>{

    const {list} = useContext(UserContext);

    return (
        <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
            <h3 className='card shadow-lg p-3 mb-5 bg-white rounded text-center'>Person Credential List</h3>
            { list.map(( item ) => {
                const {firstName, middleName, lastName, age, contactNumber, email, status} = item;

                return(
                    <div>
                        <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
                            <p> Full Name: {firstName} {middleName} {lastName}</p>
                            <p>Age: {age}</p>
                            <p>Contact Number: {contactNumber}</p>
                            <p>Email Address: {email}</p>
                            <p>Status: {status}</p>
                            <EditDeleteView item={item}/>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ListView;