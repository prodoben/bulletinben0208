import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { firestore} from "../../shared/firebase";

// 액션을 부르기 위한 타입을 고정해두는 것. 액션과 액션함수는 하나의 과정으로 인식하자
const LOAD_POST = "LOAD_POST";
const ADD_POST = "ADD_POST";

//액션생성자 action creator??
const loadPost = createAction(LOAD_POST, (post_list)=>({post_list}));
const addPost =  createAction(ADD_POST, (post) => ({post}));

//초기값 설정 - 아무것도 비어있으면 안되니깐
const intialState =  {
    list: [],
  };

  const initialPost = {
    title:"title",
    name:"name",
    contents: "중경상림!",
  }

  // FB 데이터 가져오기

  const getPostFB = () => {
    return function (dispatch, getState, {history}) {
        const postDB = firestore.collection("post");

//파이어베이스 공식문서에서 확인 가능함
        postDB.get().then((docs) => {
            let post_list = [];
            docs.forEach((doc) => {
//컴포넌트와 DB의 데이터를 맞춰주기 같으면 그럴 필요없음
          let _post = doc.data();
          let post = {
            id: doc.id,
            title: _post.title,
            name: _post.name,
            contents: _post.contents,
                };
                post_list.push(post);
            });
            dispatch(loadPost(post_list));
        });
    };
};

export const addPostFB = (title="",name="",contents="") => {
  return function (dispatch, getState, {history}) {
    const postDB = firestore.collection("post")
    const _post = {
      ...initialPost,
      title :title,
      name :name,
      contents :contents,
    };    
    // add()에 데이터를 넘겨줍시다! 공식문서!!! 외우지는 말자!!!!!
    postDB.add({ ..._post }).then((doc) => {
      let post = {..._post, id: doc.id};
      dispatch(addPost(post));
      history.replace("/");
    }).catch((err) => {
      console.log("post 작성에 실패했어요!", err);
    });
  }
}


  //reducer
  export default handleActions({
    [LOAD_POST]: (state, action) => produce(state, (draft)=>
    { draft.list = action.payload.post_list;}),

    [ADD_POST]: (state, action) => produce(state,(draft)=>
    { draft.list.unshift(action.payload.post);
    }),
  }, intialState
);

const actionCreators = {
  loadPost,
  addPost,
  getPostFB,
  addPostFB,
}

export { actionCreators };








