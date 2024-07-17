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

// ตอบคำถามตรงนี้จ้า O(log n) เพราะมีรอบในการวนลูปน้อยกว่า linear search  ที่ต้องเข้าไปเช็คทีละ index ทุกตัว (log n < n)