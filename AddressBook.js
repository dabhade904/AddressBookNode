class AddressBook {
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
    get firstName() {
        return this._firstName
    }
    set firstName(firstName) {
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (firstNameRegex.test(firstName)) {
            this._firstName = firstName;
        }
        else {
            throw "First name is incorrect !"
        }
    }

    get lastName() {
        return this._lastName
    }
    set lastName(lastName) {
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (lastNameRegex.test(lastName)) {
            this._lastName = lastName;
        }
        else {
            throw "Last name is incorrect !"
        }
    }

    get address() {
        return this._address
    }
    set address(address) {
        let addressRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (addressRegex.test(address))
            this._address = address;
        else throw "Address is incorrect !"
    }

    get city() {
        return this._city
    }
    set city(city) {
        let cityRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (cityRegex.test(city))
            this._city = city;
        else throw "City is incorrect !"
    }

    get state() {
        return this._state
    }
    set state(state) {
        let stateRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (stateRegex.test(state))
            this._state = state;
        else throw "State is incorrect !"
    }

    get zip() {
        return this._zip
    }
    set zip(zip) {
        let zipRegex = RegExp("^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$");
        if (zipRegex.test(zip))
            this._zip = zip;
        else throw "Zip is incorrect !"
    }

    get phoneNumber() {
        return this._phoneNumber
    }
    set phoneNumber(phoneNumber) {
        let phoneNumRegex = RegExp("^[0-9]{2,2}[ ][7,8,9]{1,1}[0-9]{9}$");
        if (phoneNumRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw "Phone Number is incorrect !"
    }

    get email() {
        return this._email
    }
    set email(email) {
        let emailRegex = RegExp("^[a-zA-Z0-9]([._+-]{0,1}[a-zA-Z0-9])*[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2,3}){0,1}$");
        if (emailRegex.test(email))
            this._email = email;
        else throw "Email is incorrect !";
    }
    toString() {
        return " Name : " + this.firstName + " " + this.lastName + " Address " + this.address + " " + this.city + " " + this.state + " " + this.zip + " Phone Number " + " Email " + this.email;
    }
}

console.log("welcome");
let addressBook = new AddressBook("Mahesh", "Bhavar", "Shekta", "Bidkeen", "Maharashtra", "431105", "91 8888948943", "dabhade904@gmail.com");
try {
    addressBook.firstName = "Sc";
    console.log(addressBook.toString());
} catch (e) {
    console.error(e);
}

try {
    addressBook.lastName = "bhavar";
    console.log(addressBook.toString());
} catch (e) {
    console.error(e);
}

try {
    addressBook.address = "shekta";
    console.log(addressBook.toString());
} catch (e) {
    console.error(e);
}

try {
    addressBook.city = "aurangabad";
    console.log(addressBook.toString());
} catch (e) {
    console.error(e);
}

try {
    addressBook.state = "maharashtra";
    console.log(addressBook.toString());
} catch (e) {
    console.error(e);
}

try {
    addressBook.zip = "4311b4";
    console.log(addressBook.toString());
} catch (e) {
    console.error(e);
}

try {
    addressBook.phoneNumber = "980973990";
    console.log(addressBook.toString());
} catch (e) {
    console.error(e);
}

try {
    addressBook.email = ".abc@abc.com";
    console.log(addressBook.toString());
} catch (e) {
    console.error(e);
}