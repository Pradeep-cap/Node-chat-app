# Node-chat-app

This is a simple command-line chat application built using Node.js and the net module. Multiple clients can connect to the server and chat with each other in real time via the terminal.

🚀 Features
Multiple clients can join and chat together

Messages broadcast to all other clients

Simple terminal-based client (no external dependencies)

Clean and minimal code

🛠️ Requirements
Node.js installed on your system

📁 Project structure
arduino
Copy
Edit
.
├── chattapp.js    # Server file
├── client.js      # Client file
└── README.md
💡 How it works
You start a server using chattapp.js.

You start one or more clients using client.js.

Each client can type messages, which are broadcast to all other connected clients.

⚙️ Usage
1️⃣ Start the server
bash
node chattapp.js

You will see:
Chat server running on port 5000


2️⃣ Start a client (new terminal)
bash
node client.js

You will see:
Connected to the chat server!



3️⃣ Start more clients (open more terminals and run node client.js)
Type messages in any client terminal — all other clients will receive them.

🧹 Extra features
✅ You can add:



💬 Example chat flow

Client 1 terminal:
Connected to the chat server!
> Hi everyone

Client 2 terminal:
Connected to the chat server!
> 
Hi everyone


📝 License
This project is open source and free to use under the MIT license.

🤝 Contributing
Pull requests and suggestions are welcome!
