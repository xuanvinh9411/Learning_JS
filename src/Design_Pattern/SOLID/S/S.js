/** 
        Nguyên tắc trach nhiệm đơn lẻ 
        * #  Mỗi người mỗi trách nhiệm
        * #  Được tạo ra để áp dụng cho OOP , bây giờ JS có thể áp dụng
        -- Chi phí áp dụng có thể cao

        * ~ ==> a class should only have one reason to change 

        * !Cách hành động được giao cho một đối tượng phải phù hợp với chúng 
        * !Nếu có 2 lí do khác nhau để một đối tượng hoặc một class phải thay đổi thì tách thành 2 đối tượng hoặc 2 class 
        EX : kế toán thì ko thể đi code 
*/      



class Order {
        constructor(userId) {
               this.userId = userId, 
               this.timeOrder = Date.now(), 
               this.products = []
        }
}

class OrderManager {
        constructor(){
                this.order = null
        }

        createOder(userId){
                this.order = new Order(userId)
        }

        addProduct( product ){
                this.order.products.push(product)
        }

        getOrder(){
                return this.order
        }

        isValid(){
                return !!this.order.products.length
        }

        sendOrder(){
                if(this.isValid()){
                        //send mail 
                        // await fetch(`https://ecommerce.com/api/orders`)
                        /** 
                         * !nếu send mail tại đây vi phạm qui tắc trách nhiệm đơn lẻ */
                        //console.log(`Send Mail To https://ecommerce.com/api/orders ::`,this.order)
                        const sendMailOrder = new SendMailOrder()
                        this.orderSendMail = sendMailOrder.sendMail(this.order)
                }
        }
}

class SendMailOrder {
        sendMail(order){
                console.log(`Send Mail To https://ecommerce.com/api/orders ::`,order)
                return true
        }
}

const orderManage = new OrderManager()
orderManage.createOder('userId-101')
orderManage.addProduct({productId : 101 , quantity : 2 , price: 1000 , unit : 'USD'})
orderManage.addProduct({productId : 102 , quantity : 1 , price: 2000 , unit : 'VND'})

console.log(`Order Info::`,orderManage.getOrder())
console.log(`Order Info::`,orderManage.sendOrder())