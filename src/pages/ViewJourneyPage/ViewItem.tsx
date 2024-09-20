import styled from "styled-components";
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;

    width:100%;
    padding:20px 12px;
    margin-bottom:16px;

    /* background-color:#F4F4F4; */
    border:1px solid #f4f4f4;
    border-radius:8px;
    cursor:pointer;

    &:first-child {
        margin-top:12px;
    }

    &:last-child {
        margin-bottom:0px;
    }
`

const JourneyTitle = styled.p`
    font-size:16px;
    color:var(--textColor);
    font-weight: 600;
`

const JourneyDate = styled.p`
    font-size:14px;
    color:#666;
    font-weight:500;

    margin-top:4px;
`

const JourneyCost = styled.p`
    font-size:16px;
    color:var(--brandColor);
    font-weight: 600;

    margin-top:32px;
    text-align:right;
`

function ViewItem(props) {

    const { post } = props;

    return (
        
        <Wrapper>
            <JourneyTitle>{post.title}</JourneyTitle>
            <JourneyDate>{post.date}</JourneyDate>

            <JourneyCost>사용 금액 : {post.cost}</JourneyCost>
        </Wrapper>
        
    )   

}

ViewItem.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        cost: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    }).isRequired,
};

export default ViewItem;