import React, { Component } from 'react'

export default class LTTProductAdd extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:0,
      title:'',
      status:0
    }
  }

  lttHandleChange = (event)=> {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]:value
    })
  }

  lttHandleSubmit = (ev)=>{
    ev.preventDefault();

    this.props.onSubmit(this.state);
  }
  render() {
    return (
      <div>
        <h2>Them moi san pham</h2>
        <form className='col-md-6'>
            <div className='input-group mb-3'>
                <span className='input-group-text' id='basic-addon1'>
                  ID
                </span>
                <input type='text' className='form-control' id='id' name='id' value={this.state.id} onChange={this.lttHandleChange} />
            </div>
            <div className='input-group mb-3'>
                <span className='input-group-text' id='basic-addon2'>
                  Title
                </span>
                <input type='text' className='form-control' name='title'  value={this.state.title} onChange={this.lttHandleChange}/>
            </div>
            <div className='input-group mb-3'>
                <span className='input-group-text' id='basic-addon4'>
                  Status
                </span>
                <input type='text' className='form-control' id='id' name='status' value={this.state.status} onChange={this.lttHandleChange}/>
            </div>
            <button className='btn btn-success' onClick={this.lttHandleSubmit}>Ghi lai</button>
        </form>
      </div>
    )
  }
}
