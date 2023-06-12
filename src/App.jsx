import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


export function App() {

    return (


        <section className='App'>
            <TwitterFollowCard initialisFollowing={true} userName={"elonMusk"} >
                Luis Rafael
            </TwitterFollowCard>

            <TwitterFollowCard initialisFollowing={false} userName={"thegrefg"} >
                Elon Musk
            </TwitterFollowCard>

            <TwitterFollowCard initialisFollowing userName={"ibai"}  >
                El gordo activo
            </TwitterFollowCard>

            <TwitterFollowCard initialisFollowing={false} userName={"rubius"}  >
                ElrubiusOmg
            </TwitterFollowCard>

  
        </section >



    )

}
