import Button from "../Button"
import Fieldset from "../fieldset"
import InpuText from "../InputText"
import styles from './NewsLetter.module.css'

const NewsLetter = () => {
  return (
    <section className={styles.newslatter}>
        <h2 className={styles.titulo}>Inscreva-se para ganhar descontos!</h2>
        <form className={styles.form}>
            <Fieldset>
                <InpuText placeholder="Digite o seu melhor email" />
            </Fieldset>
            <Button variant="default" type="submit">Inscreva-se</Button>
        </form>
    </section>
  )
}

export default NewsLetter