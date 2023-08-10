export const Reply = ({ userImagePath, username, replyText, likeNum }) => {
  const User = () => {
    {
      userImagePath;
    }
  };
  return (
    <div>
      <h1 className="text-white">{username}</h1>
      <span>{replyText}</span>
      <span>{likeNum}</span>
    </div>
  );
};
