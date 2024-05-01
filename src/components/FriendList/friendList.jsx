import PropTypes from 'prop-types';
import styles from './friendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li
      className={`${styles.itemFriend} ${
        isOnline ? styles.online : styles.offline
      }`}
    >
      <span className={styles.statusFriend}></span>
      <img
        className={styles.avatarFriend}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.nameFriend}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
