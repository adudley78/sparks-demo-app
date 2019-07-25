import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { List } from 'semantic-ui-react'
import { getSparks } from '../actions';

class Editor extends React.Component {
    
    render() {
        const { sparks } = this.props;
        const sparksList = sparks.map((spark) => {
            return (
                <List.Item key={spark.id}>
                    <List.Icon name='arrow circle right' size='large' verticalAlign='middle' />
                    <List.Content>
                        <List.Header as='a'>{spark.title}</List.Header>
                        <List.Description as='a'>{spark.url}</List.Description>
                    </List.Content>
                </List.Item>
            );
        })

        return (
            <React.Fragment>
                <button className="getSparksBtn" onClick={() => this.props.getSparks()}>getSparks</button>
                <br />
                <List divided relaxed>{sparksList}</List>
            </React.Fragment>
        );
    }
}

Editor.defaultProps = {
    sparks: []
}

const structuredSelector = createStructuredSelector({
    sparks: state => state.sparksReducer.sparks,
});

const mapDispatchToProps = { getSparks };

export default connect(structuredSelector, mapDispatchToProps)(Editor);