import React, { Component } from 'react';

class LTT_EventForm1 extends Component {

    // Ham xu ly su kien
    eventHandleClick1 = ()=>{
        alert("event handle 1");
    }
    eventHandleClick2(){
        alert("Event Click 2")
    }

    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Event handle</h2>
                {/* <button onClick={this.eventHandleClick1()}>Click 1</button> */}
                {/* Gọi hàm xử lý khi click  */}
                <button onClick={this.eventHandleClick2}>Click 2</button>
            </div>
        );
    }
}

export default LTT_EventForm1;