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
            <div className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label htmlFor="type">
                            <strong>Type:</strong>
                            <select id="type" name="type" value={this.state.spark_type} onChange={this.handleInputChange}>
                                <option value="">Spark type</option>
                                <option value="url">Link</option>
                                <option value="question">Question</option>
                                <option value="statement">Statement</option>
                            </select>
                        </label>
                    </div>
                    
                    <div className="field">
                        <label htmlFor="title">
                            <strong>Title:</strong>
                            <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    
                    <div className="field">
                        <label htmlFor="url">
                            <strong>URL:</strong>
                            <input type="text" id="url" name="url" value={this.state.url} onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <p>Or</p>
                    <div className="field">
                        <label htmlFor="description">
                            <strong>Description:</strong>
                            <textarea type="text" id="description" name="description" value={this.state.description} onChange={this.handleInputChange}></textarea>
                        </label>
                    </div>

                    <div className="form-actions">
                        <button type="submit">Submit</button>
                    </div>
            </div>
        );
    };
};

export default connect(null, { createSpark })(SparkForm);
