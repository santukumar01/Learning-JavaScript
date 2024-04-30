class User {
    constructor(username) {
        this.username = username;
    }

    static printMe() {
        console.log(`${this.username}`);
    }


}

const user = new User("santu");

user.printMe();  // santu

// after using staic keyWord cannt access
// user.printMe(); -> error