import EditDeleteView from "./EditDeleteView";

const ListViewTable = ({item}) => {
    console.log(item);
    
    return(
        <tbody>
            <tr>
                { Object.values(item).map((obj, index) => {
                    if( obj === item.id ){
                        return '';
                    }
                    else if( obj === item.status ){
                        return(<td className={(obj==='Online')?'active':'inActive'} key={index}>{obj}</td>)
                    }
                    else{
                        return(<td key={index}>{obj}</td>)
                    }
                })}
                <td><EditDeleteView item={item}/></td>
            </tr>
        </tbody>
    );
}

export default ListViewTable;