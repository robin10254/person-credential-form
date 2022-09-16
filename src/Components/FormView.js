import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CreatePerson from './CreatePerson';
import ListView from './ListView';
import Navbar from './Navbar';
import SearchListView from './SearchListView';

export const UserContext = createContext();

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
    const [ isEditing, setIdEditing] = useState(false);
    const [ editId, setEditId] = useState(null);
    const [ searchItem, setSearchItem] = useState("");
    const [ countId, setCountId] = useState(0);
    const colName = [ 'First Name', 'Middle Name', 'Last Name', 'Age', 'Contact Number', 'Email', 'Status'];
    const [ isPrinted, setIsPrinted ] = useState(false);
    
    // const dummyData = () => {
    //     //Dummy data 1
    //     person = { id: 1000, firstName: "Md. Rifat", middleName: "Islam", lastName: "Robin", age: 26, contactNumber: "01780944849", email: "rifatrobin810@gmail.com", status: "Online"}
    //     // setList([ ...list, person]);

    //     //Dummy data 2
    //     person = { ...person, id: 1001, firstName: "Md. Rishad", middleName: "Zaman", lastName: "Rafi", age: 26, contactNumber: "01756780987", email: "zamanrafi007@gmail.com", status: "Offline"}
    //     // setList([ ...list, person]);
    //     // console.log(list);
    // }
    // dummyData();

    useEffect(()=>{
        localStorage.setItem("list", JSON.stringify(list))}, [list]
    );

    const validInputCheck = () => {
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

    let onChangeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setPerson({...person, [name]: value})
    };

    let submitHanlder = () => {
        if( validInputCheck() === false ) return;
        if( isEditing ){
            setList(
                list.map((item) => {
                  if( item.id === editId ){
                    item = { ...item, id: person.id, firstName: person.firstName, middleName: person.middleName, lastName: person.lastName, age: person.age, contactNumber: person.contactNumber, email: person.email, status: person.status};
                    setList([ ...list, item]);
                    alert("Your information updated.");
                    setPerson({firstName: "", middleName: "", lastName: "", age: "", contactNumber: "", email: "", status: ""});
                  }
                  return item;
                })
            );
            setEditId( null );
            isEditing( false );
        }else{
            setCountId( countId + 1 );
            person = { ...person, id: countId};
            
            setList([ ...list, person]);
            alert("Your information saved.");
            setPerson({firstName: "", middleName: "", lastName: "", age: "", contactNumber: "", email: "", status: ""});
        }
    };

    return (
        <UserContext.Provider value={{list, setList, person, setPerson, isEditing, setIdEditing, editId, setEditId, searchItem, setSearchItem, onChangeHandler, submitHanlder, colName, isPrinted, setIsPrinted}}>
            <div className='container'>
                <div className='row justify-content-center pt-5' >
                    <div className='flex col-md-5' style={{width: '50rem'}}>
                        <Router>
                            <Navbar/>
                            <Routes>
                                <Route exact path='/createperson' element={<CreatePerson/>}/>
                                <Route exact path='/searchlistview' element={<SearchListView/>}/>
                                <Route exact path='/listview' element={<ListView/>}/>

                                <Route path='' element={<ListView/>}/>
                            </Routes>
                        </Router>
                    </div>
                </div>
            </div>
        </UserContext.Provider>
    );
}

export default FormView;