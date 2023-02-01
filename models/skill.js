const skills = [
    {
      id: 1,
      name: "JavaScript",
      detail: "JavaScript is a high-level, interpreted programming language used to make interactive front-end web applications."
    },
    {
      id: 2,
      name: "React",
      detail: "React is a JavaScript library for building user interfaces, maintained by Facebook. It allows developers to create reusable UI components."
    },
    {
      id: 3,
      name: "Node.js",
      detail: "Node.js is a cross-platform, open-source runtime environment for executing JavaScript on the server-side. It allows developers to build fast and scalable network applications."
    },
    {
      id: 4,
      name: "MongoDB",
      detail: "MongoDB is a NoSQL document database. It provides scalability, high availability, and automatic sharding to allow for horizontal scaling of applications."
    },
    {
      id: 5,
      name: "CSS",
      detail: "CSS (Cascading Style Sheets) is a style sheet language used for describing the look and formatting of a document written in HTML or XML."
    },
    {
      id: 6,
      name: "HTML",
      detail: "HTML (Hypertext Markup Language) is the standard markup language used for creating web pages. It provides the structure and content of a web page."
    },
    {
      id: 7,
      name: "Git",
      detail: "Git is a version control system for software development. It allows developers to keep track of changes to their code and collaborate with others on a project."
    },
    {
      id: 8,
      name: "Agile methodologies",
      detail: "Agile methodologies are a set of iterative and incremental development processes that emphasize flexibility, collaboration, and customer satisfaction."
    }
];

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id); 
    return skills.find(skill => skill.id === id);
}