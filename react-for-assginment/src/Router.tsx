import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnnouncementPage from "./Announcement/page";
import DetailPage from "./Detail/page";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnnouncementPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
