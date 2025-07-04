class Key {
    private signature: number;
    constructor() {
        this.signature = Math.random()
    } 
    getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: Key;
    constructor(key: Key) {
      this.key = key;
    }
    getKey(): Key {
      return this.key;
    }
  }

  abstract class House {
    door: boolean = false;
    key: Key;
    tenants: Person[] = [];

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);}
      return;
    }
    abstract openDoor(key: Key): void;
}
class MyHouse extends House {
    openDoor(key: Key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
        }
        return;
    }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};