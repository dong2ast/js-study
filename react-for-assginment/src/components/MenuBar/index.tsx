import { ArrowGrey, Home } from "../../assets";
import { Text, Wrapper } from "./MenuBar.style";

function MenuBar() {
  return (
    <Wrapper>
      <Home />
      <ArrowGrey />
      <Text variant="board">게시판</Text>
      <ArrowGrey />
      <Text variant="notice">공지사항</Text>
    </Wrapper>
  );
}

export default MenuBar;
