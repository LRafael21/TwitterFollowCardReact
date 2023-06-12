import { useState } from "react"

export function TwitterFollowCard({ children, userName = 'unknown', initialisFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialisFollowing)


    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClasName = isFollowing ? 'tw-followCard-button is-following ' : 'tw-followCard-button'

    const changeStatus = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/twitter/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClasName} onClick={changeStatus}>
                    {text}
                </button>
            </aside>
        </article>

    )
}