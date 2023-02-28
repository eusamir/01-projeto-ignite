import { Header } from "./components/Header"
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"
import {Post} from "./components/Post/Post"

export function App() {
  return (
   <>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
       <Post/>
      </main>
    </div>
   </>
  )
}