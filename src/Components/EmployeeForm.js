import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee, editEmployee } from '../redux/actions/employeeActions';

const EmployeeForm = ({ editingEmployee, setShowForm }) => {
  const [employee, setEmployee] = useState({
    id: null,
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  const [formData, setFormData] = useState({
    name: editingEmployee ? editingEmployee.name : '',
    email: editingEmployee ? editingEmployee.email : '',
    address: editingEmployee ? editingEmployee.address : '',
    phone: editingEmployee ? editingEmployee.phone : '',
  });
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (editingEmployee) {
      setEmployee(editingEmployee);
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.id) {
      dispatch(editEmployee(employee));
    } else {
      dispatch(addEmployee({ ...employee, id: Date.now() }));
    }
    setShowForm(false);
  };

  return (
    <div className="modal show d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{employee.id ? 'Edit Employee' : 'Add New Employee'}</h5>
            <button type="button" className="btn-close" onClick={() => setShowForm(false)}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input type="text" className="form-control" name="name" value={employee.name} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email" className="form-control" name="email" value={employee.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Address:</label>
                <input type="text" className="form-control" name="address" value={employee.address} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone:</label>
                <input type="text" className="form-control" name="phone" value={employee.phone} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary"  style={{marginRight:"10px"}}>{editingEmployee ? 'Update Employee' : 'Add Employee'}</button>
              <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;