import React from "react";
import { Form, Input, Button } from "antd";
import "./CreateQuiz.css";
import BarMenu from "../../components/barMenu/BarMenu";

const CreateQuiz = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div className="question-form-container">
      <div className="namePage1"> Quiz </div>
      <Form
        name="question_form"
        onFinish={onFinish}
        layout="vertical"
        className="question-form"
      >
        {/* Pregunta principal */}
        <Form.Item
          name="question"
          label="Question"
          rules={[{ required: true, message: "Please input the question!" }]}
        >
          <Input placeholder="Enter the main question" />
        </Form.Item>

        {/* Respuestas */}
        <div className="answers-grid">
          {[1, 2, 3, 4].map((index) => (
            <Form.Item
              key={index}
              name={`answer_${index}`}
              label={`Answer ${index}`}
              rules={[
                { required: true, message: `Please input answer ${index}!` },
              ]}
            >
              <Input placeholder={`Enter answer ${index}`} />
            </Form.Item>
          ))}
        </div>

        {/* Botón de envío */}
        <Form.Item>
          <Button type="primary" htmlType="submit" className="submit-button">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <BarMenu />
    </div>
  );
};

export default CreateQuiz;
