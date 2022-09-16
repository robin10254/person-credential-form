import { useContext } from 'react';

import { UserContext } from './FormView';

const CreatePerson = () => {
    const { person, onChangeHandler, submitHanlder} = useContext(UserContext);

    return(
            <div className='card shadow-lg p-3 mb-5 bg-white rounded' style={{width: '40rem'}}>
                <h3 className='text-center'>Person Credentials Form</h3>
                <div>
                    <label for='firstName' className='form-label pt-2'>First Name</label>
                    <input 
                        type='text'
                        name='firstName'
                        autoComplete='off'
                        value={person.firstName}
                        onChange={onChangeHandler}
                        className='form-control'
                        id='firstName'
                        placeholder='Enter your first name'
                    />
                </div>
                <div className='form-group'>
                    <label for='middleName' className='form-label pt-2'>Middle Name</label>
                    <input 
                        type='text'
                        name='middleName'
                        autoComplete='off'
                        value={person.middleName}
                        onChange={onChangeHandler}
                        className='form-control'
                        id='middleName'
                        placeholder='Enter your middle name'
                    />
                </div>
                <div className='form-group'>
                    <label for='lastName' className='form-label pt-2'>Last Name</label>
                    <input 
                        type='text'
                        name='lastName'
                        autoComplete='off'
                        value={person.lastName}
                        onChange={onChangeHandler}
                        className='form-control'
                        id='lastName'
                        placeholder='Enter your last name'
                    />
                </div>
                <div className='form-group'>
                    <label for='age' className='form-label pt-2'>Age</label>
                    <input 
                        type='number'
                        name='age'
                        autoComplete='off'
                        value={person.age}
                        onChange={onChangeHandler}
                        className='form-control'
                        id='age'
                        placeholder='Enter your age (e.i. 18)'
                    />
                </div>
                <div className='form-group'>
                    <label for='contactNumber' className='form-label pt-2'>Contact Number</label>
                    <input 
                        type='tel'
                        name='contactNumber'
                        autoComplete='off'
                        value={person.contactNumber}
                        onChange={onChangeHandler}
                        className='form-control'
                        id='contactNumber'
                        placeholder='Enter your contact number (e.i. 01780944849)'
                        pattern='[0-9]{11}'
                    />
                </div>
                <div className='form-group'>
                    <label for='email' className='form-label pt-2'>Email Address</label>
                    <input 
                        autoComplete='off'
                        type='email'
                        name='email'
                        value={person.email}
                        onChange={onChangeHandler}
                        className='form-control'
                        id='email'
                        placeholder='Enter your email (e.i. name@example.com)'
                    />
                </div>
                <div className='form-group'>
                    <label for='status'>Status</label>
                    <select 
                        className='form-control' 
                        id='status'
                        name='status'
                        onChange={onChangeHandler}>
                        <option value="">Select Status</option>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                    </select>
                </div>
                <button 
                    type='button' 
                    className='btn btn-primary btn-block'
                    onClick={submitHanlder}
                >Save</button>
            </div>
    );
}

export default CreatePerson;