import { Routes, Route } from "react-router-dom";
import Mailbox1 from "../../GIT-PROJECT/src/MailBox1";
// import Mailbox2 from "./pages/Mailbox2";
// import Users from "./pages/Users";
// … your other pages

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/mailbox1" element={<Mailbox1 />} />
      {/* <Route path="/mailbox2" element={<Mailbox2 />} />
      <Route path="/users" element={<Users />} />
      <Route path="/companies" element={<Company />} />
      <Route path="/mailboxes" element={<Mailbox />} />
      <Route path="/blocked" element={<Blocked />} /> */}
       
    </Routes>
  );
}

