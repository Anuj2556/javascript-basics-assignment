//1: Variables
let x=10;
{
    let x=20;
    console.log(x);
}console.log(x);
/*Expected:20     
         10*/
console.log(x+20)//30

//2: Type convertion
console.log(`\n${"5"+2}`);//52
console.log("5"-2);//3
console.log(true+1);//2
console.log(false-2)//-2


//3: Array Methods
const nums=[1,2,3,4,5];
const res=nums.map(num=>num*2);
console.log(`\n${res}`);  //[2,4,6,8,10]


//4: Filter Even Numbers
const filter=nums.filter(num=>num%2===0);
console.log(`\n${filter}`);  //[2,4]
//Edge case: filtering an empty array [] returns []


//5:Function with default parameter
function greet(name="Anuj"){
    return `Hello ${name}`;
}
console.log(`\n${greet()}`);  //Hello Anuj
console.log(greet("XYZ"));  //Hello XYZ


//6: Objects
const student={
    name: "Anuj",
    cgpa: 9.63
};
console.log(`\n${student.name}`); //Anuj
console.log(student.cgpa);  //9.63


//7: Reduce Method
const marks=[68,90,88];
const reduced=marks.reduce((sum,mark)=>sum+mark,0);
console.log(`\n${reduced}\n`);  //246


//8: Counter 
function tp(){
    let count=0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter=tp();
counter();//1
counter();//2
counter();//3


//9: Removing duplicates
const arr=[1,2,2,3,3,3,4,5];
const unique=[...new Set(arr)]
console.log(`\n${unique}\n`)  //[1,2,3,4,5]
// removing duplicates from an already unique array leaves it unchanged


//10:  String reverse
const str="Java Script";
const reversed=str.split("").reverse().join("");
console.log(reversed);   //tpircS avaJ
