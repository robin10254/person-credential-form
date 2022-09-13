import React from 'react';
import EditDeleteView from './EditDeleteView';

const ListView = ( {list, setList, person, setPerson} )=>{
    return (
        <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
            <h3 className='card shadow-lg p-3 mb-5 bg-white rounded text-center'>Person Credential List</h3>
            { list.map(( item ) => {
                const { id, firstName, middleName, lastName, age, contactNumber, email, status} = item;

                return(
                    <div>
                        <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
                            <p> Full Name: {firstName} {middleName} {lastName}</p>
                            <p>Age: {age}</p>
                            <p>Contact Number: {contactNumber}</p>
                            <p>Email Address: {email}</p>
                            <p>Status: {status}</p>
                            <EditDeleteView list={list} setList={setList} id={id} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ListView;