import PropType from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={css.statusOnline}></span>
      ) : (
        <span className={css.statusOffline}></span>
      )}

      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
FriendListItem.PropType = {
  avatar: PropType.string.isRequired,
  name: PropType.string.isRequired,
  isOnline: PropType.bool.isRequired,
  id: PropType.number.isRequired,
};
