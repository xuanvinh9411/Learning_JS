// Facade Pattern 
/* Giải quyết các hệ thống thanh toán nhiều bước như 
    + discount 
    + shipping
    + Fees
*/

class Discount {
   calc(value){
    return value * 0.9;
   }
}
//money ship
class Shipping {
    calc(){
     return 5;
    }
 }

 class Fees {
    calc(value){
     return value * 1.05;
    }
 }

 class ShopeeFacadePattern {
   constructor() {
      this.discount = new Discount(),
      this.shipping = new Shipping(),
      this.fees = new Fees()
   }
   calc(price){
      price = this.discount.calc(price),
      price = this.fees.calc(price),
      price += this.shipping.calc(fees)
      return price
   }
 }

 function buy(price){
   const shoppe = new ShopeeFacadePattern()
   console.log(`Price:: `,shoppe.calc(price))
 }

 buy(120000)