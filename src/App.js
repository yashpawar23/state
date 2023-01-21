
import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  state = {
    Name : "",
    Department : "",
    Rating : "",
    employee:[]
  }
  


  change = (data)=>{
      this.setState({[data.target.name] : data.target.value});
       console.log(this.state)
  }

  submitHandler = (data)=>{
    data.preventDefault();
    console.log("click event")
    const empObj = {
      Name:this.state.Name,
      Department : this.state.Department,
      Rating: this.state.Rating
    }
    const arr= this.state.employee;
    arr.push(empObj);
    this.setState({employee : arr})
  }
  render() {
    return (
      <div className='main-div'> <h1 className='heading'>EMPOYEE FEEDBACK FORM</h1>
        {
          <form className='form'>
            <label>Name :</label>
            <input type="text" name='Name' className='input-element' value={this.state.Name} onChange={this.change}></input>
            <br></br>
            <label>Department :</label>
            <input type="text"name='Department' className='input-element' value={this.state.Department}></input>
            <br></br>
            <label>Rating :</label>
            <input type="number" name='Rating'className='input-element' value={this.state.Rating}></input>
            <br></br>
            <button className='submit-btn' onClick={this.submitHandler} >Click</button>
            
          </form>
        }
         <div className='flex'>
          {this.state.employee.map((value,index)=>{
            return(
              <div className='box'> Name: {value.Name} | Department: {value.Department} | Rating:{value.Rating}</div>
            )

          })}
        </div>
      </div>
    )
  }
}
