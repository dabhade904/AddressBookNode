class AddressBook{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    constructor(...params){
        this.firstName=params[0];
        this.lastName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phoneNumber=params[6];
        this.email=params[7];
    }
    toString(){
        return " Name : "+this.firstName+" "+this.lastName+" Address "+this.address+" "+this.city+" "+this.state+" "+this.zip+" Phone Number "+" Email "+this.email;
    }
}
 console.log("welcome");
 let address= new AddressBook("sachin","dabhade","shekta","bidkeen","mh",431105,93097339906,"dabahde904@gmail");
 console.log("Address are : "+address);
