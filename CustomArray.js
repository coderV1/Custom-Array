function myArray() {
    Object.defineProperty(this, "length", {
      value: 0,
      writable: true,
      enumerable: false,
    });
  
    this.length = arguments.length;
  
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
      
    }
  }
  let arr1=new myArray(1,2,3,4,5)
  // console.log(Object.values(arr1))
  
  myArray.prototype.customPush=function(value){
      this[this.length]=value;
      this.length++
  }
  
  arr1.customPush(8)
  console.log(Object.values(arr1))
  
  
  
  myArray.prototype.customPop=function(){
      delete this[this.length-1]
      this.length--
  }
   arr1.customPop()
   
   console.log(Object.values(arr1))
  
   
  myArray.prototype.top=function(){
    console.log(this[this.length-1])  
  }
  arr1.top()
  
  
   myArray.prototype.customPrint = function () {
     console.log(Object.values(this));
   };
  arr1.customPrint()
  
  myArray.prototype.printReverse = function(){
    console.log(Object.values(this).reverse())
  }
  arr1.printReverse()
  
  
  myArray.prototype.size=function(){
      console.log(this.length)  
  }
  arr1.size()