import React from 'react';
import PropTypes from 'prop-types';
import styles from './profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles['profile']}>
      <div className={styles['description']}>
        <img src={avatar} alt="User avatar" className={styles['avatar']} />
        <p className={styles['name']}>{username}</p>
        <p className={styles['tag']}>{tag}</p>
        <p className={styles['location']}>{location}</p>
      </div>
      <ul className={styles['stats']}>
        <li>
          <span className="label">Followers</span>
          <span className={styles['quantity']}>{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className={styles['quantity']}>{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className={styles['quantity']}>{stats.likes}</span>
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
