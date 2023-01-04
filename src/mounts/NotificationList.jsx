import React from "react";
import Notification from "./Notification"


const reservedNotifications = [
    {id:1, message: '안녕하세요, 오늘 일정 알려드립니다. '},
    {id:2, message: '오후 수업 '},
    {id:3, message: '이제 쉬는쉬간 '},
];

//객체 정보를 저장하는 변수
//  setTimer : 1회용 타이머 지정된 시간 이후 1번 동작, 실행 시 타이머 정보 반환, 타이머 삭제 시
//clearTimeout() 을 사용해야 한다.
//  set Interval : 지정된 시간마다 동작하는 타이머 , 실행 시 타이머 정보 반환 , 타이머 삭제 시 clear Interval() 사용
let timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);


        //현 컴포넌트의 상태인 notifications 선언
        this.state = {
            // 빈 배열 타입인 state가 생성이 되었다.
            notifications: [],

        };

    }

    render() {
        return (
                <div>
                    {/*{*/}
                    {/*    // state의 notifications 배열을 가지고 화면을 그려준다*/}
                    {/*    // 배열의  기본값이 비어있기 때문에 화면에 아무것도 그리지 않는다.*/}
                    {/*    this.state.notification.map((item) => {*/}
                    {/*        return <Notification key={item.id} message={item.message}/>;*/}
                    {/*    })*/}
                    {/*}*/}

                    <Notification key={reservedNotifications[0].id} message={reservedNotifications[0].message} />
                    <Notification key={reservedNotifications[1].id} message={reservedNotifications[1].message} />
                    <Notification key={reservedNotifications[1].id} message={reservedNotifications[2].message} />
                </div>
        );
    }

// render() 함수 실행 후 동작
//     componentDidMount() {
//         //objcet 타입의 확장 표현식을 통해서 변수 notifications에 state가 가지고 있는 notification의 데이터를 대입
//         //
//         const {notifications} = this.state; // state의  notifications의 데이터가 비어있음
//         // == const notification = this.state.notifications;
//         // timer를 사용해 지정된 시간 마다 동작하도록 설정
//         timer = setInterval(() => {
//             if (notifications.length < reservedNotifications.length) {
//                 const index = notifications.length;
//
//                 //배열 notification에 데이터 추가
//                 notifications.push(reservedNotifications[index]);
//
//                 //state의 상태 수정
//                 this.setState({
//                     //this.state에 이쓴ㄴ notifications의 현재 componentDidMount 안에 있는 지역변수 notifications의 데이터 저장
//                     notifications: notifications,
//                 });
//             }
//             else {
//                 clearInterval(timer);
//             }
//         }, 2000)
//     }

    componentDidMount() {

        setTimeout(() =>{
            this.setState({
                Notifications :reservedNotifications,
            });
            console.log('데이터 추가 완료')
        },3000);

        console.log("마운트 완료")
    }

    componentDidUpdate() {
        console.log(' 상태 업데이트 ')
    }
}

export default NotificationList;