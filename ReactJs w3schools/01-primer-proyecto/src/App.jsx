import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App ()  {
    return  (
        <section    className='App'>
            <TwitterFollowCard  isFollowing  userName="midudev">
                Miguel Angel
            </TwitterFollowCard>

            <TwitterFollowCard  isFollowing={false}  userName="nicolas">
                Pablo Hernandez
            </TwitterFollowCard>
        </section>
    )
}