import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import API from "./utils/API";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    
    employees: []
  };



 
 componentDidMount(){
   console.log(API.monkey)
   this.fetchEmployees();
 }

  fetchEmployees = () => {
    console.log('I am working')
    API.getEmployees().then(res => this.setState({
      employees: res.data.results,
      
  }
  )).catch(err => console.log(err))


};


  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  // Map over this.state.employees and render a employeeCard component for each employee object
  render() {
    return (
      <Wrapper>
        <Title>Employees List</Title>
        {this.state.employees.map((employee) => (
       
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.id.name}
            key={employee.id.value}
            name={employee.name.first}
            lastname= {employee.name.last}
            dob= {employee.dob.date}
            age= {employee.dob.age}
            image={employee.picture.thumbnail}
            email={employee.email}
            location={employee.location.city}
            state={employee.location.state}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
