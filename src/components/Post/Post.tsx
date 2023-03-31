import format from 'date-fns/format'
import ptBr from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'
import { useState } from 'react'

interface PostProps {
    author: {
      name: string;
      role: string;
      avatarUrl: string;
    };
    publishedAt: any;
    content:any;
  }

  export function Post({author,publishedAt,content}:PostProps){
    const [comment, setComment] = useState(['Muito legal!'])
    const [newCommentValue, setNewCommentValue]=useState('')

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr,
      });

    function handleCreateNewComment(){
        event?.preventDefault();
        
        setComment([...comment, newCommentValue]);

        setNewCommentValue('');

    }

    function handleNewCommentChange(){
        setNewCommentValue(event?.target.value);
    }

    function deleteComment(comment){
        console.log(`Deletar comentario ${comment}`);
    }

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
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }else if(line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name='comment'
                    placeholder="Deixe um comentário"
                    value={newCommentValue}
                    onChange={handleNewCommentChange}
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comment.map(comment=>{
                    return <Comment key={comment} content={comment} deleteComment={deleteComment}/>
                })}
            </div>
        </article>
    )
}