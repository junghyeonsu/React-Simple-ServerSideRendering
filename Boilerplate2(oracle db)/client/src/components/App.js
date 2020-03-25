import React from 'react';

class App extends React.Component {
  state = {
    name : [],
  }

  componentDidMount(){
    this.callAPI()
      .then(res => this.setState({name : res}))
      .catch(err => console.log(err));
  }

  callAPI = async() => {
     const response = await fetch('/dbTestSelect');
     const body = response.json();
     console.log(body);
     return body;
  }
  
  render(){
    return(
      <div>
        {this.state.name ? this.state.name.map(data => {
          return (
            <div key={data[0]}>{data[1]}</div>
          ); 
        }) : ''}
      </div>
      );
    }
}

export default App;