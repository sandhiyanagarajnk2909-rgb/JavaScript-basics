//array concatenate 

schoolAstudents = ['sandy', 'paapu'];
schoolBstudents = ['sandhiya', 'keerthu'];

students = schoolAstudents.concat(schoolBstudents);

console.log(students);

//ARRAY-spread operator

subjectA = ['tamil', 'english','maths'];
subjectB = ['science', 'chemistry', 'physics'];

allSubjests = [...subjectA,...subjectB];


//OBJECT - SPREAD OP

studentName= {
    firstName : 'Sandhiya',
    lastName : 'N',

}

studentDetails = {
    age : '20',
    gender :'f',

}

student = {...studentName,...studentDetails};

console.log(student);

//string

nameofStudent = "Sandhiya";
ans = [...nameofStudent]

console.log(ans);



