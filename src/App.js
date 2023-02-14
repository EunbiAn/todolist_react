import React, { useState, useEffect } from "react";
import "./bootstrap.min.css";
import "./App.css";
import InputItem from "./compoments/InputItem/InputItem";
import TodoList from "./compoments/TodoList/TodoList";
import Toast from "./compoments/Toast/Toast";
import Layout from "./compoments/Layout/Layout";

function App(props) {
  const [works, setWorks] = useState([]); // TODO 할 일 목록
  const [count, setCount] = useState(1); // 새로운 work 추가할 때의 no의 값

  const [radioValue, setRadioValue] = useState(false); // 할일, 완료된 일 목록 선택 값 (false - 할 일, true - 완료된 일)
  const [toastShow, setToastShow] = useState(false); // 알람 창 유무
  const [toastType, setToastType] = useState(""); // 알람 창 타입 (추가, 삭제)

  useEffect(() => {
    // loaclstorage에 데이터가 있으면 로드한다.
    // 문자열로 저장
    const localStorageData = localStorage.getItem("todoListData");

    if (localStorageData) {
      let objData = JSON.parse(localStorageData);
      setWorks(objData.todoList);
      setCount(objData.count);
    }
  }, []);

  function saveLocalStorage(newList, newCount) {
    localStorage.setItem(
      "todoListData",
      JSON.stringify({ todoList: newList, count: newCount })
    );
  }
  // 할 일 추가 기능
  function addWork(newWork) {
    let newList = [...works, { no: count, title: newWork, done: false }];
    let newCount = count + 1;
    setWorks(newList);
    setCount(newCount);
    saveLocalStorage(newList, newCount);
    // 알람창 보이기
    setToastShow(true);
    setToastType("add");
  }

  // 할 일 삭제 기능
  function removeWork(no) {
    var newList = works.filter((item, idx) => {
      return item.no != no; // 삭제할 no와 같지 않은 객체만 return하여 새로운 newList로 선언
    });
    setWorks(newList);
    saveLocalStorage(newList, count);
    // 알람창 보이기
    setToastShow(true);
    setToastType("remove");
  }

  // 할 일 목록 업데이트 기능
  function updateItem(item) {
    const idx = works.findIndex((todo, idx) => {
      return todo.no === item.no;
    });
    works[idx] = item;
    let newList = [...works];
    setWorks(newList);
    saveLocalStorage(newList, count);
  }

  return (
    <>
      <Layout>
        <h1 id="title">Todo List</h1>
        <InputItem addWork={addWork} />
        <hr />
        <TodoList
          radioValue={radioValue}
          works={works}
          removeWork={removeWork}
          updateItem={updateItem}
          setRadioValue={setRadioValue}
        />
      </Layout>
      {toastShow ? <Toast type={toastType} setToastShow={setToastShow} /> : ""}
    </>
  );
}

export default App;
