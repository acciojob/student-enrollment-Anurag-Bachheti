const enrollmentData = {
  enrollmentData: [
    { student: "Alice", course: "Math" },
    { student: "Bob", course: "Math" },
    { student: "Charlie", course: "English" },
    { student: "David", course: "Science" },
    { student: "Eve", course: "Math" },
    { student: "Frank", course: "English" },
  ],
};

// complete this function
async function calculateEnrollment(data){
	
	const result = data.enrollmentData.reduce((acc, curr) => {
		if(acc[curr.course]){
			acc[curr.course] += 1;
		}else{
			acc[curr.course] = 1;
		}
		return acc;
	}, {});
	console.log(result);

	let container = document.getElementById("container");
	container.textContent = JSON.stringify(result, null, 2)
}

calculateEnrollment(enrollmentData);
