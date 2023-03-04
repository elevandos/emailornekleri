import styles from "./Footer.module.css"

const Footer = ()=>{
return (<footer className={styles.footer}>
<div className={styles.container}>
<p className={styles.copy}>Powered By <b><a href="https://openai.com/">OpenAI</a></b> | &copy; <a href="https://flerosoft.com">Flerosoft</a></p>
</div>
</footer>)
}
export default Footer