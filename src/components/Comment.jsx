export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  return (
    <div>
      <div>{userImagePath}</div>
      <span>{username}</span>
      <span>{commentText}</span>
      <div>
        <span>{likeNum}</span>
      </div>
      <span>{replies}</span>
    </div>
  );
};
