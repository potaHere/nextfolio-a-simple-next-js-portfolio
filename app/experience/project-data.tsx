export interface Project {
  role: string;
  employmenttype: string;
  startdate: string;
  enddate: string;
  company: string;
  location: string;
  locationtype: string;
  description: string;
}

export const projects: Project[] = [
  {
    role: "Cloud Engineer",
    employmenttype: "Internship",
    startdate: "Sep 2024",
    enddate: "Dec 2024",
    company: "Social Economic Accelerator Lab (SEAL)",
    location: "Malang, East Java, Indonesia",
    locationtype: "Onsite",
    description:
      "During my internship at the Social Economic Accelerator Lab (SEAL), I served as a Cloud Engineer, contributing to the development of cloud-based solutions for the agriculture and healthcare sectors. I played a key role in building the Smartfarming application, an IoT-powered monitoring system that enables real-time agricultural field analysis. This opportunity allowed me to enhance my skills in DevOps practices, database management, and system architecture, while refining my ability to tackle complex technical challenges and optimize cloud-based systems effectively.",
  },
  {
    role: "Cloud Computing Cohort",
    employmenttype: "Bootcamp",
    startdate: "Feb 2024",
    enddate: "Jun 2024",
    company: "Bangkit Academy Lead by Google, Tokopedia, Gojek, & Traveloka",
    location: "",
    locationtype: "Online",
    description:
      "As a participant in Bangkit Academy, I gained comprehensive expertise in Cloud Computing through a rigorous program supported by leading industry partners. The experience included hands-on projects that applied advanced concepts to real-world challenges, fostering technical proficiency, problem-solving, and teamwork. This transformative journey not only enhanced my adaptability and collaboration skills but also prepared me to contribute effectively to innovative and impactful tech projects.",
  },
];
