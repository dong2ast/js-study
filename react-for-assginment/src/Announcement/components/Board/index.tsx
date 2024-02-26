import { useNavigate } from "react-router-dom";
import { Wrapper, Title, Number, Date } from "./Board.style";

interface BoardProps {
  key: number;
  number: number;
  title: string;
  createdAt: string;
}

function Board(props: BoardProps) {
  const navigate = useNavigate();

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
