import { ArrowGrey, Home } from "../../assets";
import { Text, Wrapper } from "./MenuBar.style";

function MenuBar() {
  return (
    <Wrapper>
      <img src={Home} />
      <img src={ArrowGrey} />
      <Text variant="board">게시판</Text>
      <img src={ArrowGrey} />
      <Text variant="notice">공지사항</Text>
    </Wrapper>
  );
}

export default MenuBar;
