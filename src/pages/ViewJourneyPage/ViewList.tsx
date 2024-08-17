import styled from "styled-components";
import PropTypes from 'prop-types';

import ViewItem from "./ViewItem";

const Wrapper = styled.div`
    width:100%;
`

function ViewList(props) {

    const { posts } = props;

    return (
        <Wrapper>
            {posts.map((post) => (
                <ViewItem key={post.id} post={post} />
            ))}
        </Wrapper>
    );
}


ViewList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};


export default ViewList;