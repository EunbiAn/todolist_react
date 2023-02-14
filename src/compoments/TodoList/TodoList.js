import RadioMenu from "../RadioMenu/RadioMenu";
import ItemList from "../ItemList/ItemList";
import './TodoList.css';
function TodoList({works, removeWork,  updateItem, setRadioValue, radioValue}) {
    return (
        <div className="list-container">
            <div className="session">
                 <RadioMenu setRadioValue={setRadioValue} fristValue={"할 일"} secondValue={"완료된 일"}/>
            </div>
                <ItemList works={works} removeWork={removeWork}  updateItem={updateItem} radioValue={radioValue}/>
     </div>
    );
}
export default TodoList;