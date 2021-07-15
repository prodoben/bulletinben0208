import React from "react";
import {Grid, Text, Button, Input} from "../elements";
import Post from "../components/Post"

import {actionCreators as postActions} from "../redux/modules/post";
import { useSelector,useDispatch } from "react-redux";


const PostWrite = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  const post_id = props.match.params.id;

  const { history } = props;

  const [title, loadTitle] = React.useState("");
  const [name, loadName] = React.useState("");
  const [contents, loadContents] = React.useState("");

  const changeContents = (e) => {
    loadContents(e.target.value);
  }

  const changeTitle = (e) => {
    loadTitle(e.target.value);
  }
  const changeName = (e) => {
    loadName(e.target.value);
  }

  const addPost = () => {
    dispatch(postActions.addPostFB(title,name,contents));
  };


    return (

        <div margin="100px 0px" padding="16px" center>
            <div>
            <Input  value={title}_onChange={changeTitle} label="제목" placeholder="제목을 입력하세요" />
            </div>
          <div>
          <Input  value={name}_onChange={changeName} label="글쓴이" placeholder="글쓴이를 입력하세요" />
          </div>
          <div>
          <Input value={contents}_onChange={changeContents} label="게시글내용" placeholder="내용을 입력하세요" multiLine />
          </div>
            <Button text="게시글 작성" _onClick={addPost}></Button>
        </div>
    );
}


export default PostWrite;