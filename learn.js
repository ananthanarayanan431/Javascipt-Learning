const prompt = require("prompt-sync")({sigint:true});

let sumof = (a,b) => a+b;


const person = {
    name:"Anantha",
    age:19,
    shirt:"Blue"
};

const intro = (name,shirt)=> {
    function fun() {
        return person.assert - person.dept;
    }
    let person ={
        name:name,
        shirt:shirt,
        age:19,
        assert:100000,
        dept:5000,
        // net:function() {
        //     return this.assert - this.dept;
        // }
        net:fun
    };
    const intro = `Hi ${person.name} and ${person.net()}`;
    return intro;
}

// console.log(intro(person.name,person.shirt));


const double=(numbers)=>{
    let result=[]
    for (let num of numbers) {
        result.push(num**2);
    }
    return result;
}

// console.log(double([1,2,3,4,5,6]));


const lettercount = ()=> {
    const phase="Hello world";
    let count = 0;
    for (let word of phase.split(" ")) {

        count+=1;
    }
    return count;
}

const letterNumber = ()=> {
    let result=0;
    const phase="I am Anantha Narayanan";
    for (let word in phase) {
        result+=Number(word)+1;
    }
    console.log(phase.length);
    return {result};
}

console.log(letterNumber());