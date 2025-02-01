document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".bars");
  const navbar = document.querySelector(".navbar");

  menuButton.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const loginModal = document.getElementById("login");
  const closeLogin = document.getElementById("close-login");

  document.querySelector(".button-navbar").addEventListener("click", () => {
    loginModal.classList.remove("hidden");
  });

  closeLogin.addEventListener("click", () => {
    loginModal.classList.add("hidden");
  });

});

function toggleChat() {
  var chatbox = document.getElementById("chatbox");
  chatbox.style.display = chatbox.style.display === "none" || chatbox.style.display === "" ? "flex" : "none";
}

function sendMessage() {
  const chatInput = document.getElementById('chatInput');
  const chatboxBody = document.getElementById('chatboxBody');
  
  const message = chatInput.value.trim();
  
  if (message) {
    const newMessage = document.createElement('p');
    newMessage.textContent = message;
    chatboxBody.appendChild(newMessage);
    
    chatInput.value = '';
  }
}
