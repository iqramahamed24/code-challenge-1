
//Call a fuction to generate student grades 
function generateStudentGrade(marks) {
   // if the marks are more than 79 return A
   if (marks >79){
    return "A"
    //if marks are not more than 79 or if they are 60 or greater than 60 
   }else if(marks >=60){
    return "B" //return B

    //if the marks are not equal to 60 , check if its greater than 49 or equal
   }
   else if (marks >=49) {
    return "C" // return C

   }// if marks are not eual to 49, check if its greater or equal to 40
   else if (marks >=40){
    return "D" // return D

   }
   //if marks are less than 40 or equal to 40 , return E
   else{
    return "E"
   }

}
const marks = 89

console.log(generateStudentGrade(marks))