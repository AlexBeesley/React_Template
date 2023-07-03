import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PropagateLoader from 'react-spinners/PropagateLoader'

import Styles from './Styles/main.module.scss'
import Home from './Pages/Home'
import ErrorPage from './Pages/ErrorPage'
import Nav from './Components/nav'
import DarkModeToggle from './Components/darkmodetoggle'
import Footer from './Components/footer'
import CookieConsent from './Components/cookieconsent'
import icon from './Images/favicon.ico'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  const root = document.documentElement

  return (
    <Router>
      {loading ? (
        <div className={Styles.loader}>
          <PropagateLoader
            color={root.style.getPropertyValue('--secondary')}
            size={15}
          />
        </div>
      ) : (
        <>
          <Helmet>
            <link rel="icon" href={icon} />
          </Helmet>
          <div className={Styles.stickyContainer}>
            <Nav />
            <DarkModeToggle />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <CookieConsent />
          <Footer />
        </>
      )}
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
