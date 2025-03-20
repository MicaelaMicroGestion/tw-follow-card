import "./App.css";
import { TwitterFollowCard } from "./components/TwitterFollowCard/TwitterFollowCard";
import { users } from "./services/users";


export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing}) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          name={name}
          initialIsFollowing={isFollowing}
        ></TwitterFollowCard>
      ))}
    </section>
  );
}
