import React, {Component} from 'react';
import './Lmenu.css';
//This is a simple sorting and adding menu that will be included
export default class ListMenu extends Component {
  render() {
    localStorage.getItem('user')
    return (

      <div><br/>
        <input type='search' placeholder='Search' onChange={(e) => this.props.search(e)} />
<span className="btn-group" role="group"><button type="button" className="btn btn-light btn-sm" onClick={() => this.props.sort()}>Sort</button>
        <button type="button" className="btn btn-success btn-sm"  onClick={() => this.props.addTrigger(null)}>Add</button></span>
        
     
      </div>
    );
  }
}
