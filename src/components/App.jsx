import { Profile } from './profile/profile';
import user from '../user.json';
import { Statistics } from './statistics/statistics';
import data from '../data.json';
import { FriendList } from './friendlist/friendlist';
import friendsData from '../friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
    </div>
  );
};
