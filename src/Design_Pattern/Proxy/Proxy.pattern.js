/*
   Điều hướng Client query tới database
*/



class Leader {
    receiveRequest(offer){
        console.log(`result::: ${offer}`)
    }
}

// secrtary là proxy điều hướng developer to leader
class Secrtary {
    constructor(){
        this.leader = new Leader()
    }

    receiveRequest(offer){
        this.leader.receiveRequest(offer)
    }
}

class Developer{
    constructor(offer){
        this.offer = offer
    }

    applyFor(target){
        target.receiveRequest(this.offer);
    }
}

const secrtary = new Secrtary()

const developer = new Developer('5000')

developer.applyFor(secrtary)