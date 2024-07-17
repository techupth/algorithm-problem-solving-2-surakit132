function findStudentIndex(students, searchStudent) {
	let left = 0;
    let right = students.length - 1;
  
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (students[mid] === searchStudent) {
            return mid;
        } else if (students[mid] < searchStudent) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

let students = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"]
let searchStudent = "John"

console.log(findStudentIndex(students, searchStudent))


// ตอบคำถามตรงนี้จ้า O(log n)