const prompt = require("prompt-sync")({sigint:true});

// MAP in javascript

let arr = [1,2,3,4,5,6];

let result = arr.map((num)=>num*2);

console.log(result);

let result1 = arr.filter((num)=>num*num>6);

console.log(result1);

let filter1 = (arr1) => {
    let res = []
    for (let num of arr1) {
        if (num > 3) {
            res.push(num);
        }
    }
    return res;
}

console.log(filter1(arr));

const actor = [
    {name:"Anantha",networth:100000},
    {name:"Narayanan",networth:10000},
    {name:"Wasteoftime",networth:0},
    {name:"viratKohli",networth:10110000000},
    {name:"MsDhoni",networth:10110022000},
    {name:"RohitSharma",networth:1011000020}
];


// console.log(anctor.filter((act)=>act.networth>100));

let ans = actor.reduce((prev,cuurent) => prev + cuurent.networth,0);;

console.log(ans);


