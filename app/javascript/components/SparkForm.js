import React from 'react';
import { connect } from 'react-redux';
import { createSpark } from '../actions';

class SparkForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                id: "",
                title: "",
                url: "",
            }
        };

    componentDidMount() {
        this.setState({
            ...this.props.spark
        })
    }

    handleInputChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.id === "") {
            this.props.createSpark(this.state)
        } else {
            console.log("problem!")
        }
    }

    render() {
        return (
            <div>
                <form className="sparkForm" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="title">
                            <strong>Title:</strong>
                            <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="url">
                            <strong>URL:</strong>
                            <input type="text" id="url" name="url" value={this.state.url} onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <div className="form-actions">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    };
};

export default connect(null, { createSpark })(SparkForm);
