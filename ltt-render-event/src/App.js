import React, { Component } from 'react'
import LTTProductList from './components/LTTProductList';
import LTTProductAdd from './components/LTTProductAdd';

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        products : [
          { title: 'Le Tuan Tinh', id: 242004, status:1 },
          { title: 'Cabbage', id: 1, status:1 },
          { title: 'Garlic', id: 2, status:0 },
          { title: 'Apple', id: 3, status:0 },
          { title: 'Samsung', id: 4,status:1 },
        ]
      }
    }

    lttHandleSubmit = (param)=>{
      console.log("App",param);
      //them vao mang du lieu products
      let {products} = this.state;
      products.push(param);
      this.setState({
        products:products
      })
    }
  render() {
    return (
      <div class="container border mt-5">
          <h1>Le Tuan Tinh - Render Data - Event Form</h1>
          <hr/>
      <LTTProductList renderProducts = {this.state.products}/>
      <LTTProductAdd onSubmit = {this.lttHandleSubmit}/>
      </div>
    );
  }
}

export default App;