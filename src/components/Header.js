import React from 'react'
import { Text,Button } from "../elements";
import PostWrite from '../pages/PostWrite';



const Header = (props) => {

        return <React.Fragment>
                 <div>
                <Text margin="0px" size="24px" bold>게시판</Text>
                 <Text margin="0px" size="16px" bold>글을 쓰자</Text>
                <Button onclick={PostWrite}>글쓰기</Button>
                </div>
                </React.Fragment>
}

Header.defaultProps = {}

export default Header;