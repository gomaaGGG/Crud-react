import React, { Component, Fragment } from "react";

class Courselist extends Component {
  state = {
    isEdit: false,
    newValue: '',
  };

  rendercourse = () => {
    return (
      <li>
        <span> {this.props.details.name}</span>
        <button onClick={()=>{this.toggleform()}}>Edit course </button>
        <button
          onClick={() => {
            this.props.deletecourse(this.props.index);
          }}
        >
          Delete course
        </button>
      </li>
    );
  };
  // toggle form
  toggleform=()=>{
let isEdit=this.state.isEdit;
this.setState({
isEdit:!isEdit

})

  }

updatecourseitem= (e) =>{
e.preventDefault();
this.props.Editcourse(this.props.index,this.state.newValue);
this.toggleform();


  }

  renderformupdate = () => {
    return (
      <form onSubmit={this.updatecourseitem}>
        <input type="text" onChange={ (e)=>this.setState({newValue:e.target.value})} defaultValue={this.props.details.name}></input>
        <button  >Update course </button>
      </form>
    );
  };
  render() {
      let isEdit=this.state.isEdit;
    return <Fragment> {isEdit?(this.renderformupdate()):(this.rendercourse())}</Fragment>;
  }
}

export default Courselist;
