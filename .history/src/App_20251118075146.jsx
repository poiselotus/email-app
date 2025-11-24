 import './App.css'
 import Layout from './Layout'
import { BrowserRouter } from "react-router-dom";
 

function App() {
 
  return (
    <>
    <BrowserRouter>
     <Layout/>
      <div className="main-content">
          <CompanyList />
        </div>
    </BrowserRouter>
    </>
  )
}

export default App
 