const courses = [
    {name: "Web Development", credits: 3, completed: true},
    {name: "Teachings and Doctrine of the Book of Mormon", credits: 3, completed: false},
    {name: "Organizational Leadership", credits: 3, completed: false}
];

function displayCourses() {
    const courseList = document.querySelector('.course-list');
    courseList.innerHTML = '';

    courses.forEach(course => {

        const courseElement = document.createElement('div');
        courseElement.classList.add('course');

        const courseName = document.createElement('div');
        courseElement.classList.add('course');

        const courseCredits = document.createElement('div');
        courseElement.classList.add('course');

        if (course.completed) {
            courseElement.classList.add('completed');
        }

        courseElement.appendChild(courseName);
        courseElement.appendChild(courseCredits);
        courseList.appendChild(courseElement);
    });
}

function filterCourses(courseType) {
    const filterCourses = courses.filter(course => courseType === 'all' || course.name.includes(courseType)); /* === is strict equality (no conversion), || is used for logical OR (returns true if either of the conditions is true) */
    displayCourses(filteredCourses);
}

document.addEventListener('DOMContentLoaded', displayCourses);

function filterCourses(type) {
    let courses = document.querySelectorAll(".course");
    courses.forEach(course => {
        if (type === "all" || course.classList.contains(type.toLowerCase())) {
            course.style.display = "inline-block";
        } else {
            course.style.display = "none";
        }
    });
}