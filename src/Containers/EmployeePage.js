import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import EmployeeTable from '../Components/EmployeeTable';
import EmployeeForm from '../Components/EmployeeForm';
import { bulkDeleteEmployees, deleteEmployee } from '../redux/actions/employeeActions';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const dispatch = useDispatch();

  const handleAddEmployeeClick = () => {
    setEditingEmployee(null);
    setShowForm(true);
  };

  const handleEditEmployeeClick = (employee) => {
    setEditingEmployee(employee);
    setShowForm(true);
  };

  const handleBulkDelete = () => {
    dispatch(bulkDeleteEmployees(selectedEmployees));
    setSelectedEmployees([]);
  };

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };
  return (
    <div className="container">
      <h1 className="my-4" style={{color:"white",backgroundColor:"grey",padding:"10px"}}>Manage Employees</h1>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary me-2" onClick={handleAddEmployeeClick}>+ Add New Employee</button>
        <button className="btn btn-danger" onClick={handleBulkDelete}>- Bulk Delete</button>
      </div>
      <EmployeeTable
        onEditEmployee={handleEditEmployeeClick} 
        selectedEmployees={selectedEmployees}
        setSelectedEmployees={setSelectedEmployees}
        onDelete={handleDelete} 
      />
      {showForm && (
        <EmployeeForm
          editingEmployee={editingEmployee}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
};

export default EmployeePage;