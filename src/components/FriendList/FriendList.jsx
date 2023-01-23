import PropType from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends, children }) => {
  return <ul className={css.friend_list}>{children}</ul>;
};

FriendList.PropType = {
  friends: PropType.array.isRequired,
};
