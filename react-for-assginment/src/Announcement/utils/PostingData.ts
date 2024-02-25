import { postingDataProps } from "../types/AnnouncementTypes";

const postingData = (props: postingDataProps) => {
  const { list, page, BOARD_LIMIT, setPostData } = props;

  const offset = (page - 1) * BOARD_LIMIT;
  if (list) {
    const result = list.slice(offset, offset + BOARD_LIMIT);
    setPostData(result.reverse());
  }
};

export default postingData;
