import React, { Component } from 'react'

class LTTProductList extends Component {
  render() {
    let {renderProducts} = this.props;
    console.log("Products:", renderProducts);
    let fnStatus = (param) => {
      if(param===1) {
        return 'Active'
      } 
      return 'NonActive'
    }

    let elementProduct = renderProducts.map((item,index)=> {
        return(
            <>
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    {/* <td>{item.status==1?'Active':"NonActive"}</td> */}
                    <td>
                      {fnStatus(item.status)}
                    </td>
                </tr>
            </>
        )
    })
    return (
      <div>
        <h2>Danh Sach San Pham</h2>
        <table className='table table-bordered'>
            <thead>
                <th>ID</th>
                <th>Title</th>
                <th>status</th>
            </thead>
            <tbody>
               {elementProduct}
            </tbody>
        </table>
      </div>
    )
  }
}

export default LTTProductList;