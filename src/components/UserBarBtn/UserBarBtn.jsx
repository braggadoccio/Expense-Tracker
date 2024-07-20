export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        //   location={user.location}
        avatar={user.avatar}
        //   stats={user.stats}
      />
      {/* <Statistics title="UPLOAD STATS" stats={data} />
        <FriendsList friends={friends} />
        <TransactionHistory items={transactions} /> */}
    </>
  );
};
