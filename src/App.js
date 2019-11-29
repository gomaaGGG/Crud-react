import React, { Component } from "react";
import Courseform from "./components//Courseform";
import Courselist from "./components//courselist";

class App extends Component {
  state = {
    courses: [{ name: "html" }, { name: "css" }, { name: "jquery" }],
    cureent: ''
  };

  //update functiion to take any change in input

  updatefunction = e => {
    //console.log(e.target.value);
    this.setState({ cureent: e.target.value });
  };
  //add course
  addcourse = e => {
    e.preventDefault();
    //console.log("course added ")
    let cureent = this.state.cureent;
    let courses = this.state.courses;
    if (cureent==='')
    return false 
    else {
    courses.push({name : cureent});
    this.setState({ courses,cureent:'' }) }
    
  };

  //delete course 

deletecourse=(index)=>{
let courses=this.state.courses;
courses.splice(index,1);
this.setState({courses:courses})
  }

Editcourse =(index,value) =>{

let courses=this.state.courses;
let course=courses[index];
course['name']=value;

this.setState({courses})

  }

  render() {
    const courses = this.state.courses;
    const len=courses.length;
    const courselist = len?courses.map((course, index) => {
      return <Courselist details={course} key={index}  index={index} deletecourse={this.deletecourse}  Editcourse={this.Editcourse} />;
    }):(<span>there no items to show</span>);

    return (
      <section className="App">
        <h2>ADD Courses</h2>
        <Courseform
          updatefunction={this.updatefunction}
          addcourse={this.addcourse} cureent={this.state.cureent}
        />
        <ul>{courselist}</ul>
      </section>
    );
  }
}

export default App;
