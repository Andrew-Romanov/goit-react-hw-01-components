import PropTypes from 'prop-types';
import styles from './FriendListItem.module.scss';
import dummyUser from './user.svg';
import randomColor from '../../../utils/random-color';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      <span
        className={
          isOnline
            ? styles.FriendListItem__IsOnline
            : styles.FriendListItem__IsOffline
        }
      ></span>
      <img
        className={styles.FriendListItem__Avatar}
        style={{ backgroundColor: randomColor() }}
        src={avatar}
        alt={name}
        width="100"
      />
      <p className={styles.FriendListItem__UserName}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

FriendListItem.defaultProps = {
  avatar: dummyUser,
};

export default FriendListItem;
