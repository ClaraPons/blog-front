import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'

import Home from "./pages/Home"
import NewArticle from "./pages/NewArticle"
import Article from "./pages/Article"
import NewCategory from './pages/NewCategory'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new-article" element={<NewArticle/>} />
        <Route path="/:slug" element={<Article/>} />
        <Route path="/new-category" element={<NewCategory />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App