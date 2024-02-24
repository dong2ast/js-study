import {
  LeftArrow,
  LeftArrows,
  RightArrow,
  RightArrows,
} from "../../../assets";
import { ArrowBtn, BtnContainer, NumberBtn, Wrapper } from "./Pagenation.style";

interface PaginationProps {
  page: number;
  limit: number;
  total: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination(props: PaginationProps) {
  const { page, limit, total, setPage } = props;

  const totalPage = Math.ceil(total / limit);
  const pageArr = Array.from({ length: totalPage }, (_, i) => i + 1);

  const handleBtn = (state: string) => {
    switch (state) {
      case "first":
        setPage(1);
        break;
      case "prev":
        page !== 1 ? setPage(page - 1) : setPage(1);
        break;
      case "next":
        page !== totalPage ? setPage(page + 1) : setPage(totalPage);
        break;
      case "last":
        setPage(totalPage);
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      <BtnContainer>
        <ArrowBtn
          onClick={() => {
            handleBtn("first");
          }}
        >
          <LeftArrows />
        </ArrowBtn>
        <ArrowBtn
          onClick={() => {
            handleBtn("prev");
          }}
        >
          <LeftArrow />
        </ArrowBtn>
        {pageArr.map((num) => {
          return (
            <NumberBtn
              key={num}
              onClick={() => {
                setPage(num);
              }}
              state={page === num}
            >
              {num}
            </NumberBtn>
          );
        })}
        <ArrowBtn
          onClick={() => {
            handleBtn("next");
          }}
        >
          <RightArrow />
        </ArrowBtn>
        <ArrowBtn
          onClick={() => {
            handleBtn("last");
          }}
        >
          <RightArrows />
        </ArrowBtn>
      </BtnContainer>
    </Wrapper>
  );
}

export default Pagination;
