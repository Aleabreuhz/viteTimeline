import React, { useState } from "react";
import {
  CalendarOutlined,
  QuestionOutlined,
  CloseCircleOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Button } from "antd";
import "./ButtonSelect.css";
const ButtonSelect = () => {
  const [size] = useState("middle"); // default is 'middle'
  const [size2] = useState("large");
  return (
    <div className="select_buttons">
      <Button
        type="primary"
        shape="round"
        icon={<CalendarOutlined />}
        size={size}
        color="primary"
        className="button_event"
      >
        Event
      </Button>
      <Button
        type="primary"
        shape="round"
        icon={<QuestionOutlined />}
        size={size}
        color="primary"
        className="button_quiz"
      >
        Quiz
      </Button>
      <Button
        type="primary"
        shape="round"
        icon={<UserOutlined />}
        size={size}
        color="primary"
        className="button_timeline"
      >
        Character
      </Button>
      <Button className="button_quit" type="primary" icon={<CloseCircleOutlined />} size={size2}>
      </Button>
    </div>
  );
};
export default ButtonSelect;
