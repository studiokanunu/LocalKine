import React, {Component} from 'react';
import './Litem.css';

export default class ListItems extends Component {
  render() {

    return (
    		<li className='list-item'>
    			<div className='list-item-name'>{this.props.name}</div>
    			<div className='list-item-phone'>{this.props.phone}</div>
    			<div className='list-item-buttons'>
    				<div className='list-item-buttons-edit' onClick={() => this.props.editTrigger(this.props.id)}>Edit</div>
    				<div className='list-item-buttons-delete' onClick={() => this.props.delete(this.props.id)}>Delete</div>
    			</div>
    		</li>
    );
  }
}
