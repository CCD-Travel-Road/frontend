import styled from "styled-components";

// immages
import bookmark from "../../images/bookmark.png"
import alert from "../../images/alert.png"
import mypage from "../../images/mypage.png"

// styled
const Wrapper = styled.div`
    width:fit-content;
    height:fit-content;

    display:flex;
    align-items: center;
    gap:20px;
`

const UtilIcon = styled.img`
    width:20px;
    height:20px;
    object-fit:cover;
`

function HeaderUtil() {

    return (

        <Wrapper>

            <UtilIcon src={bookmark}/>
            <UtilIcon src={alert}/>
            <UtilIcon src={mypage}/>
            
        </Wrapper>
    )

}

export default HeaderUtil;