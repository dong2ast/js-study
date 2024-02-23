import { BrowserRouter, Route, Routes } from "react-router-dom";
// import DetailPage from "./Detail/page";
import AnnouncementPage from "./Announcement/page";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnnouncementPage />} />
        {/* <Route path="/detail/:id" element={<DetailPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
