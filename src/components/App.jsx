import { Layout } from './Layout.js';
import { GlobalStyle } from './GlobaleStyle.js';

//*** */
import { Profile } from './Profile/ProfileCard.jsx';
import user from './Profile/user.json';
// import './Profile/Profile.styled.js';

//*** */
import { Statistics } from './Statistics/Statistics.jsx';
import data from './Statistics/data.json';

//*** */
import { FriendList } from './FriendList/FriendList.jsx';
import friends from './FriendList/friends.json';
//*** */
import { Transaction } from './TransactionHistory/TransactionHistory.jsx';
import transactions from './TransactionHistory/transactions.json';

//*** */
export const App = () => {
  return (
    <Layout>
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
      <GlobalStyle />
    </Layout>
  );
};
