import { useEffect } from 'react'
import Styles from '../Styles/main.module.scss'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className={Styles.title}>
        <h1>React Template</h1>
        <p>
          This is a template for a React SPA using TypeScript, WebPack, Babel
          and ViTest with support for Netlify
        </p>
      </div>
    </>
  )
}
