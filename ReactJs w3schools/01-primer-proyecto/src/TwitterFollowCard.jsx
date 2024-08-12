export function TwitterFollowCard   ({  children, userName, isFollowing})  {

    
    return  (
        <article    className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="icono de avatar" 
                    src={`https://unavatar.io/${userName}`}
                />
                <div    className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span   
                    className='tw-followCard-infoUserName'>@{userName} </span>
                </div>
            </header>

            <aside>
                <button>
                    seguir
                </button>
            </aside>
        </article>
    )
}

https://www.youtube.com/watch?v=7iobxzd_2wY&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=1
1:32:50