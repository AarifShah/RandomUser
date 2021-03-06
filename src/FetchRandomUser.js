import React, { Component } from 'react'

 class FetchRandomUser extends Component {
  state ={

    loading :true,
    person:null
  };
  async componentDidMount(){
const url="https://api.randomuser.me/";

const response= await fetch(url);
const data =await response.json();
this.setState({person: data.results[0],loading : false})
console.log(data.results)
  }
  
    render() {
    return (
      <div>
        {this.state.loading  || !this.state.person ? 
        (<div> loading...</div>
             ): (
            <div>
                <div>{this.state.person.name.first}</div>
                
            </div>
        )}
      </div>
    );
  }
}
export default FetchRandomUser