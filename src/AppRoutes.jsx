import { Routes, Route } from "react-router-dom";
import Mailbox1 from "./MailBox1";
import Mailboxes from "./Mailboxes";
import ForgotPassword from "./pages/ForgotPassword";
// import Mailbox2 from "./Mailbox2";
// import Users from "./Users";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/mailbox1" element={<Mailbox1 />} />
      <Route path="/mailboxes" element={<Mailboxes />} />
      {/* other routes */}
      {/* <Route path="/users" element={<Users />} />
      <Route path="/companies" element={<Company />} />
      <Route path="/blocked" element={<Blocked />} /> */}
    </Routes>
  );
}
