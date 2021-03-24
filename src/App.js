import logo from './logo.svg';
import './App.css';
import Form from './Form.js'
import UserList from './UserList.js'
import {useEffect, useState} from 'react';



function App() {

  const [usersState, setUsersState] = useState({
    users: []
  });
  
  useEffect(() => {
    const timer = setInterval(() => {
      
        updateUsers();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  function updateUsers(){
    fetch('http://localhost:8080/users/')
        .then(response => response.json())
        .then(data => {
            setUsersState({users: data});
        })
  }

  return (
    <div className="App">
      <Form></Form>
      <UserList users={usersState.users}></UserList>
    </div>
  );
}

export default App;
