import React, {Component} from 'react';
import './Lmenu.css';
//This is a simple sorting and adding menu that will be included
export default class ListMenu extends Component {
  render() {
    localStorage.getItem('user')
    return (
      <div className='list-menu'>
        <input type='text' placeholder='Search' onChange={(e) => this.props.search(e)} />
        <div>
        	<div className='list-menu-button' onClick={() => this.props.sort()}>Sort</div>
        	<div className='list-menu-button' onClick={() => this.props.addTrigger(null)}>Add</div>
        </div>
      </div>
    );
  }
}
