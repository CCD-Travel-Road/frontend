import styled from "styled-components";
import PropTypes from 'prop-types';

const TitleText = styled.p`
    font-size:20px;
    font-weight:600;
    color:var(--textColor);
`

function MainTitle(props) {

    const { content } = props;

    return (

        <TitleText>{content}</TitleText>
    )
}

MainTitle.propTypes = {
    content: PropTypes.string.isRequired,
};

export default MainTitle;