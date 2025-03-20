import { useState } from "react";

export function TwitterFollowCard({ userName, name, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [isHovering, setIsHovergin] = useState();

  const text = isFollowing
    ? isHovering
      ? "Dejar de seguir"
      : "Siguiendo"
    : "Seguir";

  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt={`El avatar de ${userName}`}
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUsername">@{userName}</span>
        </div>
      </header>

      <aside>
        <button
          className={buttonClassName}
          onClick={handleClick}
          onMouseEnter={() => setIsHovergin(true)}
          onMouseLeave={() => setIsHovergin(false)}
        >
          <span className="tw-followCard-text" data-testid="tw-followBtn">
            {text}
          </span>
        </button>
      </aside>
    </article>
  );
}
