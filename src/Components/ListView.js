import React from 'react';

const ListView = ( items )=>{
    return (
        <div>
            <h1 className='text-center'>Person Credential List</h1>
            {/* { items.map(( item ) => {
                const { firstName, middleName, lastName, age, contactNumber, email, status} = item;
                return(
                    <div className='list-item'>
                        <p>{firstName}</p>
                        <p>{middleName}</p>
                        <p>{lastName}</p>
                        <p>{age}</p>
                        <p>{contactNumber}</p>
                        <p>{email}</p>
                        <p>{status}</p>
                    </div>
                );
            })} */}
        </div>
    );
};

export default ListView;