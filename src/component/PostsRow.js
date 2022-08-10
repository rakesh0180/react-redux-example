import React from "react";

const PostsRow = (props) => {
  const { id, title } = props;
  return (
    <>
      <tr key={id}>
        <th>{id} </th>
        <th>{title} </th>
      </tr>
    </>
  );
};

export default PostsRow;
