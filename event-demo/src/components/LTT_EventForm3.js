import React, { Component } from 'react';
// Xu ly su kien voi props, state
class TVC_EventForm3 extends Component {
    constructor(props){
        super(props);
        // Tao doi tuong du lieu thong qua state
        this.state = {
            name:"Le Tuan Tinh",
            job:"Dev soft"
        }
    }

    // ham xu ly su kien
    handleChangeName = (ev)=>{
        this.setState({
            name:"K22CNT1-ReactJs"
        })
    }
    handleChangeJob=()=>{
        this.setState({
            job:"Công nghệ phần mềm",
        })
    }
    render() {
        return (
            <div className='alert alert-primary'>
                <h2>Thay đổi dữ liệu trong state</h2>
                <p>Dữ liệu:{this.state.name} - {this.state.job}</p>
                <button onClick={this.handleChangeName}>Thay đổi name</button>
                <button onClick={this.handleChangeJob}>Thay đổi job</button>
            </div>
        );
    }
}

export default TVC_EventForm3;