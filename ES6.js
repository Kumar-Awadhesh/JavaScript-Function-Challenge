//Function to combine two array using spread operator.
function combine_array(fruits,vegetables){
    let groceries=[...fruits, ...vegetables]
    return(groceries)
}

//calling the function to print the combined array.
let array=combine_array(["apple", "banana", "orange"],["carrot", "broccoli", "spinach"])
console.log(array)

//Function to clone object using spread operator.
function clone_object(person){
    let person_copy={...person}
    return(person_copy)
}

//calling the function to print the cloned obejct.
let person1=clone_object({name:"Awadhesh", age:26, address:"Patna Bihar"})
console.log(person1)

//Function to merge object using spread operator.
function merge_object(student,course){
    let student_with_course={...student, ...course}
    return(student_with_course)
}

//calling the function to print the merged object.
let faculty=merge_object({name:"Awadhesh", age:26},{course_name:"Java Script", teacher:"Huzaifa Sheikh"})
console.log(faculty)

//Function to combine nested array using spread operator.
function nested_array(array1,array2){
    let new_array=[...array1, ...array2]
    return(new_array)
}

//calling the function to print the combined nested array.
let arr=nested_array([[1,2],[3,4],[5,6]], [[7,8],[9,10],[11,12]])
console.log(arr)