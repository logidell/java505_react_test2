import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from "./App2";
import NotificationList from "./mounts/NotificationList";
//import 시에 경로 명 반드시 다 적어줘야 한다.
// -> 화면이 되는 js, css 파일들은 경로를 모두 입력해야함. -> 직접 만든 것들

//내부적으로 작동하는 파일은 적지 않아도 됨. (사용하기 위해 설치한 라이브러리들)


const root = ReactDOM.createRoot(document.getElementById('potato'));
root.render(
        <React.StrictMode>
            <h1>++</h1>
            <NotificationList/>
            <h1>++</h1>
            <hr/>
            <h1>++</h1>
            <App2/>
            {/* jax 문법에서 화면을 렌더링 하기 위한 태그의 이름은 반드시 첫 글자가 대문자여야 한다.
            대문자로 사용하는 이유는 일반적으로 html 태그를 모두 소문자로 사용하기 때문에 일반 html 태그
            인지 jsx문법으로 생성된 태그인지 구분하기 위해 구분해 사용한다. */}
            <h1>++</h1>
            <br/>
            <hr/>
            <br/>
            <h1>++</h1>
            <App/>
            <h1>++</h1>
        </React.StrictMode>
);
