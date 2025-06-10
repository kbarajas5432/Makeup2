const chatContainer = document.getElementById('chat-container');
const chatForm = document.getElementById('chat-form');
const inputField = document.getElementById('user-input');

const botReplies = [
  "Presto...100 points!",
  "Your wish is my command!",
  "That’s a great idea!",
  "The stars align... granted!",
  "I see it in my crystal ball...",
];

function appendMessage(sender, message, isUser = false) {
  const msg = document.createElement('div');
  msg.classList.add('message', isUser ? 'user-msg' : 'bot-msg');
  msg.innerHTML = `<strong>${sender}</strong><br>${message}`;
  chatContainer.appendChild(msg);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userText = inputField.value.trim();
  if (!userText) return;

  appendMessage('YOU', userText, true);
  inputField.value = '';

  setTimeout(() => {
    const reply = botReplies[Math.floor(Math.random() * botReplies.length)];
    appendMessage('GENIE', reply);
  }, 600);
});