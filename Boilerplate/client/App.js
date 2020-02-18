import React from 'react';

class App extends React.Component {
  state = {
    name : "",
    database : "",
  }

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({name : res}))
      .catch(err => console.log(err));

    this.callApi2()
      .then(res => this.setState({database : res}))
      .catch(err => console.log(err));  
  }

  callApi = async () => {
    const response = await fetch('/api/name');
    const body = await response.json();
    return body;
  }

  callApi2 = async () => {
    const response = await fetch('/show');
    const body = await response.json();
    return body;
  }

  onClickBtn = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        {this.state.name ? this.state.name.map(person => {
          return (
            <div>{person.name}</div>  
          )
        }) : ""}

        {this.state.database.user ? this.state.database.user.map( (user) => {
          return (
            <div>
            <div> {user.id} </div>
            <div> {user.register_date} </div>
            </div>
          )
        })
         : ""}

         <form method="post" action="/send">
          <input name="data"/>
          <button>제출</button>
         </form>

      </div>
    );
  }
}

export default App;
