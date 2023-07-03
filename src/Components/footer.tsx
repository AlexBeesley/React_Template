import Styles from '../Styles/footer.module.scss'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={Styles.footer}>
      <p>&copy; {currentYear} Alexander Beesley; All rights reserved.</p>
    </footer>
  )
}
