import logo from './logo.svg';
import './App.css';
// import Potato from "./Potato";
import PropTypes from "prop-types";


//props 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 매개변수
//props는 읽기전용이기 때문에 변경이 될 수 없다.
//props 사용법
//컴포넌트 명 (props){
//  {props.부모가 전달한 키 이름 }
// }

//전개연산법으로 사용하기
//컴포넌트명({부모가 전달한 키 이름, ...}){
//      {키 이름1}, {키 이름2 }, ...
//      console.log({키 이름1});
// }

// 확장연산법 사용하기
//컴포넌트 명 (props){
//  const{키 이름, ...} = props;
//  console.log ({키 이름});
// }


//내부 사용은 state
function Food({name, pic, rating}) {
    // const some = props.somethig;
    // console.log(props)
    console.log(name)
    return (
            // <h3> - 감자 - {props.fav}</h3>
            <div>
                <h3> - 감자 - {name}</h3>
                <img src={pic}/>
                <h4>{rating}/5.0</h4>
            </div>
    );

}

const fList = [
    {
        id: 1,
        name: '죠르디',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuZM5LeaA-PJym1dEqimUWrXmamzIGI9xWhp-b4Vx1w&s",
        rating: 4
    },
    {
        id: 2,
        name: '피피미',
        image: "data:image/jpeg;base64,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",
        rating : 3
    }
]


function renderF(dish) {
    return <Food key={dish.id} name={dish.name} pic={dish.image} rating={dish.rating} />;
}

function App() {
    //이 곳은 일반적인 js 소스코드 부분

    // fList.map(function (dish, index, current ) {
    //     <Food name = {dish.name}/>
    // });
    //

    //화면을 생성하는 가상 DOM 부분  (화면 렌더링 부분)
    return (
            //부모 태그는 반드시 하나만 존재해야 하며 자식태그는 별 상관이 없다.
            //jsx 문법에서 class 키워드는 자바스크립트의 클래스키워드와 겹치기 때문에
            // 자바스크립트 클래스, css 선택자 class 구분을 위해 css 선택자 class를 classname으로 사용

            <div className="App">
                {/*SPA : Single Page Application 준말, index.html 이 페이지 하나만 존재하는 것.
                => 하나의 화면 구성 파일로 모든 화면을 구성하는 웹 페이지.
                스프링으로 만든 것 = 멀티 페이지.

                SPA는 frontend 에서 프레임워크를 사용해 하나의 화면에서 필요한 부분을 실시간으로 변경해
                웹을 표시한다.
                해당 화면을 구성하는 것이 컴포넌트.

                Multi page Application = > spring처럼 여러 페이지로 화면구성 전체 갈아끼움

                Single Page Application -> 한 구성 화면에 필요한 조각들을 끌어다가 갈아끼움.

                 */}

                {/*컴포넌트 = 리엑트에서 화면을 구성하는 요소. */}

                {/*<Food fav={"kimchi"} somethig = {true} papapapa={['hello',1,2,3,4,true]}/>*/}

                {/*{} : jsx 문법에서 {}데이터를 표현하는데 사용한다. 자바스크립트 연산식도 사용이 가능*/}


                {/*컴포넌트에 데이터 전달 시에는 반드시 중괄호로 */}

                {/*{fList.map(dish =>(<Food name={dish.name} pic={dish.image}/> ))}*/}
                {fList.map(dish => renderF(dish))}


                <div>
                    <header>
                        <h1> 리액트 사용하기</h1>
                        {/*<Movie/>*/}
                    </header>
                </div>
                <div>
                    <main>
                        <p>
                            호롤롤로
                        </p>
                    </main>
                </div>
                <div>
                    <footer>
                        ^&^
                    </footer>
                </div>
            </div>
    );
}

//매개변수로 사용되는 데이터를 체크하기 위해 사용하는 것
//매개변수의 이름까지 확인해준다.
//isRequired : 해당 부분이 반드시 필요하다는 의미. 없으면 오류 발생.
Food.propTypes = {
    name:PropTypes.string.isRequired,
    pic:PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired
    //    값이 들어오지 않으면 체크하라란 의미

//    -> 잘못 들어온 것을 콘솔에 띄워줌.
}


//함수 이름과 default 이름 맞춰줘야 함.
export default App;
