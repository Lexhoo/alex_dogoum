import React, {Component} from 'react';

class Email extends Component {
  constructor(props){
    super(props);
    this.state = {
    email: 'mon@email.com',
    password: "monPassw0rd",
    passwordbis:"",
    name: "James",
    lastname: "Bond",
    flash:""
    };
  }
  updateEmailField = (event) => {
    this.setState({
      [event.target.name]: event.target.value
  })
}

  handleSubmit = (event) => {
    const { flash, passwordbis, ...data} = this.state;
    fetch("/auth/signup",
{
    method:  'POST',
    headers:  new  Headers({
        'Content-Type':  'application/json'
    }),
    body: JSON.stringify(data),
})
.then(res  =>  res.json())
.then(
    res  =>  this.setState({"flash":  res.flash}),
    err  =>  this.setState({"flash":  err.flash})
)

    event.preventDefault()
    console.log(`a name was submitted : ${JSON.stringify(this.state, 1, 1)}`);
  } 

  render() {
    return(
    <div> 

      <h1>{JSON.stringify(this.state,1, 1)}</h1>
      <form action="POST" onSubmit={this.handleSubmit}>

      <input type="email" name="email" value={this.state.email} onChange={this.updateEmailField}/>
      <input type="password" name="password" value={this.state.password} onChange={this.updateEmailField}/>
      <input type="passwordbis" name="passwordbis" value={this.state.passwordbis} onChange={this.updateEmailField}/>
      <input type="string" name="name" value={this.state.name} onChange={this.updateEmailField}/>
      <input type="lastname" name="lastname" value={this.state.lastname} onChange={this.updateEmailField}/>
      <input type="submit" value="soumettre"/>
      </form>
    </div>

    );
  }
}

export default Email;