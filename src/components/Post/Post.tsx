import format from 'date-fns/format'
import ptBr from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'

interface PostProps {
    author: {
      name: string;
      role: string;
      avatarUrl: string;
    };
    publishedAt: any;
  }

export function Post({author,publishedAt}:PostProps){

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr,
      });

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar scr={author.avatarUrl}/>
                     <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                     </div>
                </div>

                <time title='' dateTime={publishedAt}>{publishedDateFormatted}</time>
            </header>

            <div className={styles.content}>
                
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
            </div>
        </article>
    )
}