import BoardList from "../components/BoardList";
import Swiper from "../components/Swiper";
import { BoardWrapper, Wrapper } from "./Announcement.style";

function Announcement() {
  return (
    <Wrapper>
      <Swiper />
      <BoardWrapper>
        <BoardList />
      </BoardWrapper>
    </Wrapper>
  );
}

export default Announcement;
