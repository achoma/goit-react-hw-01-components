import Profile from './Profile/profile.jsx';
import Statistics from './Statistics/statistics.jsx';
import FriendList from './FriendList/friendList.jsx';
import TransactionHistory from './TransactionHistory/transactionHistory.jsx';

import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title={'Upload Stats'} stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};
