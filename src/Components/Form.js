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

const Form = () =>{
    const [ list, setList] = useState(getLocalStorage());
    const [ person, setPerson] = useState({ firstName: "", middleName: "", lastName: "", age: null, contactNumber: "", email: "", status: ""});

    useEffect(()=>{
        localStorage.setItem("list", JSON.stringify(list))}, [list]);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
        
    //     if( !name ){
    //       //just skip this
    //     }else if( name && isEditing ){
    //       setList(
    //         list.map((item) => {
    //           if( item.id === editId ){
    //             return { ...item, title: name}
    //           }
    //           return item
    //         })
    //       );
    //       setName("");
    //       setEditId(null);
    //       setIdEditing(false);
    //     } else{
    //       let makeId = list.length + 1;
    //       let newItem = { id: makeId, title: name, status: false};
    //       setList([...list, newItem]);
    //       setName("");
    //     }
    // };

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
        setList([ ...list, person]);
        alert( person.firstName + " " + person.middleName + " " + person.lastName + ", " + person.email + ", " + person.age + ", " + person.contactNumber + ", " + person.status );
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
                    <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
                        {list.length > 0 && (<ListView items={list}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;