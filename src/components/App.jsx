import { Profile } from './Profile/ProfileCard.jsx';
import user from './Profile/user.json';
import './Profile/Profile.css';

//*** */
import { Statistics } from './Statistics/Statistics.jsx';
import data from './Statistics/data.json';
import './Statistics/statistics.css';
//*** */
import { FriendList } from './FriendList/FriendList.jsx';
import friends from './FriendList/friends.json';
//*** */
import { Transaction } from './TransactionHistory/TransactionHistory.jsx';
import transactions from './TransactionHistory/transactions.json';

//*** */
export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />

      <Transaction items={transactions} />
    </div>
  );
};
