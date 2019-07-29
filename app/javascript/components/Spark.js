import React from 'react';
import PropTypes from 'prop-types';

const Spark = ({ spark }) => (
    <div>
        <h2>
            {spark.spark_date}
            {' - '}
            {spark.spark_type}
        </h2>
        <ul>
            <li>
                <strong>Type:</strong>
                {' '}
                {spark.spark_type}
            </li>
            <li>
                <strong>Date:</strong>
                {' '}
                {spark.spark_date}
            </li>
            <li>
                <strong>Title:</strong>
                {' '}
                {spark.title}
            </li>
            <li>
                <strong>Speaker:</strong>
                {' '}
                {spark.url}
            </li>
            <li>
                <strong>Host:</strong>
                {' '}
                {spark.member}
            </li>
            <li>
                <strong>Published:</strong>
                {' '}
                {spark.published ? 'yes' : 'no'}
            </li>
        </ul>
    </div>
);

Spark.propTypes = {
    spark: PropTypes.shape(),
};

Spark.defaultProps = {
    spark: undefined,
};

export default Spark;