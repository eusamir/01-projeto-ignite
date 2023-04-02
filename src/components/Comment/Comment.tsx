import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './Comment.module.css'
interface ContentProps{
    content: string
    deleteComment:any
}
export function Comment({content, deleteComment}:ContentProps){
    const [like, setLike] = useState(0)

    function handleDeleteComment(){
        deleteComment(content);
        
    }

    function handleLikeComment(){
       setLike((state)=>{
           return state+1
       })
        
    }

    return(
        <div className={styles.comment}>
            <img src="https://github.com/eualex.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Alex Araújo</strong>
                            <time title='11 de Maio às 8:10h' dateTime='2022-05-11 8:10:28'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{like}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}