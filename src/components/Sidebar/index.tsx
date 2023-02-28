import styles from './Sidebar.module.css'
import { PencilLine } from "phosphor-react";
import { Avatar } from '../Avatar/Avatar';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img
             className={styles.cover}
             src='https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc01c83c3da0425e9baa6c7a9204af81'
             />
            <div className={styles.profile}>
                <Avatar scr="https://github.com/eusamir.png"/>
                <strong>Samir Andrade</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}