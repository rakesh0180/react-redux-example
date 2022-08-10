import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userPostDone } from "../redux/action/userAction";
import PostsRow from "./PostsRow";

const PostsList = (props) => {
  const posts = useSelector((state) => state.userPostState);
  // console.log("posts", posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userPostDone());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [searchInput, setSearchInput] = useState("");
  const [listSearchData, setListSearchData] = useState([]);

  const handleChange = (e) => {
    let str = e.target.value;

    const res = posts.filter((post) => post.id.toString() === str);
    setSearchInput(str);
    setListSearchData(res);
  };

  useEffect(() => {
    setListSearchData([...posts]);
  }, [posts]);

  return (
    <div>
      <div className="row justify-content-center">
        <div className="mt-5 col-12  col-sm-12 col-md-12 col-lg-10 col-xl-10 mb-5">
          <input
            className="form-control"
            type="text"
            name="search"
            value={searchInput}
            onChange={handleChange}
            placeholder="search by id"
          />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
          <table className="table table-bordered table-hover">
            <thead className="thead-light">
              <tr>
                <th>Id</th>
                <th>Posts </th>
              </tr>
            </thead>
            <tbody>
              {listSearchData.length > 0
                ? listSearchData.map((post) => {
                    return <PostsRow key={post.id} {...post} />;
                  })
                : posts.map((post) => {
                    return <PostsRow key={post.id} {...post} />;
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PostsList;
