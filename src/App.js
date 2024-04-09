import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index'

function App () {
  return (
    <Router>
      <Routes>
        {/* 首页路由 */}
        <Route path="/" element={<Home />} />
        {/* 其他页面路由 */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
