class Main {
    hello() {
        console.log(2+2);
    }
}

class Low extends Main {
    word() {
        super.hello()
        console.log(`4`);
    }
}

const low = new Low();

low.word()