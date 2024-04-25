var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var school = /** @class */ (function () {
    function school(name) {
        this.students = [];
        this.teachers = [];
        this.name = name;
    }
    school.prototype.addteacher = function (teobj) {
        this.teachers.push(teobj);
    };
    school.prototype.addStudent = function (stdobj) {
        this.teachers.push(stdobj);
    };
    return school;
}());
var student = /** @class */ (function () {
    function student(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
        //console.log(name,age,schoolName);
    }
    return student;
}());
var teacher = /** @class */ (function (_super) {
    __extends(teacher, _super);
    function teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return teacher;
}(student));
//school
var school1 = new school("falcon");
var school2 = new school("st.francis");
var school3 = new school("tabanis");
//student
var s1 = new student("zaib", 17, school1.name);
var s2 = new student("tabi", 15, school2.name);
var s3 = new student("areeb", 18, school3.name);
//teacher
var t1 = new teacher("zaiba", 29, school1.name);
var t2 = new teacher("tabinda", 25, school2.name);
var t3 = new teacher("areeba", 30, school3.name);
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
