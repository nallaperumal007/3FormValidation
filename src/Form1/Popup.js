import React from 'react';
import './Popup.css';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            microservices: [
                { id: 1, name: 'Contact Details', checked: false },
                { id: 2, name: 'Tag Value Mapping', checked: false },
                { id: 3, name: 'Microservice 3', checked: false },
                { id: 4, name: 'Microservice 4', checked: false },
                { id: 5, name: 'Microservice n', checked: false }
            ],
            formData: {
                tenantName: '',
                fields2: '',
                fields3: '',
                fields4: ''
            },
            formErrors: {
                tenantName: '',
                fields2: '',
                fields3: '',
                fields4: ''
            }
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                [name]: value
            }
        }));
        // Clear error message if field is filled
        this.validateField(name, value);
    };

    validateField(fieldName, value) {
        let formErrors = { ...this.state.formErrors };

        switch (fieldName) {
            case 'tenantName':
                formErrors.tenantName = value.trim() === '' ? 'Please enter Tenant Name' : '';
                break;
            case 'fields2':
                formErrors.fields2 = value.trim() === '' ? 'Please enter Fields2' : '';
                break;
            case 'fields3':
                // You can add additional validation rules as needed
                formErrors.fields3 = '';
                break;
            case 'fields4':
                // Example of required field with custom message
                formErrors.fields4 = value.trim() === '' ? 'Please enter Fields4' : '';
                break;
            default:
                break;
        }

        this.setState({ formErrors });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // Check for empty fields
        const { tenantName, fields2, fields4 } = this.state.formData;
        if (tenantName.trim() === '' || fields2.trim() === '' || fields4.trim() === '') {
            alert('Please fill out all required fields.');
            return;
        }

        // Handle form submission logic here if all fields are valid
        console.log('Form is valid. Submitting...');
    };

    handleCheckboxChange = (index) => {
        const microservices = [...this.state.microservices];
        microservices[index].checked = !microservices[index].checked;
        this.setState({ microservices }, () => {
            if (microservices[index].checked) {
                this.fillStartDate(index);
            } else {
                this.fillEndDate(index);
            }
        });
    };

    fillStartDate = (index) => {
        const currentDate = new Date().toLocaleDateString('en-CA');
        const startDateInputs = document.querySelectorAll(`.microservices input[type="text"][data-start-date="${index}"]`);
        startDateInputs.forEach(input => (input.value = currentDate));
    };

    fillEndDate = (index) => {
        const currentDate = new Date().toLocaleDateString('en-CA');
        const endDateInputs = document.querySelectorAll(`.microservices input[type="text"][data-end-date="${index}"]`);
        endDateInputs.forEach(input => (input.value = currentDate));
    };

    render() {
        const { formErrors } = this.state;

        return (
            <div className="popup">
                <div className="popup-inner">
                    <button className="close-btn" onClick={this.props.closePopup}>
                        Close
                    </button>
                    <div className="form-container">
                        <div className="basic-details">
                            <h3>Basic Details</h3>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Tenant Name*:
                                    <input
                                        type="text"
                                        name="tenantName"
                                        onChange={this.handleInputChange}
                                        value={this.state.formData.tenantName}
                                    />
                                    {formErrors.tenantName.length > 0 && (
                                        <span className="error">{formErrors.tenantName}</span>
                                    )}
                                </label>
                                <label>
                                    Fields2*:
                                    <input
                                        type="text"
                                        name="fields2"
                                        onChange={this.handleInputChange}
                                        value={this.state.formData.fields2}
                                    />
                                    {formErrors.fields2.length > 0 && (
                                        <span className="error">{formErrors.fields2}</span>
                                    )}
                                </label>
                                <label>
                                    Fields3:
                                    <input
                                        type="text"
                                        name="fields3"
                                        onChange={this.handleInputChange}
                                        value={this.state.formData.fields3}
                                    />
                                    {formErrors.fields3.length > 0 && (
                                        <span className="error">{formErrors.fields3}</span>
                                    )}
                                </label>
                                <label>
                                    Fields4*:
                                    <input
                                        type="text"
                                        name="fields4"
                                        onChange={this.handleInputChange}
                                        value={this.state.formData.fields4}
                                    />
                                    {formErrors.fields4.length > 0 && (
                                        <span className="error">{formErrors.fields4}</span>
                                    )}
                                </label>
                                <div className="microservices">
                                    <h3>Microservices</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Microservice</th>
                                                <th>Select</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.microservices.map((service, index) => (
                                                <tr key={service.id}>
                                                    <td>{service.id}</td>
                                                    <td>{service.name}</td>
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            checked={service.checked}
                                                            onChange={() => this.handleCheckboxChange(index)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            placeholder="DD-MM-YYYY"
                                                            data-start-date={index}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            placeholder="DD-MM-YYYY"
                                                            data-end-date={index}
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;
