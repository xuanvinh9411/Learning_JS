
//================================Observer pattern================================;
//join nhiều người vào một nhóm . Nhóm đó thực hiện mợt action 
/* Nhiều người quan sát một đối tượng 
Nhưng thực hiện nhiều hành vi 
ex: nhiều người quan sát đèn xanh đỏ nhưng chạy nhiều hướng

Thông báo cho user nào trong một group
*/
//tạo hero
// class Observer {
//     constructor(name){
//         this.namePick = name
//     }
//     updateStatus(location){
//         this.goToHelp(location)
//     }

//     goToHelp( location ){
//         console.log(`${this.namePick} ::::PING ${JSON.stringify(location)}`)
//     }
// }

// //thực hiện action hero
// class Subject{
//     constructor(){
//         this.observerList = []
//     }
//     //add many hero for team
//     addObserver(observer){
//         this.observerList.push(observer)
//     }
//     //push location for team
//     notify(location){
//         this.observerList.forEach(observer => observer.updateStatus(location))
//     }
// }


// const vanhein =  new Observer('Vanheil')
// const Maloc   =  new Observer('Maloc')

// const subject = new Subject()
// subject.addObserver(vanhein)
// subject.addObserver(Maloc)

// subject.notify({long: 123 , lat :345 })

//exp 2 
class Observer {
    constructor(user){
        this.user  = user 
    }

    truigc(igc){
        this.user.igc -= igc
        this.getquy(igc)
    }

    conghtd(htd){
        this.user.htd += htd
        this.getquy(htd)
    }

    getquy(price){
        console.log(`thong tin user ${price}`,this.user)
    }
}

class groupquyengop {
    constructor(){
        this.users = [ ]
    }

    addvaogroup(user){
        this.users.push(user)
    }

    thuchienquyengop(igc){
        this.users.forEach(user => user.truigc(igc))
    }

    thuonghtd(htd){
        this.users.forEach(user => user.conghtd(htd))
    }

}

const vinh = new Observer({name :"vinh",igc : 200, htd : 0});
const ben = new Observer({name :"ben",igc : 100, htd : 100});

const group = new groupquyengop();

group.addvaogroup(vinh)
group.addvaogroup(ben)
l
group.thuchienquyengop(100)
group.thuonghtd(100)