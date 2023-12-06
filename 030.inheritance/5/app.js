class Main{
    hello(){
        console.log('Hello');
    }
}

class Low extends Main{
    word(){
        console.log('Word');
    }
}

const low = new Low();

low.hello()
low.word()