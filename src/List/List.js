import React, {Component} from 'react';
import ListItem from '../Litem/Litem.js';
import EditPopup from '../Editpopup/Editpopup.js';
import ListMenu from '../LMenu/LMenu.js';
import './List.css';
//This is calls back the stored browser data on refresh
var stored = JSON.parse(localStorage.getItem('item'));


/*var dummydata = [
  {
    first: 'Oleg',
    last:'Petrov',
    phone: '+38(067)8881111',
    email:'test@test.com',
    id: 0
  },
  {
    first: 'Bobby',
    last: 'Fisher',
    phone: '+1(062)7770663',
    email:'test@test.com',
    id: 1
  }
]; */

export default class List extends Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.sort = this.sort.bind(this);
    this.search = this.search.bind(this);
    this.PopupTrigger = this.PopupTrigger.bind(this);

    this.state = {
      users: stored,
      popup_visible: false,
      popup_edditing_id: null,
      search_term: ''
    };
  }

  delete(id) {
    let users_data = this.state.users;
    
    users_data = users_data.filter((user, index) => {
      if (user.id === id) {
        return false;
      }
      else {
        return user;
      }
    });

    this.setState({
      users: users_data
    });
  }
//simple sort, merely places users alpha by lastname, wasn't in the US, but I thought it might be handy
  sort() {
    let users = this.state.users;

    users.sort((a, b) => {
      if(a.last < b.last) return -1;
      if(a.last > b.last) return 1;
 return 0;
    }
    );

    this.setState({
      users: users
    });
  }

  edit(data) {
    let users_data = this.state.users;

    if (this.state.popup_edditing_id !== null) {
      if (data.first !== '') {
        users_data[data.id].first = data.first;
      }
      if (data.last !== '') {
        users_data[data.id].last = data.last;
      }
      if (data.phone !== '') {
        users_data[data.id].phone = data.phone;
      }
      if (data.email !== '') {
        users_data[data.id].email = data.email;
      }

      this.setState({
        popup_visible: true,
        popup_edditing_id: null,
        users: users_data
      });
    }
    else {
      let user_id = users_data.length;

      for (let i = 0; i < users_data.length; i++) {
        if (users_data[i].id === user_id) {
          user_id++;
          i = 0;
        }
      }

      let new_user = {
        first: data.first,
        last: data.last,
        phone: data.phone,
        email: data.email,
        id: user_id
      };

      users_data.push(new_user);

      this.setState({
        popup_visible: false,
        popup_edditing_id: null,
        users: users_data
      });
    }

  }

  PopupTrigger(index) {
    this.setState({
      popup_visible: true,
      popup_edditing_id: index
    });
  }

  search(e) {
    const search = e.target.value;

    this.setState({
      search_term: search
    });
  }

  render() {

    
    let users = this.state.users;

   

    users = users.map((user, index) => {
      if (user.last.toLowerCase().indexOf(this.state.search_term.toLowerCase()) === 0) {
        return user;
      }

      if (user.first.toLowerCase().indexOf(this.state.search_term.toLowerCase()) === 0) {
        return user;
      }
      else {
        return undefined;
      }
      
    });
  //This sets the data to LocalStorage
  localStorage.setItem('item', JSON.stringify(users));
    // remove undefinded elements
    users = users.filter(function( element ) {
      return element !== undefined;
    });

    const List_Items = users.map((user, index) => {
      return (
        <ListItem 
          key={user.id} 
          id={user.id} 
          first={user.first}
          last={user.last}  
          phone={user.phone} 
          email={user.email} 
          delete={this.delete} 
          editTrigger={this.PopupTrigger}
        />
      );
    });

    return (
      
    	<div>
        <ListMenu 
          search={this.search}
          sort={this.sort}
          addTrigger={this.PopupTrigger}
        />

        <ul className='list'>
          {List_Items}
        </ul>

        <EditPopup 
          edit_id={this.state.popup_edditing_id} 
          visible={this.state.popup_visible} 
          edit={this.edit} 
          add={this.add}
          // func={this.state.}
        />
      </div>
    );
  }
}
