import { useContext } from 'react';

import { UserContext } from './FormView';

const TableView = ({item}) => {
    const {setIsPrinted} = useContext(UserContext);
    setIsPrinted( true );

    return(
        <tbody>
            <tr>
                { Object.values(item).map((obj, index) => {
                    if( obj === item.id ){
                        return '';
                    }
                    else{
                        return(<td key={index}>{obj}</td>)
                    }
                })}
            </tr>
        </tbody>
    );
}

export default TableView;