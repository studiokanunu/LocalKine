import React, {Component} from 'react';
import './Editpopup.css';

export default class Edit_popup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: '',
      last: '',
      phone: '',
      email:''
    };
  }

  edit_data(e) {
    e.preventDefault();

    const user_data = {
      first: this.state.first,
      last: this.state.last,
      phone: this.state.phone,
      email: this.state.email,
      id: this.props.edit_id
    };

    this.props.edit(user_data);
  }

  handleFirstChange(e) {
    this.setState({
      first: e.target.value
    });
  }
  handleLastChange(e) {
    this.setState({
      last: e.target.value
    });
  }

  handlePhoneChange(e) {
    this.setState({
      phone: e.target.value
    });
  }
  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  render() {
    let popup_class = '';

    if (this.props.visible === true) {
      popup_class = 'list-popup active';
    }
    else {
      popup_class = 'list-popup';
    }

    return (
      <div className={popup_class}>
        <form>
          <input type='text' className="form-control" placeholder='First' name='user-first' value={this.state.first} onChange={(e) => this.handleFirstChange(e)} />
          <input type='text' className="form-control" placeholder='First' name='user-last' value={this.state.last} onChange={(e) => this.handleLastChange(e)} />
          <input type='tel' className="form-control" placeholder='Phone' name='user-phone' value={this.state.phone} onChange={(e) => this.handlePhoneChange(e)} />
          <input type='email'  className="form-control" placeholder='Email' name='user-email' value={this.state.email} onChange={(e) => this.handleEmailChange(e)} />
          
          <button className="btn btn-success btn-sm" onClick={(e) => this.edit_data(e)}>Submit</button>
        </form>
      </div>
    );
  }
}
