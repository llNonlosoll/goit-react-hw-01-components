import { Profile } from './Profile/Profile.jsx';
import user from '../data_json/user.json';
import { Statistics } from './Statistics/Statistics.jsx';
import data from '../data_json/data.json';
import { FriendList } from './Friendlist/Friendlist.jsx';
import friendsData from '../data_json/friends.json';
import { TransactionHistory } from './Transactions/Transactionhistory.jsx';
import transactionData from '../data_json/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics items={data} title={data.title} />
      <FriendList items={friendsData} />
      <TransactionHistory items={transactionData} />
    </div>
  );
};
