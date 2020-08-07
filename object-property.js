const students=[
    {id:12,name:"Atif Aslam"},
    {id:21,name:"Arijit Singh"},
    {id:34,name:"Shereya Ghoshal"},
    {id:45, name:"Ankit Tiwari"}


//     const output=[];

// for (let i = 0; i < students.name; i++) {
//     const element = students.name[i];
//     numbers[i]=students.name
//     students.name=output.push;

//     return element;
    
    
// }
// console.log(output);






    
];

const names=students.map(s=>s.name);
const ids=students.map(s=>s.id);
const bigger=students.filter(s=>s.id>30);
const biggerOne=students.find(s=>s.id>30);
console.log(biggerOne);
// console.log(ids);




