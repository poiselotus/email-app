 import './App.css'
 import Layout from './Layout'
import { BrowserRouter } from "react-router-dom";
import CompanyList from "./components/CompanyList";

function App() {

  return (
    <>
    <BrowserRouter>
     <Layout/>
    </BrowserRouter>
    </>
  )
}

export default App
 