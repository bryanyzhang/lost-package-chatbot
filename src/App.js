import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  // state vars for messages, user inputs, current step and end of chat references
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);
  const chatEndRef = useRef(null);

  // inital chat message from chatbot
  useEffect(() => {
    setMessages([{ text: "Hello! I'm here to help track your package. Can you please provide me with your 6 digit order number?", sender: 'bot' }]);
    setStep(0);
  }, []);

  // scrolls to the end of the chatbox when new messages are added
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // function to add bot message to the chat
  const addBotMessage = (text) => {
    setMessages((prev) => [...prev, { text, sender: 'bot' }]);  
  };

  // function to add user message to the chat
  const addUserMessage = (text) => {
    setMessages((prev) => [...prev, { text, sender: 'user' }]);
  };

  // function to handle user input submission
  const handleSumbit = (e) => {
    e.preventDefault();
    const userText = input.trim();
    if (!userText) return; // do nothing if input is empty

    addUserMessage(userText); 
    setInput(''); 

    // simulate bot thinking of a response
    setTimeout(() => {
      processUserInput(userText.toLowerCase());
    }, 500);
  };

  // process user input based on current step
  const processUserInput = (text) => {
    const isValidOrderNumber = /^\d{6}$/.test(text);
    const isValidEmailPhone = /\S+@\S+\.\S+/.test(text) || /^\d{10}$/.test(text);

    if (step === 0) {
      // order number 
      if (isValidOrderNumber) {
        addBotMessage("Got it! Would you like to track your order status, cancel your order, or report as lost?");
        setStep(2);
      } else if (text.includes("don't know") || text.includes("not sure") || text.includes("help") ||  text.includes("dont")){
        addBotMessage("No problem! If you don't have your order number, please provide me with your email or phone number.");
        setStep(1);
      } else {
        addBotMessage("Hmm, that does't look like a valid order number. It should be a 6-digit number. Can you please try again?");
        addBotMessage("You can also say 'I don't know' or 'I need help' if you're unsure.");
      }
    } else if (step === 1) {
      // email or phone number
      if (isValidEmailPhone) {
        addBotMessage("Thanks! I found your order. Would you like to track your order status, cancel your order, or report as lost?");
        setStep(2);
      } else {
        addBotMessage("Hmm, that doesn't look like a valid email or phone number. Please provide me with your email or phone number.");
      }
    } else if (step === 2) {
      // track, cancel or report as lost
      if (text.includes("track") || text.includes("status")) {
        addBotMessage("Your order is currently " + randomStatus() + ". Is there anything else I can help you with?");
        setStep(4);
      } else if (text.includes("cancel") || text.includes("refund")) {
        addBotMessage("Your order has been canceled and a refund has been initiated. Is there anything else I can help you with?");
        setStep(4);
      } else if (text.includes("lost") || text.includes("missing") || text.includes("report")) {
        addBotMessage("I'm sorry to hear that! Your order has been marked as lost. Would you like the order to be refunded, or for the package to be resent?");
        setStep(3);
      } else {
        addBotMessage("Hmm, I didn't quite catch that. Would you like to track your order status, cancel your order, or report as lost?");
      }
    } else if (step === 3) {
      // in lost package step, refund or resent
      if (text.includes("refund")) {
        addBotMessage("Your order has been canceled and a refund has been initiated. Is there anything else I can help you with?");
        setStep(4);
      } else if (text.includes("resent")) {
        addBotMessage("Your order has been processed to be resent. Expected arrival is within 5 business days. Is there anything else I can help you with?");
        setStep(4);
      } else {
        addBotMessage("Hmm, I didn't quite catch that. Would you like to refund the order or would you like the package to be resent?");
      }
    } else if (step === 4) {
      // wrap up phase
      if (text.includes("yes") || text.includes("sure") || text.includes("ye")) {
        addBotMessage("Great! Please enter your 6-digit order number so I can assist you further.");
        setStep(0);
      } else if (text.includes("no") || text.includes("nope") || text.includes("nah")) {
        addBotMessage("Okay! If you need anything else, just enter your 6-digit oder number and I'll be here to help.");
        setStep(0);
      } else {
        addBotMessage("Thanks for chatting with me! If you need anything else, just enter your 6-digit order number and I'll be here to help.");
        setStep(0);
      }
    }
  };

  // random status message for traxking phase
  const randomStatus = () => {
    const statuses = [
      "in transit and arriving late due to weather conditions, expected April 10th",
      "in transit and arriving late due to a delay in processing, expected April 12th",
      "in transit and arriving late due to a delay in shipping, expected April 15th",
      "out for delivery today before 10pm"
    ];
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

  return (
    <div className = "chat-container">
      <div className = "chat-box">
        {messages.map((msg, i) => (
          <div key = {i} className = {`chat-bubble ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        <div ref = {chatEndRef} />
      </div>
      <form className = "chat-form" onSubmit={handleSumbit}>
        <input
          type = "text"
          value = {input}
          onChange = {(e) => setInput(e.target.value)}
          placeholder = "Type your message here..."
        />
        <button type = "submit">Send</button>
      </form>
    </div>
  );
}

export default App;
