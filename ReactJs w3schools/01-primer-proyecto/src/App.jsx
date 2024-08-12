import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App ()  {
    return  (
        <section    className='App'>
            <TwitterFollowCard  isFollowing  userName="midudev" name="Avatar meme">
                Miguel Angel
            </TwitterFollowCard>
            <TwitterFollowCard  isFollowing  userName="nicolas" name="Avatar meme">
                Pablo Hernandez
            </TwitterFollowCard>
        </section>
    )
}