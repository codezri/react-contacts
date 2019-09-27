import React, {Component} from 'react';
import Contacts from './components/contacts';
import People   from './components/People';
import Persons   from './components/Persons';

class App extends Component {

    state = {
        contacts: []
    };

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }

    render() {
        const { contacts } = this.state;
        return (
            <div>
              <Contacts contacts={contacts} />
              <Persons/>
              <People/>
            </div>
        )
    }
}

export default App;
