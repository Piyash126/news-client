import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>Here is our Terms and Condition</h3>
            <p><Link to='/register'>Go back to Registration </Link></p>
        </div>
    );
};

export default TermsAndConditions;