import React from 'react';
import PropTypes from 'prop-types';

class SparkForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            spark: props.spark,
            errors: {},
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { spark } = this.state;
        const errors = this.validateSpark(spark);
        if (!this.isEmptyObject(errors)) {
            this.setState({ errors });
        } else {
            console.log(spark);
        }
    }

    validateSpark(spark) {
        const errors = {};

        // if (event.event_type === '') {
        //     errors.event_type = 'You must enter an event type';
        // }

        // if (event.event_date === '') {
        //     errors.event_date = 'You must enter a valid date';
        // }

        if (spark.title === '') {
            errors.title = 'You must enter a title';
        }

        if (spark.url === '') {
            errors.url = 'You must enter at least one url';
        }

        if (spark.text === '') {
            errors.text = 'You must enter at least some text';
        }

        console.log(spark);
        return errors;
    }

    isEmptyObject(obj) {
        return Object.keys(obj).length === 0;
    }

    handleInputChange(spark) {
        const { target } = spark;
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState(prevState => ({
            spark: {
                ...prevState.spark,
                [name]: value,
            },
        }));
    }

    renderErrors() {
        const { errors } = this.state;

        if (this.isEmptyObject(errors)) {
            return null;
        }

        return (
            <div className="errors">
                <h3>The following errors prohibited the spark from being saved:</h3>
                <ul>
                    {Object.values(errors).map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderErrors()}
                <form className="sparkForm" onSubmit={this.handleSubmit}>
                    {/* <div>
                        <label htmlFor="spark_type">
                            <strong>Type:</strong>
                            <input type="text" id="spark_type" name="spark_type" />
                        </label>
                    </div> */}
                    <div>
                        <label htmlFor="title">
                            <strong>Title:</strong>
                            <input type="text" id="title" name="title" onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="url">
                            <strong>URL:</strong>
                            <input type="text" id="url" name="url" onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <div>
                        <p>
                            or
                        </p>
                    </div>
                    <div>
                        <label htmlFor="text">
                            <strong>Text:</strong>
                            <textarea cols="30" rows="10" id="text" name="text" onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <div className="form-actions">
                        <button type="submit">Submit</button>
                    </div>
                    <div>
                        <p>
                            Leave url blank to submit a question for discussion. If there is no url, the text (if any) will appear at the top of the thread.
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

SparkForm.propTypes = {
    spark: PropTypes.shape(),
};

SparkForm.defaultProps = {
    spark: {
        // spark_type: '',
        // spark_date: '',
        title: '',
        url: '',
        text: '',
        // published: false,
    },
};

export default SparkForm;