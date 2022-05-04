import "./styles.css";
import { useState } from "react";
import ChatWindow from "./components/ChatWindow/ChatWindow";

const users = [{ username: "Amy" }, { username: "John" }];

export default function App() {
  const [messages, setMessages] = useState([]);

  const onMessage = (username, message) => {
    const newMessage = {
      username: username,
      text: message
    };
    setMessages(messages.concat([newMessage]));
  };
  return (
    <div className="App">
      <div className="container">
        {users.map((user) => (
          <ChatWindow
            key={user.username}
            user={user}
            messages={messages}
            onMessage={onMessage}
          />
        ))}
      </div>
    </div>
  );
}
