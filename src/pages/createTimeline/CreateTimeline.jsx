import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import BarMenu from "../../components/barMenu/BarMenu";
import { DatePicker, Form, Input, Select, Upload, Button } from "antd";
import { message } from 'antd';

import "./CreateTimeline.css";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

function TimeLineForm() {
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinish = (values) => {
    console.log("Submitted values:", values);
    message.success("Form submitted successfully!");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Please fill out all required fields!");
  };

  return (
    <div className="custom-form-container">
      <div className="namePage"> Events/Timeline </div>
      <Form
        className="custom-form"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        layout="vertical"
        onFinish={onFinish} // Agregado
        onFinishFailed={onFinishFailed} // Agregado
      >
        {/* Campo Select */}
        <Form.Item
          label="Select a Timeline"
          name="select" // Agrega un nombre único al campo
          className="form-item-select"
          rules={[
            {
              required: true,
              message: "Please select an option!",
            },
          ]}
        >
          <Select className="form-select" placeholder="Select an option">
            <Select.Option value="lotr">The Lord of the Rings</Select.Option>
            <Select.Option value="hp">Harry Potter</Select.Option>
          </Select>
        </Form.Item>

        {/* Campo Input */}
        <Form.Item
          label="Event name"
          name="input" // Agrega un nombre único al campo
          className="form-item-input"
          rules={[
            {
              required: true,
              message: "Please input a value!",
            },
          ]}
        >
          <Input className="form-input" placeholder="Enter some text" />
        </Form.Item>

        {/* Campo RangePicker */}
        <Form.Item
          label="Select date"
          name="rangePicker" // Agrega un nombre único al campo
          className="form-item-rangepicker"
          rules={[
            {
              required: true,
              message: "Please select a date range!",
            },
          ]}
        >
          <RangePicker className="form-rangepicker" />
        </Form.Item>

        {/* Campo TextArea */}
        <Form.Item
          label="Content"
          name="textArea" // Agrega un nombre único al campo
          className="form-item-textarea"
          rules={[
            {
              required: true,
              message: "Please input some content!",
            },
          ]}
        >
          <TextArea
            className="form-textarea"
            rows={4}
            placeholder="Enter some content"
          />
        </Form.Item>

        {/* Campo Upload */}
        <Form.Item
          label="Upload"
          name="upload" // Agrega un nombre único al campo
          className="form-item-upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            className="form-upload"
            action="/upload.do"
            listType="picture-card"
          >
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>

        {/* Botón Submit */}
        <Form.Item>
          <Button
            className="form-submit-button"
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      <BarMenu />
    </div>
  );
}

export default TimeLineForm;
