//Task1
function showMessage(){
    console.log("Hello, welcome to the website!")
}
showMessage();

//task2
result='';
function count(){
    for(var i=1;i<=10;i++){
        result+=i+" "
    }
    console.log(result);
}
count();

//task3
var n=2;
function multiplication(){
    for(var i=1;i<=10;i++){
        result=n*i
        console.log(`2x${i}=${result}`)
    }
}
multiplication();

//task4
result='';
function odd(){
    for(var i=1;i<=10;i++){
        if(i%2!=0){
            result+=i+" ";
        }
    }
    console.log(result);
}
odd();

//task5
result='';
function countdown(){
    for(var i=5;i>=1;i--){
        result+=i+" " ;
    }
    console.log(result);
}
countdown();

//task6
function greetuser(){
    console.log("Good day, user!")
}
greetuser();

//task7
function even(){
    for(var i=1;i<=10;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
even();

//task8
function farewellmessage(){
    console.log("Thank you for visiting, goodbye!");
}
farewellmessage();

//task9
function squares(){
    for(var i=1;i<=5;i++){
        console.log(i*i);
    }
}
squares();

//task10
function repeatWelcome(){
    for(var i=1;i<=3;i++){
        console.log("Welcome!");
    }
}
repeatWelcome();
