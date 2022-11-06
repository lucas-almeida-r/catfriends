import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }
  
  render () {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return !users.length ?
      <h1 className='tc'>Loading...</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>CatFriends</h1>
          <SearchBox onSearchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList users={filteredUsers} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }

export default App;
