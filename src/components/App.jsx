import { AppContainer } from './App.styled';
import { Profile } from './Profile/Profile';
import user from '../data_json/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data_json/data.json';
import { FriendList } from './Friendlist/Friendlist';
import friendsData from '../data_json/friends.json';
import { TransactionHistory } from './Transactions/Transactionhistory';
import transactionData from '../data_json/transactions.json';

export const App = () => {
  return (
    <AppContainer>
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
    </AppContainer>
  );
};
