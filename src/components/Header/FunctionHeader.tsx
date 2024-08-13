import styled from "styled-components";
import PropTypes from 'prop-types';

import HeaderUtil from "./HeaderUtil";

// image
import backIcon from "../../images/back.png"

// styled
const Wrapper = styled.div`
    width:100%;
    display:flex;
    align-items: center;
    justify-content:space-between;

    padding:16px 20px;
    background-color:white;
`

const PageInfo = styled.div`
    width:100%;
    display:flex;
    align-items:center;
`

const BackIcon = styled.img`
    width:16px;
    height:16px;
    margin-right:16px;
`

const PageTitle = styled.p`
    font-size:16px;
    font-weight:500;
    line-height:1.6;
`

function FunctionHeader(props) {

    const { content } = props;

    return (

        <Wrapper>

            <PageInfo>
                <BackIcon src={backIcon} />
                <PageTitle>{content}</PageTitle>
            </PageInfo>


            <HeaderUtil/>

        </Wrapper>
    )

}

FunctionHeader.propTypes = {
    content: PropTypes.string.isRequired,
};

export default FunctionHeader;