import PropTypes, { number } from 'prop-types';
import styles from './Profile.module.scss';

const Profile = ({name, tag, location, avatar, stats}) => {
  return (
    <div className={styles.Profile}>
      <img className={styles.Profile__Avatar} src={avatar} alt={name}></img>
      <p className={styles.Profile__UserName}>{name}</p>
      <p className={styles.Profile__UserInfo}>@{tag}</p>
      <p className={styles.Profile__UserInfo}>{location}</p>
      <ul className={styles.Profile__Stats}>
        <li className={styles.Profile__StatsItem}>
          <span className={styles.Profile__StatsItemLabel}>Followers</span>
          <span className={styles.Profile__StatsItemQuantity}>{stats.followers}</span>
        </li>
        <li className={styles.Profile__StatsItem}>
          <span className={styles.Profile__StatsItemLabel}>Views</span>
          <span className={styles.Profile__StatsItemQuantity}>{stats.views}</span>
        </li>
        <li className={styles.Profile__StatsItem}>
          <span className={styles.Profile__StatsItemLabel}>Likes</span>
          <span className={styles.Profile__StatsItemQuantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(number).isRequired,
};

export default Profile;