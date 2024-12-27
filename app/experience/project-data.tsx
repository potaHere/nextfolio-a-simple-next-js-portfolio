export interface Project {
  role: string;
  employmenttype: string;
  startdate: string;
  enddate: string;
  company: string;
  location: string;
  locationtype: string;
  description: string;
  // url: string;
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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    // url: "https://example.com/",
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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    // url: "https://example.com/",
  },
];
