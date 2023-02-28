import styles from './Header.module.css'
import igniteLog from '../assets/logo.svg'



export function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteLog} alt="ignite logo" />
                Ignite Feed
        </header>
    )
}