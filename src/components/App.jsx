import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Row } from 'components/TransactionHistory/row';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends}>
        {friends.map(friend => {
          return (
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              id={friend.id}
              key={friend.id}
            />
          );
        })}
      </FriendList>
      <TransactionHistory items={transactions}>
        {transactions.map(item => {
          return (
            <Row
              key={item.id}
              id={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </TransactionHistory>
    </div>
  );
};
