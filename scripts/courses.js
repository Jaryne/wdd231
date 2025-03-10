const courses = [
    { name: "Web Development", credits: 3, completed: true },
    { name: "Teachings and Doctrine of the Book of Mormon", credits: 3, completed: false },
    { name: "Organizational Leadership", credits: 3, completed: false }
];

function displayCourses(filteredCourses = courses) {
    const courseList = document.getElementById('courses'); // Make sure this ID exists in your HTML!
    if (!courseList) {
        console.error("Element with ID 'courses' not found.");
        return;
    }

    courseList.innerHTML = ''; // Clear existing content

    filteredCourses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course');

        const courseName = document.createElement('div');
        courseName.classList.add('course-name');
        courseName.textContent = course.name;

        const courseCredits = document.createElement('div');
        courseCredits.classList.add('course-credits');
        courseCredits.textContent = `Credits: ${course.credits}`;

        if (course.completed) {
            courseElement.classList.add('completed');
        }

        courseElement.appendChild(courseName);
        courseElement.appendChild(courseCredits);
        courseList.appendChild(courseElement);
    });
}

function filterCourses(courseType) {
    const filteredCourses = courses.filter(course => 
        courseType === 'all' || course.name.toLowerCase().includes(courseType.toLowerCase())
    );
    displayCourses(filteredCourses);
}

document.addEventListener('DOMContentLoaded', () => displayCourses());