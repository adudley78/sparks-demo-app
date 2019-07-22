import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import Header from './Header';
// import SparkList from './SparkList';

const GET_SPARKS_REQUEST = 'GET_SPARKS_REQUEST';
const GET_SPARKS_SUCCESS = 'GET_SPARKS_SUCCESS';

function getSparks() {
    console.log('getSparks() Action!!!')
    return dispatch => {
        dispatch ({ type: GET_SPARKS_REQUEST });
        return fetch(`api/sparks.json`)
        .then(response => response.json())
        .then(json => dispatch(getSparksSuccess(json)))
        .catch(error => console.log(error));
    };
};

function getSparksSuccess(json) {
    return {
        type: GET_SPARKS_SUCCESS,
        json
    };
}

class Editor extends React.Component {
    render() {
        const { sparks } = this.props;
        // if (sparks === null) return null;
        const sparksList = sparks.map((spark) => {
            return <li>{spark.title} {spark.member}</li>
        })
        
        return (
            <React.Fragment>
                this.props.getSparks()
               <ul>{ sparksList }</ul>
            </React.Fragment>
        );
    }
}

const structuredSelector = createStructuredSelector({
    sparks: state => state.sparks,
});

const mapDispatchToProps = { getSparks };

export default connect(structuredSelector, mapDispatchToProps)(Editor);
