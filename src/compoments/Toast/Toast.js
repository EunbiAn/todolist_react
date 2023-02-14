import React, { useState, useEffect } from 'react';

function Toast({type,setToastShow}) {

    useEffect(() => {
        let timer = setTimeout(() => {
            setToastShow(false);
        }, 4000);

        return () => { clearTimeout(timer) }
    }, []);

    // 타입에 따른 텍스트 반환
    function typeText(){
        let text;
        switch(type){
            case 'add' : text = '할 일이 추가되었습니다 :D'; break;
            case 'remove' : text = '할 일이 삭제되었습니다 :('; break;
        }
        return text;
    }

    return (
        <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <strong className="me-auto">변경 알림</strong>
          <button type="button" class="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close"
            onClick={(e)=>{setToastShow(false);}}>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div class="toast-body">
            {typeText()}
        </div>
      </div>
    )
}

export default Toast;