import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import styles from './FriendList.module.scss';

const FriendList = ({ friendsData }) => {
  return (
    <div className={styles.FriendList}>
      <h2 className={styles.FriendList__Title}>Friends List</h2>
      <ul className={styles.FriendList__Items}>
        {friendsData.map(({ id, isOnline, avatar, name }) => {
          return (
            <li key={id} className={styles.FriendList__Item}>
              <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friendsData: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
