import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { List } from 'semantic-ui-react';
import { getComments } from '../actions';

class Comments extends React.Component {

    componentDidMount() {
        this.props.getComments()
    };

    render() {
        const { comments } = this.props;
        const commentsList = comments.spark.map((comment, i) => {
            return (
                <List.Item key={comment.id}>
                    <List.Content>
                        <List.Description>
                            {comment.content}
                        </List.Description>
                    </List.Content>
                </List.Item>
            );
        });

        return (
            <React.Fragment>
                <List divided relaxed>{commentsList}</List>
            </React.Fragment>
        );
    };
};

Comments.defaultProps = {
    comments: []
};

const structuredSelector = createStructuredSelector({
    comments: state => state.commentsReducer.comments,
});

const mapDispatchToProps = { getComments };

export default connect(structuredSelector, mapDispatchToProps)(Comments);