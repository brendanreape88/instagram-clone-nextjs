import Post from "./Post";

function Posts() {
  const posts = [
    {
      id: 1,
      username: "Bill",
      userImg: "https://i.ibb.co/TMm6BWS/Bill.png",
      img: "https://i.ibb.co/yyX2rLs/Post-1.png",
      caption: "Check out this cool app I built!",
    },
  ];

  return (
    <div>
      {posts?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
