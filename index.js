// localStorage.setItem("name", "lokesh"); //here method follow camel case conversion name and also value is seperaed key and value by comma
// alert(localStorage.getItem("name")); //to pint output of key in ui screen we use getItem() method
// sessionStorage.setItem("id", "is8919");
// console.log(sessionStorage.getItem("id"));
// sessionStorage.setItem("country", "india");
// sessionStorage.removeItem("country");
// sessionStorage.clear();
// s = { "name": "lokesh", "age": "25", "place": "pathagunta" };
// localStorage.setItem("key", s);
// console.log(localStorage.getItem(s)); //here we are unable to save object for solve this problem we want to convert this objext into sting by using object method.
s = { "name": "lokesh", "age": "25", "place": "pathagunta" };
localStorage.setItem("key", JSON.stringify(s))
alert(localStorage.getItem("key"))
s = JSON.parse(s) //here converst string to object from this point i am not getting output exactly i dont know the reason
alert(s.age)