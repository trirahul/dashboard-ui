import React from 'react';
import styled from 'styled-components';

const FeedbackContainer = styled.div`
    background: #3E3B47;
    padding: 20px;
    border-radius: 8px;
`;

const FeedbackItem = styled.div`
    margin-bottom: 15px;
`;

function Feedback() {
    return (
        <FeedbackContainer>
            <h3>Customer's Feedback</h3>
            <FeedbackItem>
                <p><strong>Jenny Wilson:</strong> The food was excellent...</p>
            </FeedbackItem>
            <FeedbackItem>
                <p><strong>Dianne Russell:</strong> We enjoyed the food...</p>
            </FeedbackItem>
            <FeedbackItem>
                <p><strong>Devon Lane:</strong> Amazing service...</p>
            </FeedbackItem>
        </FeedbackContainer>
    );
}

export default Feedback;
