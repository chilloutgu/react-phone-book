import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

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
    ],
    keyword: ''
  }

  handleCreate = (data) => {

    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })

    console.log(data)
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(info => info.id === id ? { ...info, ...data } : info)
    })
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  render() {

    const { information, keyword } = this.state;
    const filteredList = information.filter(info => info.name.indexOf(keyword) !== -1);

    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <p>
          <input value={keyword} placeholder="검색할 이름을 입력하세요" onChange={this.handleChange} />
        </p>
        <hr />
        <PhoneInfoList data={filteredList} onRemove={this.handleRemove} onUpdate={this.handleUpdate} />
      </div>
    )
  }
}

export default App;