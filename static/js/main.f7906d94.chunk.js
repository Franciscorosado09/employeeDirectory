(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(12),r=n.n(c),s=n(13),o=n(14),l=n(15),i=n(18),m=n(17),u=(n(23),n(0));var h=function(e){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"img-container",children:Object(u.jsx)("img",{alt:e.name,src:e.image})}),Object(u.jsx)("div",{className:"content",children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"Full Name:"})," ",e.name," ",e.lastname," ",Object(u.jsx)("strong",{children:"Age:"})," ",e.age]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"Email:"})," ",e.email]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"Location:"})," ",e.location,", ",e.state]})]})}),Object(u.jsx)("span",{onClick:function(){return e.removeEmployee(e.key)},className:"remove",children:"\ud835\ude05"})]})};n(25);var j=function(e){return Object(u.jsx)("div",{className:"wrapper",children:e.children})};n(26);var d=function(e){return Object(u.jsx)("h1",{className:"title",children:e.children})},b=n(16),p=n.n(b),f={getEmployees:function(){return p.a.get("https://randomuser.me/api/?results=100&nat=US")},monkey:"bananas"};n(45);var y=function(e){return Object(u.jsx)("form",{children:Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(u.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For an Employee",id:"search"}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary",children:"Search"})]})})},g=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={employees:[],result:{},search:""},e.fetchEmployees=function(){console.log("I am working"),f.getEmployees().then((function(t){return e.setState({employees:t.data.results})})).catch((function(e){return console.log(e)}))},e.removeEmployee=function(t){var n=e.state.employees.filter((function(e){return e.id!==t.value}));e.setState({employees:n})},e.searchEmployee=function(t){f.getEmployees(t).then((function(t){return e.setState({result:t.data})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var n=t.target.value,a=t.target.name;e.setState(Object(s.a)({},a,n))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchEmployee(e.state.search)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.fetchEmployees()}},{key:"render",value:function(){var e=this;return Object(u.jsxs)(j,{children:[Object(u.jsx)(d,{children:"Employees List"}),Object(u.jsx)(y,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),this.state.employees.map((function(t){return Object(u.jsx)(h,{removeEmployee:e.removeEmployee,id:t.id.name,name:t.name.first,lastname:t.name.last,dob:t.dob.date,age:t.dob.age,image:t.picture.large,email:t.email,location:t.location.city,state:t.location.state},t.id.value)}))]})}}]),n}(a.Component);n(46);r.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.f7906d94.chunk.js.map