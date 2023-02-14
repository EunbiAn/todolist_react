import DropDownItem from "../RadioMenu/RadioMenu";
import Item from "../Item/Item";
import './ItemList.css';
function ItemList({works, removeWork,  updateItem, radioValue}) {
    return (
        <div className="listDiv">     
            <ul className="list-group">
               { works.map((item, idx)=>{
                    if(radioValue==item.done){
                        return <Item removeWork={removeWork} item={item} key={item.no} updateItem={updateItem} radioValue={radioValue}/>; 
                    }
                })}
            </ul>
        </div>
    );
}
export default ItemList;