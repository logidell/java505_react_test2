import React from "react";

const styles={
    wrapper : {
        margin : 8,
        padding :8,
        display:"flax",
        flexDirection : "row",
        border : "1px solid gray",
        borderRadius : 16
    },
    messageText :{
        color:'black',
        fontSize:16
    }

}

//react의 Component 클래스를 상속받아 class Components로 사용한다.
class Notification extends React.Component {
    constructor(props) {
        super(props);

        //현재 컴포넌트에서 사용하는 상태값이 없다.
        this.state={};

    }

    render() {
        return (
                <div style={styles.wrapper}>
                    <span style={styles.messageText}>{this.props.message}</span>
                </div>
        );
    }
}

export default Notification;