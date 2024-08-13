import styled from "styled-components";
import PropTypes from 'prop-types';

const QestionText = styled.p`
    font-size:16px;
    font-weight:600;
    color:var(--textColor);

    margin-bottom: 20px;
`

function QestionTitle(props) {

    const { content } = props;

    return (

        <QestionText>{content}</QestionText>
        
    )
}

QestionTitle.propTypes = {
    content: PropTypes.string.isRequired,
};

export default QestionTitle;