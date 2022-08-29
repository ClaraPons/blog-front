import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'

import Home from "./pages/Home"
import NewArticle from "./pages/NewArticle"

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new-article" element={<NewArticle/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App