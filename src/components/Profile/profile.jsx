import PropTypes from 'prop-types';
import css from './profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className="label">Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
