import { useContext } from 'react';

import { UserContext } from './FormView';
import TableView from './TableView';

const SearchListView = () =>{

    const {list, searchItem, setSearchItem, colName, isPrinted} = useContext(UserContext);

    return (
        <div>
            <input
                type="text"
                placeholder='🔍 Search person by First Name ...'
                className='card shadow-lg p-3 mb-5 bg-white rounded'
                style={{width: '40rem'}}
                onChange={(e) => {
                    setSearchItem( e.target.value );
                }}
            />
            { list.length > 0 && (
                <div className= {(isPrinted)?'flex col-md-5':''}>
                    <div className={(isPrinted)?'card shadow-lg p-3 mb-5 bg-white rounded':''} style={{width: '52rem'}}>
                        <table cellSpacing='0' id='customers'>
                            { isPrinted && (
                                <thead>
                                <tr>
                                    { colName.map((obj, index) => {
                                        // setIsPrinted(false);
                                        return(<th key={index}>{obj}</th>)
                                    })}
                                </tr>
                            </thead>
                            )}
                            { list.filter(( item ) => {
                                if ( searchItem === "" ){
                                    return "";
                                }
                                else if ( item.firstName.toLowerCase().includes(searchItem.toLowerCase())){
                                    return item;
                                }
                                return "";
                            }).map(( item ) => {
                                return(
                                    <TableView item={item}/>
                                );
                            })}
                        </table>
                    </div>
                </div>
            )}
            {/* { list.filter(( item ) => {
                if ( searchItem === "" ){
                    return "";
                }
                else if ( item.firstName.toLowerCase().includes(searchItem.toLowerCase())){
                    return item;
                }
                return "";
            }).map(( item ) => {

                return(
                    <div className='flex col-md-5'>
                        <div className='card shadow-lg p-3 mb-5 bg-white rounded' style={{width: '60rem'}}>
                            <table cellSpacing='0' id='customers'>
                                { isPrinted === true && 
                                    (<thead>
                                    <tr>
                                        { colName.map((obj, index) => {
                                            // setIsPrinted(false);
                                            return(<th key={index}>{obj}</th>)
                                        })}
                                    </tr>
                                    </thead>)
                                }
                                <TableView item={item} setIsPrinted={setIsPrinted}/>
                            </table>
                        </div>
                    </div>
                );
            })} */}
        </div>
    );

}

export default SearchListView;