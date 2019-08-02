import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { List } from 'semantic-ui-react'
import { getSparks } from '../actions';
import Counter from './Counter';

class Editor extends React.Component {
    
    componentDidMount() {
       this.props.getSparks()
    };
    
    render() {
        const { sparks } = this.props;
        const sparksList = sparks.map((spark, i) => {
            return (
                <List.Item key={spark.id}>
                    <List.Icon name='lightbulb outline' size='large' verticalAlign='middle' />
                    <List.Content>
                        <List.Header>
                            {i + 1}. <a href={spark.url} target="_blank">{spark.title}</a> ({spark.url})
                        </List.Header>
                        <List.Description>
                            127 points | by {spark.member} on {spark.spark_date} | 72 <a href="#">comments</a>
                        </List.Description>
                        <Counter />
                    </List.Content>
                </List.Item>
            );
        })

        return (
            <React.Fragment>
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