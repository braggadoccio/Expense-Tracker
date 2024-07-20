export const App = () => {
  return (
    <>
      <h2>Profile settings</h2>
      <Profile
        username={user.username}
        // tag={user.tag}
        //   location={user.location}
        avatar={user.avatar}
        //   stats={user.stats}
      />
      <div>
        <button>Upload new photo</button>
        <button>Remove</button>
      </div>
      <button>Save</button>
    </>
  );
};
