(this.webpackJsonpcrud_app=this.webpackJsonpcrud_app||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(7),o=n.n(u),c=(n(13),n(1)),s=n(2),i=n(4),l=n(3),d=n(5),p=function(e){return r.a.createElement("form",{onSubmit:e.addcourse},r.a.createElement("input",{type:"text",onChange:e.updatefunction,value:e.cureent}),r.a.createElement("button",{type:"submit"}," ADD course"))},m=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,u=new Array(a),o=0;o<a;o++)u[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(u)))).state={isEdit:!1,newValue:""},n.rendercourse=function(){return r.a.createElement("li",null,r.a.createElement("span",null," ",n.props.details.name),r.a.createElement("button",{onClick:function(){n.toggleform()}},"Edit course "),r.a.createElement("button",{onClick:function(){n.props.deletecourse(n.props.index)}},"Delete course"))},n.toggleform=function(){var e=n.state.isEdit;n.setState({isEdit:!e})},n.updatecourseitem=function(e){e.preventDefault(),n.props.Editcourse(n.props.index,n.state.newValue),n.toggleform()},n.renderformupdate=function(){return r.a.createElement("form",{onSubmit:n.updatecourseitem},r.a.createElement("input",{type:"text",onChange:function(e){return n.setState({newValue:e.target.value})},defaultValue:n.props.details.name}),r.a.createElement("button",null,"Update course "))},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.isEdit;return r.a.createElement(a.Fragment,null," ",e?this.renderformupdate():this.rendercourse())}}]),t}(a.Component),f=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={courses:[{name:"html"},{name:"css"},{name:"jquery"}],cureent:""},n.updatefunction=function(e){n.setState({cureent:e.target.value})},n.addcourse=function(e){e.preventDefault();var t=n.state.cureent,a=n.state.courses;if(""===t)return!1;a.push({name:t}),n.setState({courses:a,cureent:""})},n.deletecourse=function(e){var t=n.state.courses;t.splice(e,1),n.setState({courses:t})},n.Editcourse=function(e,t){var a=n.state.courses;a[e].name=t,n.setState({courses:a})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.courses,n=t.length?t.map((function(t,n){return r.a.createElement(m,{details:t,key:n,index:n,deletecourse:e.deletecourse,Editcourse:e.Editcourse})})):r.a.createElement("span",null,"there no items to show");return r.a.createElement("section",{className:"App"},r.a.createElement("h2",null,"ADD Courses"),r.a.createElement(p,{updatefunction:this.updatefunction,addcourse:this.addcourse,cureent:this.state.cureent}),r.a.createElement("ul",null,n))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.5c429869.chunk.js.map