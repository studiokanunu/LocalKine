import React from 'react';
import ReactDOM from 'react-dom';
import List from './List/List';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {

    return (
     

<div className="App container-fluid d-flex flex-column flex-fill align-items-center justify-content-center">
<p><span className="thin">Ultra</span><span className="thick">Thin</span><span className="thicker">Contacts</span><br/>An Exercise in Local'kine Storage</p>
   <List/>
      </div>
  


   
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);