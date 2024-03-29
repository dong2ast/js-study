import { Routes, Route } from "react-router-dom";
import AnnouncementPage from "./Announcement/page";
import DetailPage from "./Detail/page";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<AnnouncementPage />} />
      <Route path="/detail/:boardId" element={<DetailPage />} />
    </Routes>
  );
}

export default Router;
