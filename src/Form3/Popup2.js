// Popup2.js

import React, { Component } from 'react';
import './Popup2.css';

class Popup2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [{ id: 1, roleName: '' }],
      nextId: 2,
      endUserName: '',
      field2: '',
      field3: '',
      field4: '',
      error: '',
    };
  }

  handleAddRow = () => {
    this.setState((prevState) => ({
      rows: [...prevState.rows, { id: prevState.nextId, roleName: '' }],
      nextId: prevState.nextId + 1,
    }));
  };

  handleRoleChange = (index, event) => {
    const newRows = [...this.state.rows];
    newRows[index].roleName = event.target.value;
    this.setState({ rows: newRows });
  };

  handleRemoveRow = (index) => {
    const newRows = [...this.state.rows];
    newRows.splice(index, 1);
    this.setState({ rows: newRows });
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Check for empty fields
    const { endUserName, field2, field3, field4 } = this.state;
    if (!endUserName || !field2 || !field3 || !field4) {
      this.setState({ error: 'Please fill out all fields.' });
      return;
    }

    // Log content to console
    console.log('Basic Details:');
    console.log('End User Name:', this.state.endUserName);
    console.log('Field-2:', this.state.field2);
    console.log('Field-3:', this.state.field3);
    console.log('Field-4:', this.state.field4);

    console.log('Role User Details:');
    this.state.rows.forEach((row) => {
      console.log(`ID: ${row.id}, Role Name: ${row.roleName}`);
    });

    // Clear error if any
    this.setState({ error: '' });
  };

  render() {
    const { closePopup } = this.props;

    return (
      <div className="popup2">
        <div className="popup-inner">
          <button className="close-btn" onClick={closePopup}>
            Close
          </button>
          <form className="form-container" onSubmit={this.handleSubmit}>
            <div className="basic-details">
              <h3>Basic Details</h3>
              <div className="form-row">
                <label>End User Name:</label>
                <input
                  type="text"
                  name="endUserName"
                  value={this.state.endUserName}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Field-2:</label>
                <input
                  type="text"
                  name="field2"
                  value={this.state.field2}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Field-3:</label>
                <input
                  type="text"
                  name="field3"
                  value={this.state.field3}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Field-4:</label>
                <input
                  type="text"
                  name="field4"
                  value={this.state.field4}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="role-user-details">
              <h3>Role User Details</h3>
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Role Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((row, index) => (
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>
                        <select
                          value={row.roleName}
                          onChange={(e) => this.handleRoleChange(index, e)}
                        >
                          <option value="">Select Role</option>
                          <option value="Role1">Senior Project Manag</option>
                          <option value="Role2">Project Manager</option>
                          <option value="Role3">Branch Manager</option>
                          
                        </select>
                      </td>
                      <td>
                        <button
                          type="button"
                          onClick={() => this.handleRemoveRow(index)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button type="button" onClick={this.handleAddRow}>
                Add Role
              </button>
            </div>

            {this.state.error && <p className="error">{this.state.error}</p>}

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Popup2;
