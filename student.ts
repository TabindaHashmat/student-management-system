class school {
    name: string;

    students: student[]=[];
   
    teachers: teacher[]=[];


    addteacher(teobj: student){
          this.teachers.push(teobj)
    }
    addStudent(stdobj: teacher){
        this.teachers.push(stdobj)
  }


    constructor(name : string) {
        this.name = name;
    }
}
class student{
    name: string;
    age: number;
    schoolName: string;
    constructor(name: string, age: number, schoolName: string){
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
  //console.log(name,age,schoolName);
}
}
class teacher extends student{}
//school
let school1= new school("falcon");
let school2= new school("st.francis");
let school3= new school("tabanis");





//student
let s1 = new student ("zaib",17,school1.name);
let s2 = new student ("tabi",15,school2.name);
let s3 = new student ("areeb",18,school3.name);

//teacher
let t1 = new teacher ("zaiba",29,school1.name);
let t2 = new teacher ("tabinda",25,school2.name);
let t3 = new teacher ("areeba",30,school3.name);





// console.log(s1);
// console.log(s2);
// console.log(s3);
// console.log(school1);
// console.log(school2);
// console.log(school3);

school1.addStudent(s1);
school2.addStudent(s2);
school3.addStudent(s3);


school1.addteacher(t1);
school2.addteacher(t2);
school3.addteacher(t3);

console.log(t1);
console.log(t2);
console.log(t3);

console.log(school1);
console.log(school2);
console.log(school3);