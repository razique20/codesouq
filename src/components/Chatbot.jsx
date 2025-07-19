"use client";
import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chatbot", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setMessages([...newMessages, { sender: "bot", text: data.reply }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 bg-white border rounded-xl shadow-xl p-4">
      <div className="h-64 overflow-y-auto mb-2">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <div className={`inline-block px-3 py-2 rounded-lg ${msg.sender === "user" ? "bg-violet-500 text-white" : "bg-gray-200"}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && <p className="text-gray-500 italic">Typing...</p>}
      </div>

      <div className="flex">
        <input
          className="flex-grow border border-gray-300 rounded-l px-3 py-2 outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
        />
        <button
          onClick={sendMessage}
          className="bg-violet-600 text-white px-4 py-2 rounded-r hover:bg-violet-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
