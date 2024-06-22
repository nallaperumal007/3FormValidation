import React from 'react';
import './Popup1.css';

class PopupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roleName: '',
            fields2: '',
            fields3: '',
            fields4: '',
            fieldErrors: {}  // To track errors for each field
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { roleName, fields2, fields3, fields4 } = this.state;
        const fieldErrors = {};
        let isValid = true;

        // Validate each field
        if (!roleName.trim()) {
            fieldErrors.roleName = 'Role Name is required.';
            isValid = false;
        }
        if (!fields2.trim()) {
            fieldErrors.fields2 = 'Fields2 is required.';
            isValid = false;
        }
        if (!fields3.trim()) {
            fieldErrors.fields3 = 'Fields3 is required.';
            isValid = false;
        }
        if (!fields4.trim()) {
            fieldErrors.fields4 = 'Fields4 is required.';
            isValid = false;
        }

        // Update state with errors
        this.setState({ fieldErrors });

        // If form is valid, proceed with submission
        if (isValid) {
            console.log('Form Values:', {
                roleName,
                fields2,
                fields3,
                fields4
            });
            // Additional logic: Submit form or close popup
            // this.props.closePopup(); // Uncomment if you want to close the popup after submission
        }
    }

    render() {
        const { fieldErrors } = this.state;

        return (
            <div className="popup">
                <div className="popup-inner">
                    <button className="close-btn" onClick={this.props.closePopup}>Close</button>
                    <div className="form-container">
                        <div className="basic-details">
                            <h3>Basic Details</h3>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Role Name*:
                                    <input type="text" name="roleName" value={this.state.roleName} onChange={this.handleInputChange} />
                                    {fieldErrors.roleName && <span className="error">{fieldErrors.roleName}</span>}
                                </label>
                                <label>
                                    Fields2*:
                                    <input type="text" name="fields2" value={this.state.fields2} onChange={this.handleInputChange} />
                                    {fieldErrors.fields2 && <span className="error">{fieldErrors.fields2}</span>}
                                </label>
                                <label>
                                    Fields3*:
                                    <input type="text" name="fields3" value={this.state.fields3} onChange={this.handleInputChange} />
                                    {fieldErrors.fields3 && <span className="error">{fieldErrors.fields3}</span>}
                                </label>
                                <label>
                                    Fields4*:
                                    <input type="text" name="fields4" value={this.state.fields4} onChange={this.handleInputChange} />
                                    {fieldErrors.fields4 && <span className="error">{fieldErrors.fields4}</span>}
                                </label>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                        <div className="microservices">
                            <h3>Microservices</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Microservice Name</th>
                                        <th>All</th>
                                        <th>View</th>
                                        <th>Create</th>
                                        <th>Update</th>
                                        <th>Export</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Contact Details</td>
                                        <td><input type="checkbox" /></td>
                                        <td><input type="checkbox" /></td>
                                        <td><input type="checkbox" /></td>
                                        <td><input type="checkbox" /></td>
                                        <td><input type="checkbox" /></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Tag Value Mapping</td>
                                        <td><input type="checkbox" /></td>
                                        <td><input type="checkbox" /></td>
                                        <td><input type="checkbox" /></td>
                                        <td><input type="checkbox" /></td>
                                        <td><input type="checkbox" /></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Microservice 3</td>
                                        <td><input type="checkbox" /></td>
                                        <td><input type="checkbox" /></td>
                                        <td><input type="checkbox" /></td>
                                        <td><input type="checkbox" /></td>
                                        <td><input type="checkbox" /></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Microservice 4</td>
                                        <td><input type="checkbox" /></td>
                                        <td><input type="checkbox" /></td>
                                        <td><input type="checkbox" /></td>
                                        <td><input type="checkbox" /></td>
                                        <td><input type="checkbox" /></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Microservice n</td>
                                        <td><input type="checkbox" /></td>
                                        <td><input type="checkbox" /></td>
                                        <td><input type="checkbox" /></td>
                                        <td><input type="checkbox" /></td>
                                        <td><input type="checkbox" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupForm;
