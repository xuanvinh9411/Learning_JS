
//================================Observer pattern================================;
/* Nhiều người quan sát một đối tượng 
Nhưng thực hiện nhiều hành vi 
ex: nhiều người quan sát đèn xanh đỏ nhưng chạy nhiều hướng

Thông báo cho user nào trong một group
*/
//tạo hero
class Observer {
    constructor(name){
        this.namePick = name
    }
    updateStatus(location){
        this.goToHelp(location)
    }

    goToHelp( location ){
        console.log(`${this.namePick} ::::PING ${JSON.stringify(location)}`)
    }
}

//thực hiện action hero
class Subject{
    constructor(){
        this.observerList = []
    }
    //add many hero for team
    addObserver(observer){
        this.observerList.push(observer)
    }
    //push location for team
    notify(location){
        this.observerList.forEach(observer => observer.updateStatus(location))
    }
}

const subject = new Subject()

const vanhein =  new Observer('Vanheil')
const Maloc   =  new Observer('Maloc')

subject.addObserver(vanhein)
subject.addObserver(Maloc)

subject.notify({long: 123 , lat :345 })