import { useEffect, useState } from 'react'
import Styles from '../Styles/cookieconsent.module.scss'
import Img from '../Images/cookie.png'

export default function CookieConsent() {
  const [cookie, setCookie] = useState(
    () => JSON.parse(window.localStorage.getItem('COOKIE_KEY')) || false
  )

  useEffect(() => {
    if (cookie) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [cookie])

  useEffect(() => {
    window.localStorage.setItem('COOKIE_KEY', JSON.stringify(cookie))
  }, [cookie])

  function consented() {
    console.log('consented to use of cookies.')
    setCookie(true)
  }

  if (!cookie) {
    return (
      <div id={Styles.cookieConsent}>
        <div className={Styles.overlay} />
        <div className={Styles.cookieConsent}>
          <img className={Styles.image} src={Img} />
          <p className={Styles.text}>
            This website uses cookies to ensure you get the best experience.{' '}
            <a
              className={Styles.inlineLink}
              href="https://ico.org.uk/for-organisations/guide-to-pecr/cookies-and-similar-technologies/#:~:text=You%20cannot%20show%20consent%20if,user%20has%20consented%20to%20them."
            >
              Find out more
            </a>
          </p>
          <button className={Styles.btn} onClick={consented}>
            Got it!
          </button>
        </div>
      </div>
    )
  } else {
    return null
  }
}
