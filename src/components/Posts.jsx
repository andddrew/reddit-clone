import React from 'react';
import { List, Avatar, Icon } from 'antd';

const Posts = ( { posts } ) => {
  const postsData = [];
  for (let i = 0; i < posts.length; i++) {
    postsData.push( {
      href: `https://reddit.com${ posts[i].permalink }`,
      title: posts[i].data.title,
      avatar: posts[i].data.thumbnail,
      description: posts[i].data.subreddit,
      content: posts[i].data.selftext,
      upvotes: posts[i].data.ups,
    } );
  }
  console.log( postsData );
  const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );
  return (
    <List
      itemLayout="vertical"
      pagination={{
        onChange: ( page ) => {
          console.log( page );
        },
        pageSize: 10,
      }}
      dataSource={ postsData }
      renderItem={ item => (
        <List.Item
          key={item.title}
          actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text={ item.ups } />, <IconText type="message" text="2" />]}
          extra={<img width={200} alt="logo" src={ item.avatar } />}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  )
}

export default Posts;