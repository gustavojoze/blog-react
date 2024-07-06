import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo
                </h1>
                <p className={styles.paragrafo}>
                    Prazer, meu nome é Gustavo José. Bem vindo ao meu blog criado em React para aprender sobre o Hoock do React useLocation.
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                className={styles.circuloColorido}
                src={circuloColorido}
                aria-hidden={true}
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Minha foto'
                />
                
            </div>
        </div>
    )
    
}