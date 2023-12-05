import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css'
// import Header from './components/Header/Header.tsx'
// import Footer from './components/Footer/Footer.tsx'
// import Home from './assets/Pages/Home/Home.tsx'
// import App from './App.tsx'
import SignUp from './pages/SignUp/SignUp.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      {/* <Header signIn={false} avatar='' username=''/> */}
      {/* <Header signIn={true} avatar='src\assets\avatar.png' username='Bông Hub'/> */}
      {/* <Footer /> */}
      {/* <Home /> */}
      {/* <App /> */}
      <SignUp />
    </Router>
  </React.StrictMode>,
)
