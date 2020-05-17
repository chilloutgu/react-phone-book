import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component {

  id = 2;

  state = {
    information: [
      {
        id: 0,
        name: '김동구',
        phone: '010-7346-1206'
      },
      {
        id: 1,
        name: '이재혁',
        phone: '010-8560-7007'
      }
    ]
  }

  handleCreate = (data) => {

    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })

    console.log(data)
  }

  render() {

    const { information } = this.state;

    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        {JSON.stringify(information)}
      </div>
    )
  }
}

export default App;