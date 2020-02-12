import React, {Component} from 'react';



export default class ListItems extends Component {
  render() {

    return (

	<div>
<hr/>
	<ul className='list-group'>
    			<li className='list-group-item text-center'>{this.props.first}</li>
				<li className='list-group-item text-center'>{this.props.last}</li>
    			<li className='list-group-item text-center'>{this.props.phone}</li>
				<li className='list-group-item text-center'>{this.props.email}</li>
    			<div className="btn-group" role="group">
  <button type="button" className="btn btn-primary" onClick={() => this.props.editTrigger(this.props.id)}>Edit</button>
  <button type="button" className="btn btn-secondary" onClick={() => this.props.delete(this.props.id)}>Delete</button>
</div>
    		</ul>

		<br/>
		</div>	

	
    		
    );
  }
}
