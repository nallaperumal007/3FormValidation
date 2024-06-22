// Summary.js
import React from 'react';

const Summary = ({ formData, microservices }) => {
    return (
        <div>
            <h2>Form Data Summary</h2>

            {/* Basic Details */}
            <div>
                <h3>Basic Details</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Field Name</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(formData).map((key, index) => (
                            <tr key={index}>
                                <td>{key}</td>
                                <td>{formData[key]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Microservices */}
            <div>
                <h3>Microservices</h3>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Microservice Name</th>
                            <th>Selected</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {microservices.map((service, index) => (
                            <tr key={index}>
                                <td>{service.id}</td>
                                <td>{service.name}</td>
                                <td>{service.checked ? 'Yes' : 'No'}</td>
                                <td>{service.startDate}</td>
                                <td>{service.endDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Summary;
