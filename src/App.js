import React from 'react';
import './App.css'; // Assuming you have an App.css for styling
import Popup from './Form1/Popup.js';
import Popup1 from './Form2/Popup1.js';
import Popup2 from './Form3/Popup2.js'; // Import Popup2

class App extends React.Component {
    constructor() {
        super();
        this.state = { 
            showPopup1: false,
            showPopup2: false, 
            showPopup3: false
        };
    }

    togglePopup1 = () => {
        this.setState({ showPopup1: !this.state.showPopup1 });
    };

    togglePopup2 = () => {
        this.setState({ showPopup2: !this.state.showPopup2 });
    };

    togglePopup3 = () => {
        this.setState({ showPopup3: !this.state.showPopup3 });
    };

    render() {
        return (
            <div className="App">
                <div className="button-container">
                    <button onClick={this.togglePopup1}>Form1</button>
                    <button onClick={this.togglePopup2}>Form2</button>
                    <button onClick={this.togglePopup3}>Form3</button>
                </div>

                {this.state.showPopup1 && <Popup closePopup={this.togglePopup1} />}
                {this.state.showPopup2 && <Popup1 closePopup={this.togglePopup2} />}
                {this.state.showPopup3 && <Popup2 closePopup={this.togglePopup3} />}

            </div>
        );
    }
}

export default App;
