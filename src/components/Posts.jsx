import React from 'react';
import { List, Icon } from 'antd';

const Posts = ( { posts } ) => {
  const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );
  return (
    <List
      itemLayout="vertical"
      size="medium"
      pagination={{
        onChange: ( page ) => {
          console.log( page );
        },
        pageSize: 10,
      }}
      dataSource={ posts }
      renderItem={ post => (
        <List.Item
          key={post.data.title}
          actions={[<IconText type="like-o" text={ post.data.ups } />, <IconText type="message" text={ post.data.num_comments } />]}
          extra={<img width={post.data.thumbnail_width} height={ post.data.thumbnail_height } alt="logo" src={ post.data.thumbnail } />}
        >
          <List.Item.Meta
            title={<a href={`https://reddit.com${ post.data.permalink }`}>{post.data.title}</a>}
            description={post.data.author}
          />
          {post.data.selftext}
        </List.Item>
      )}
    />
  )
}

export default Posts;