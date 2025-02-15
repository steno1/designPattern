Observer Pattern Example

📜 Overview

This project demonstrates the Observer Pattern using a telephone system. The Observer Pattern allows multiple objects (observers) to react when the state of another object (subject) changes.

🛠️ Files

telephone.js - Contains the implementation of the Observer Pattern.

🚀 Getting Started

📥 Installation

Clone this repository:

git clone https://github.com/steno1/designPattern.git

Navigate to the project directory:

cd designpattern

Run the script:

node telephone.js

📌 Usage

Features:

Add phone numbers to the telephone.

Remove phone numbers from the telephone.

Dial a phone number, triggering notifications to observers.

Add or remove observers that receive updates on dialing events.

Example:

// Create Telephone object
const telephone = new Telephone();

// Create Observers
const observer1 = new Observer('Observer1', (number) => {
  console.log(`Observer1: ${number}`);
});

const observer2 = new Observer('Observer2', (number) => {
  console.log(`Observer2: Now Dialling ${number}`);
});

// Add Observers
telephone.addObserver(observer1);
telephone.addObserver(observer2);

// Add and Dial Phone Numbers
telephone.addPhoneNumber('2347023232');
telephone.dialPhoneNumber('2347023232');

📂 Project Structure

designPattern/
├── telephone.js
└── README.md

💡 How It Works

Telephone (Subject): Manages phone numbers and observers. Notifies observers when a number is dialed.

Observer: Defines how to react to dial notifications.

notifyObservers(): Sends updates to all registered observers.

🧪 Example Output

Phone number 2347023232 added.
Phone number 2348031234567 added.
Dialling 2347023232...
Observer1: 2347023232
Observer2: Now Dialling 2347023232
Phone number 2347023232 removed.
Phone number 2347023232 has not been added.

📝 Notes

Ensure Node.js is installed to run the script.

The code is designed to be clean and easy to understand.

📧 Contact

For issues or suggestions, feel free to create an issue on GitHub.

