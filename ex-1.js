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

// ตอบคำถามตรงนี้จ้า O(log n) เพราะ binary search มีการแบ่งและเข้าถึงสมาชิกเพียงครึ่งหนึ่งทุกครั้งที่วนลูป ทำให้ในการวนลูปครั้งถัดไปจำนวนสมาชิกที่เข้าถึงจะน้อยลงครึ่งหนึ่งไปเรื่อยๆ ดังนั้นความสัมพันธ์ระหว่าง "จำนวนสมาชิกที่เข้าถึง (สะสมตั้งแต่การวนลูปครั้งแรก)" และ "จำนวนครั้งการวนลูป" เป็นแบบ logarithm