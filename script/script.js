const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },

  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },

  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

//     Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"]
// - яка повертає список предметів для конкретного студента. Зверніть увагу –
// назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

function getSubjects(students) {
  const getSub = Object.keys(students.subjects);
  return getSub.map((subject) => {
    return (
      subject.toUpperCase().charAt([0]) + subject.slice(1).replace("_", " ")
    );
  });
}
console.log(getSubjects(students[0]));

// // Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню
// // оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.
// Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у
// попередніх домашніх завданнях :)

function getAverageMark(student) {
  const allMarks = Object.values(student.subjects).flat();
  const getAverage = (
    allMarks.reduce((a, b) => a + b, 0) / allMarks.length
  ).toFixed(2);
  return getAverage;
}
console.log(getAverageMark(students[0]));

// Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya",
// "averageMark": 3.79} – яка повертає інформацію загального виду по переданому
// студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути
// виведена інформація: курс, ім'я, середня оцінка.

function getStudentInfo(students) {
  return {
    course: students.course,
    name: students.name,
    averageMark: getAverageMark(students),
  };
}
console.log(getStudentInfo(students[0]));

// Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка
// повертає імена студентів у алфавітному порядку.

function getStudentsNames(students) {
  const studentsNames = [];
  for (let key of students) {
    studentsNames.push(key.name);
  }
  return studentsNames.sort();
}
console.log(getStudentsNames(students));

// Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого
// студента зі списку по показнику середньої оцінки.

function getBestStudent(students) {
  let studentsList = [];
  for (let student of students) {
    const data = {
      studentName: student.name,
      studentMark: getAverageMark(student),
    };
    studentsList.push(data);
  }
  studentsList.sort((a, b) => {
    return parseFloat(a.studentMark) - parseFloat(b.studentMark);
  });
  const bestStudent = studentsList[studentsList.length - 1];
  return bestStudent.studentName;
}
console.log(getBestStudent(students));

// // Cтворіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка
// // повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх
// // повторень.

function calculateWordLetters(text) {
  const arr = text.split("");
  const lettersObject = {};
  for (let letter of arr) {
    lettersObject[letter] = lettersObject[letter]
      ? lettersObject[letter] + 1
      : 1;
  }
  return lettersObject;
}
console.log(calculateWordLetters("applejuice"));
