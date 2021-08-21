
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
export default class student extends Component {

    state={
        student:[],
        loading:true,
    }
    async componentDidMount(){
      const res = await axios.get('http://127.0.0.1:8000/api/students'); 
       //console.log(res);
      if(res.data.status===200){
       // console.log(res.data.message);
        this.setState({
          students:res.data.student,
          loading:false,
        });
    }
    }

    deleteStudent=async(e,id)=>{
        const thidClickedFunda=e.currentTarget;
        thidClickedFunda.innerText="deleting";
        const res = await axios.delete(`http://127.0.0.1:8000/api/delete-student/${id}`); 
        if(res.data.status===200){
            thidClickedFunda.closest("tr").remove();
             console.log(res.data.message);
             
            
         }
    }
    
    handleOnChange=(e)=>{
       this.setState({
           student:e.target.value
       },()=>{
           console.log(this.state.student);
       })
    }
    


    render() {
       var Students_HTMLTable = "";

      if(this.state.loading){
          Students_HTMLTable = <tr><td colSpan="6"><h2>loading..</h2></td></tr>
      }
      else{
        Students_HTMLTable=
        this.state.students.map((item)=>{
            return(
              <tr key={item.id}>
              <td >{item.id}</td>
              <td >{item.name}</td>
              <td >{item.course}</td>
              <td >{item.phone}</td>
              <td>
              <Link to={`edit-student/${item.id}`} className="btn btn-success btn-sm ">Edit</Link>
             
              </td>
             
              <td>
                  <button type="button" onClick={(e)=>this.deleteStudent(e,item.id)}  className="btn btn-danger btn-sm ">Delete</button>
              </td>
              </tr>
        );
        });
      }
        return (
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                         <h1>
                             Product Data

                             <Link to={'add-student'} className="btn btn-primary btn-sm float-end">Add </Link>
                             <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                            
                         </h1>
                       
                        </div>
                         
                        <div className="card-body">
                           <table className="table table-bordered table-striped">
                               <thead>
                                   <tr>
                                      <th>ID</th>
                                      <th>Name</th>
                                      <th>Quantity</th>
                                      <th>Price</th>
                                      <th>Edit</th>
                                      <th>Delete</th>
                                      
                                   </tr>
                               </thead>
                               <tbody>
                              { Students_HTMLTable}
                               </tbody>
                           </table>
                        </div>
                    </div>

                </div>
                </div>
                
            </div>
        )
    }
}