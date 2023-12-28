/**
 * Dùng để clone các đối tượng
 */

class FifaOnlinePlayer{
    constructor(name,team,position,goals){
        this.name = name;
        this.team = team;
        this.position = position;
        this.goals = goals;
    }

    score(){
        this.goals++
    }

    clone(){
        return new FifaOnlinePlayer(this.name,this.team,this.position,this.goals)
    }

}

// Create a new fifaOnline player prototype 
const prototypePattern = new FifaOnlinePlayer('CR7','Al Nassr','FW' , 0)
//create multiple instance of the fifaonline plauyer
const cr7 = prototypePattern.clone() 
const m01 = prototypePattern.clone() 

m01.name = 'Messi'
m01.team = 'PSG'

cr7.score()
cr7.score()
console.log(`${cr7.name} has recored ${cr7.goals} this season`)

m01.score()
console.log(`${m01.name} has recored ${m01.goals} this season`)