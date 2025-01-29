import React from "react";
import { Card, Space } from "antd";
import "./NotificationsCard.css";
const Info_Card = () => (
  <div className="card">
    <Space direction="vertical" size={16}>
      <Card
        title={
          <span className="title">
            1. Event: Relive the History of the Roman Empire 🏛{" "}
          </span>
        }
        style={{
          width: 300,
          textAlign: "center",
        }}
      >
        <p>📅 October 10-15</p>
      </Card>
      <Card
        title={
          <span className="title">
            2. New Timeline: The Cold War: Conflicts and Consequences
          </span>
        }
        style={{
          width: 300,
          textAlign: "center",
        }}
      >
        <p>
          🎓 Challenge: Discover the post-World War II conflicts and solve the
          most difficult trivia questions.
        </p>
      </Card>
      <Card
        title={
          <span className="title">
            3. New Event: Sonic 3 
          </span>
        }
        style={{
          width: 300,
          textAlign: "center",
        }}
      >
        <p>
          🦔 Learn about the new movie of the most famous blue hedgehog
        </p>
      </Card>
    </Space>
  </div>
);
export default Info_Card;
