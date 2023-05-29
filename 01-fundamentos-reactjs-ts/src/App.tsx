import { Header } from "./components/Header"
import { Post, PostType } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/17651227?v=4',
      name: 'Lincoln de Souza',
      role: 'Fullstack'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir um projeto no meu portifa. É um projeto muito massa!' },
      { type: 'link', content: 'jane.design/douctorcare' },

    ],
    publishedAt: new Date('2023-05-19 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/18500161?v=4',
      name: 'Victória Albuquerque de Souza',
      role: 'Web Disigner'
    },
    content: [
      { type: 'paragraph', content: 'Opa galerinha' },
      { type: 'paragraph', content: 'Meu projeto é o melhor de todos ta lá no meu portifa! . É um projeto muito massa!' },
      { type: 'link', content: 'jane.design/douctorcare' },

    ],
    publishedAt: new Date('2023-05-20 20:00:00')
  }
]


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>

          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              )
            })
          }


        </main>
      </div>


    </div>

  )
}

