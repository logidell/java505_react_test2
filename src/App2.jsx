import React from "react";


//class형 컴포넌트
//class component 는 React.Component 를 상속받아 사용한다.
class App2 extends React.Component {
    //state는 현 컴포넌트에서 사용하는 상태 값이다.
    //props는 데이터를 전달받기 위해 부모 component 에서 전달되는 값이나 state는 현 컴포넌트에서만 사용되는 값
    // 수정이 가능하다.
    //state 값이 변경되는 react는 화면을 재렌더링(f5) 한다.
    //state의 값을 직접적으로 변경할 수는 없다. setState 함수를 사용하여 값을 변경시킨다.

    // react의 생명주기
    state = {
        count: 0,

    };
    plus = () => {
        this.setState({count: this.state.count + 1});
        console.log("plus")
    }
    minus = () => {
        this.setState({count: this.state.count - 1});
        console.log("minus");
    }

    //render() 는 class component에서 화면을 렌더링하기 위한 메소드
    //render는 함수 컴포넌트와 사용방법이 동일하다.
    render() {
        return (
                <div>
                    <h1> Class Type App2 Component</h1>
                    <h3> click count : {this.state.count}</h3>
                    <div>
                        <button onClick={this.plus}> Plus</button>
                        <button onClick={this.minus}> Minus</button>
                    </div>
                </div>
        );
    }

    //Class Component에서만 사용할 수 있다.
    //componentDidMount , componentDidUpdate ,componentWillUnmount React의 생명주기에 관련되어 있는 이벤트 함수
    //componentDidMount : 해당 컴포넌트가 DOM에 추가 된 후 동작하는 이벤트
    //componentDidUpdate : 해당 컴포넌트의 데이터가 변경된 후 동작하는 이벤트
    //componentWillUnmount : 해당 컴포넌트가 더 이상 사용되지 않으 삭제된 후 동작하는 이벤트

    //클래스 컴포넌트에서만 사용할 수 있다.
    // 함수 컴포넌트에서는 해당 이벤트 함수들을 사용할 수 없음

    //함수 컴포넌트에서 해당 이벤트 함수들을 하용하기 위ㅐㅎ hooks 라는 기능을 추가하여 해당 이벤트 구현


    constructor(props) {
        super(props);
        console.log("생성자 실행")
    }
    componentDidMount() {
        console.log("Component 생성 완료")
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component updated")
    }
    componentWillUnmount() {
        // console.log('component 제거 완료 ')
    }
}

export default App2;