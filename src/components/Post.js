import React from "react";
import { Text,} from "../elements";

import {history} from "../redux/configurestore";

 const Post = (props) => {
  return (
    <React.Fragment>
      <div>
          <div padding="16px">
            <Text>{props.contents}</Text>
          </div>
      </div>
    </React.Fragment>
  );
};

Post.defaultProps = {
  title:"title",
  name:"name",
  contents: "중경상림!",
};

export default Post;