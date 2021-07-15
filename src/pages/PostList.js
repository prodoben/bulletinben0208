import React from "react";
import { useSelector,useDispatch } from "react-redux";


import Header from "../components/Header";
import Post from "../components/Post";

import {actionCreators as postActions} from "../redux/modules/post";

const PostList = (props) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);
 

    React.useEffect(() => {

        if(post_list.length === 0){
             dispatch(postActions.getPostFB());
        }
       
    }, []);

    return (
        <React.Fragment>
            <Header></Header>
            {/* <Post/> */}

            {post_list.map((p, idx) => {
                return <Post key={p.id} {...p}/>
            })}
        </React.Fragment>
    )
}

export default PostList;
