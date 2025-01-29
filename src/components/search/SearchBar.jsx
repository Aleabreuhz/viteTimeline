import React from "react";
import "./SearchBar.css";
import { Input, Space } from "antd";
import AvatarIcon from "../avatar/AvatarIcon";
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchBar = () => (
  <div className="search_Bar">
    <AvatarIcon className="accountAvatar"/>
    <Space direction="vertical">
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        style={{
          width: 200,
          backgroundColor: "transparent",
        }}
      />{" "}
    </Space>
  </div>
);
export default SearchBar;
