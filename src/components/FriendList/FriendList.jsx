import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends, children }) => {
  return <ul className={css.friend_list}>{children}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
