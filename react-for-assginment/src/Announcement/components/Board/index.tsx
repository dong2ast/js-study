import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Text,
  Title,
  TitleContainer,
  Number,
  Date,
} from "./Board.style";

interface BoardProps {
  key: number;
  number: number;
  title: string;
  createdAt: string;
}

function Board(props: BoardProps) {
  const navigate = useNavigate();
  //구조분해할당
  const { number, title, createdAt } = props;

  const handleClickButton = () => {
    navigate(`/detail/${number + 1}`);
  };

  return (
    <Wrapper>
      <Number>{number}</Number>
      <Title onClick={handleClickButton}>{title}</Title>
      <Date>{createdAt}</Date>
    </Wrapper>
  );
}

export default Board;
