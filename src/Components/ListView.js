import { useContext } from 'react';

import { UserContext } from './FormView';
import ListViewTable from './ListViewTable';

const ListView = ()=>{
    const {list, colName} = useContext(UserContext);

    return (
        <div className='card shadow-lg p-3 mb-5 bg-white rounded' style={{width: '60rem'}}>
            <h3 className='card shadow-lg p-3 mb-5 bg-white rounded text-center'>Person Credentials List</h3>
            { ( list.length ) ? (() => {
                return (
                    <div>
                        <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
                            <table cellSpacing='0' id='customers'>
                                <thead>
                                    <tr>
                                        { colName.map((obj, index) => {
                                            return(<th key={index}>{obj}</th>)
                                        })}
                                        <th>Buttons</th>
                                    </tr>
                                </thead>
                                { list.map(( item ) => {
                                    return(
                                        <ListViewTable item={item}/>
                                    );
                                })}
                            </table>
                        </div>
                    </div>
                );}
            )() : (() => {
                return(
                    <div>
                        <h6 style={{textAlign: 'center'}}>List is empty. Add person's credentials.</h6>
                    </div>
                );})()
            // list.map(( item ) => {
            //     const { firstName, middleName, lastName, age, contactNumber, email, status} = item;

            //     return(
            //         <div>
            //             <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
            //                 <p>Full Name: {firstName} {middleName} {lastName}</p>
            //                 <p>Age: {age}</p>
            //                 <p>Contact Number: {contactNumber}</p>
            //                 <p>Email Address: {email}</p>
            //                 <p className= {( status === 'Online' )?'active':'inActive'}>Status: {status}</p>
            //                 <EditDeleteView item={item}/>
            //             </div>
            //         </div>
            //     );
            //     })
            }
        </div>
    );
};

export default ListView;