//Deliverable W04D01 - OOJS & Classes

    // Lab 1 - ATM
console.log(`__________ LAB 1 __________`);
class Atm {
    constructor(type, backupAccount){
        this.type = type;
        this.tType = "";
        this.money = 0;
        this.transactionHistory = [];
        this.backupAccount = backupAccount;
        }

    withdraw(amount){
        this.tType = "Withdraw";
        this.money = (this.money - amount);
        this.transactionHistory.push({accountType: this.type, transactionType: this.tType, amount: amount, balance: this.money});
        console.log(`${this.tType} : $ ${amount}`);
        if(this.money < 0 && this.backupAccount > Math.abs(this.money)){
            let deficit = this.money*-1;
            this.backupAccount = this.backupAccount - deficit;
            this.transactionHistory.push({accountType: "Backup", transactionType: "Withdraw", amount: deficit, backupAccountBalance: this.backupAccount});
            this.money = this.money + deficit;
            this.transactionHistory.push({accountType: this.type, transactionType: "Deposit", amount: deficit, balance: this.money }); 
        }
        else{
            console.log(`Not enough money in the backup account to cover your deficit`);
        }

    }
    deposit(amount){
        this.tType = "Deposit";
        this.money = (this.money + amount);
        this.transactionHistory.push({accountType: this.type, transactionType: this.tType, amount: amount, balance: this.money });
        console.log(`${this.tType} : $ ${amount}`);
    }
    showBalance (){
        console.log(`Balance available is $ ${this.money}`);
    }
    transactionLog(){
        console.log(this.transactionHistory)
    }

}
let account = new Atm("Checking", 1000);
console.log(account.type)
account.showBalance();
account.deposit(900);
account.withdraw(2000);
account.showBalance();
account.transactionLog();
account.backupAccount += 2000;
console.log(account.backupAccount);
account.withdraw(200);
account.transactionLog();
account.showBalance();


// LAB 2 - Record Albums

console.log(`__________ LAB 2 __________`);
class RecordAlbum {
    constructor(artistName, albumName, songs, currentSong){
        this.artistName= artistName;
        this.albumName = albumName;
        this.songs = songs;
        this.currentSong = currentSong;
    }
    nextSong(){
        let nextSongIndex = this.songs.indexOf(this.currentSong)+1;
        console.log(`Next ${this.songs[nextSongIndex]} by ${this.artistName} from ${this.albumName}`);
    }
    previousSong(){
        let previousSongIndex = this.songs.indexOf(this.currentSong)-1;
        console.log(`Next ${this.songs[previousSongIndex]} by ${this.artistName} from ${this.albumName}`);
    }
    get artistName(){
        return this._artistName.toUpperCase();
    }
    get albumName(){
        return this._albumName.toUpperCase();
    }
    get songs(){
        return this._songs;
    }
    set artistName (newArtistName){
        this._artistName = newArtistName;
    }
    set albumName (newAlbumName){
        this._albumName = newAlbumName;
    }
    set songs (newSongs){
        this._songs = newSongs;
    }
} 
let record = new RecordAlbum("Artist 1", "Album 1", ["Song Before","Current Song", "Song After"], "Current Song");
record.nextSong();
record.previousSong();
console.log(record.artistName);
record.artistName = "Artist 2";
record.nextSong();


// // LAB 3 - Classes Body Shop 
console.log(`__________ LAB 3 __________`);
class Car {
    constructor(make, model, year, color, seats, passengers) {
        this.make = make;
        this.model= model;
        this.year = year;
        this.color = color;
        this.seats = seats;
        this.previousOwner = [];
        this.owner = "Manufacturer";
        this.running = false;
        this.passengers = [];   
    }
    sell(newOwner) {
        this.previousOwner.push(this.owner);
        this.owner = newOwner;
    }
    paint(newColor){
        this.color = newColor;
    }
    start(){
        this.running = true;
    }
    off(){
        this.running = false;
    }
    driveTo(destination){
        if(this.running){
            console.log(`Driving to ${destination}`);
            return true;
        }
        else{
            return false;
        }
    }
    park(){
        if (!this.running){
            console.log(`Parked !!`);
            return true;
        }
        else{
            return false;
        }
    }
    
    pickUp(name){
        let availableSeats =this.seats - this.passengers.length -1;    
        if (this.seats > 1 && this.running && availableSeats > 0){
            console.log(`Driving to pickup ${name}`);
            this.passengers.push(name);
            return true;
        }
        else{
            return false;
        }
    }
    dropOff(name){
        if (this.passengers.indexOf(name) >= 0 && this.running){
        let index = this.passengers.indexOf(name);
        this.passengers.splice(index,1);
        console.log(`driving to drop off ${name}`);
        return true;
        }
        else {
            return false;
        }
    }
    passengerCount(){
        if (this.passengers.length < this.seats){
            return (`There are ${this.passengers.length} passengers`);
        }
    }
}   

let bus = new Car("Toyota","Bus",2015,"white", 10);
console.log(bus.running);
bus.sell("A");
bus.sell("B");
console.log("Current owner : "+bus.owner);
console.log("Previous owners : "+bus.previousOwner);
console.log(bus.color);
bus.paint("red");
console.log(bus.color);
console.log(bus.passengerCount());
bus.start();
console.log(bus.running);
bus.off();
console.log(bus.running);
bus.start();
bus.driveTo("Manama");
bus.off();
bus.park();
bus.start();
bus.pickUp("Ahmed");
console.log(bus.passengers);
bus.pickUp("Jamal");
console.log(bus.passengers);
console.log(bus.passengerCount());
bus.dropOff("Ali");
console.log(bus.passengerCount());
bus.dropOff("Jamal");
console.log(bus.passengerCount());
console.log(bus.passengers);



