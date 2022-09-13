import { useEffect, useState } from 'react';
import ListView from './ListView';

const getLocalStorage = () => {
    let list = localStorage.getItem("list");
    if( list ){
      return ( list = JSON.parse(list))
    } else {
      return [];
    }
};

const FormView = () =>{
    const [ list, setList] = useState(getLocalStorage());
    let [ person, setPerson] = useState({ id: null, firstName: "", middleName: "", lastName: "", age: null, contactNumber: "", email: "", status: ""});

    useEffect(()=>{
        localStorage.setItem("list", JSON.stringify(list))}, [list]
    );

    const validInputCheck = ()=>{
        if( person.firstName === "" ){
            alert("Your first name is not entered.");
            return false;
        }else if( person.middleName === "" ){
            alert("Your middle name is not entered.");
            return false;
        }else if( person.lastName === "" ){
            alert("Your last name is not entered.");
            return false;
        }else if( person.age < 0 || 151 < person.age || person.age === null ){
            alert("Your age is not correct.");
            return false;
        }else if( person.contactNumber.length !== 11 ){
            alert("Your contact number is not correct.");
            return false;
        }else if( person.email === "" ){
            alert("Your email address is not entered.");
            return false;
        }else if( person.status === "" ){
            alert("Your status is not selected.");
            return false;
        }
        return true;
    }

    const onChangeHandler = (e) => {
        const val = e.target.value;

        switch( e.target.name ){
            case "firstName":
                setPerson({ ...person, firstName: val});
                break;
            case "middleName":
                setPerson({ ...person, middleName: val});
                break;
            case "lastName":
                setPerson({ ...person, lastName: val});
                break;
            case "age":
                setPerson({ ...person, age: val});
                break;
            case "contactNumber":
                setPerson({ ...person, contactNumber: val});
                break;
            case "email":
                setPerson({ ...person, email: val});
                break;
            case "status":
                setPerson({ ...person, status: val});
                break;
            default:
                alert( e.target.name )
        }
    };
    const submitHanlder = () => {
        if( validInputCheck() === false ) return;

        let makeId = list.length + 1;
        person = { ...person, id: makeId};
        setList([ ...list, person]);
        alert("Your information saved.");
    };

    return (
        <div className='container'>
            <div className='row justify-content-center pt-5'>
                <div className='flex col-md-5'>
                    <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
                        <h3 className='text-center'>Person Credential Form
                        </h3>
                        <div className='v'>
                            <label for='firstName' className='form-label pt-2'>First Name
                            </label>
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
                            <label for='middleName' className='form-label pt-2'>Middle Name
                            </label>
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
                            <label for='lastName' className='form-label pt-2'>Last Name
                            </label>
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
                            <label for='age' className='form-label pt-2'>Age
                            </label>
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
                            <label 
                                for='contactNumber' className='form-label pt-2'
                            >
                                Contact Number
                            </label>
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
                            <label 
                                for='email' 
                                className='form-label pt-2'
                            >
                                Email Address
                            </label>
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
                            <label for='status'>Status
                            </label>
                            <select 
                                className='form-control' 
                                id='status'
                                name='status'
                                onChange={onChangeHandler}
                            >
                                <option value="">Select Status</option>
                                <option 
                                    value="online"
                                >Online</option>
                                <option 
                                    value="offline"
                                >Offline</option>
                            </select>
                        </div>
                        <button 
                            type='button' 
                            className='btn btn-primary btn-block'
                            onClick={submitHanlder}
                        >Save</button>
                    </div>
                    <div>
                        {list.length > 0 && (<ListView list={list} setList={setList} person={person} setPerson={setPerson}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormView;