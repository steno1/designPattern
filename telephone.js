// Observer Pattern
class Telephone {
  constructor() {
    this.phoneNumbers = new Set(); 
    this.observers = []; 
  }

  addPhoneNumber(number) {
    this.phoneNumbers.add(number);
    console.log(`Phone number ${number} added.`);
  }

  removePhoneNumber(number) {
    if (this.phoneNumbers.has(number)) {
      this.phoneNumbers.delete(number);
      console.log(`Phone number ${number} removed.`);
    } else {
      console.log(`Phone number ${number} not found.`);
    }
  }

  dialPhoneNumber(number) {
    if (this.phoneNumbers.has(number)) {
      console.log(`Dialling ${number}...`);
      this.notifyObservers(number); 
    } else {
      console.log(`Phone number ${number} has not been added.`);
    }
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(number) {
    this.observers.forEach(observer => observer.update(number));
  }
}

class Observer {
  constructor(name, action) {
    this.name = name;
    this.action = action; 
  }

  update(number) {
    this.action(number);
  }
}

const telephone = new Telephone();

const observer1 = new Observer('Observer1', (number) => {
  console.log(`Observer1: ${number}`);
});

const observer2 = new Observer('Observer2', (number) => {
  console.log(`Observer2: Now Dialling ${number}`);
});

telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.addPhoneNumber('2347023232');
telephone.addPhoneNumber('2348031234567');

telephone.dialPhoneNumber('2347023232'); 
telephone.dialPhoneNumber('2348031234567');

telephone.removePhoneNumber('2347023232');
telephone.dialPhoneNumber('2347023232');
