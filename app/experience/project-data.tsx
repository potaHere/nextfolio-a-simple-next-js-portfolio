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
    role: "L1 IT Engineer",
    employmenttype: "Contract",
    startdate: "Apr 2026",
    enddate: "Present",
    company: "PT Bank Rakyat Indonesia (Persero) Tbk",
    location: "South Jakarta, Jakarta, Indonesia",
    locationtype: "Onsite",
    description:
      "Currently working as an L1 IT Engineer, supporting enterprise IT infrastructure and system operations within the banking industry. My responsibilities include system monitoring, first-level troubleshooting, incident identification, ticket management, and escalation in accordance with operational procedures and SLA requirements. I also gain hands-on exposure to Kubernetes and OpenShift environments, infrastructure observability, and log investigation using tools such as Grafana and Elasticsearch, while collaborating with senior engineers to maintain system reliability and operational stability.",
  },
  {
    role: "Cloud Engineer",
    employmenttype: "Internship",
    startdate: "Oct 2025",
    enddate: "Apr 2026",
    company: "Profile Image Studio",
    location: "Malang, East Java, Indonesia",
    locationtype: "Onsite",
    description:
      "Worked as a Cloud Engineer, focusing on cloud infrastructure provisioning, automation, and deployment across AWS environments. Contributed to building disaster recovery (DR) infrastructure, implementing AWS account governance and IAM security policies, and provisioning EC2 resources for AI-powered chatbot workloads using Amazon Bedrock. Also developed deployment automation using Ansible and established CI/CD workflows with AWS CodePipeline and Amazon Lightsail for OpenClaw deployments. This experience strengthened my expertise in cloud infrastructure management, infrastructure security, DevOps automation, and reliable cloud deployment practices.",
  },
  {
    role: "Facilitator - Google Cloud Arcade",
    employmenttype: "Freelance",
    startdate: "Jul 2025",
    enddate: "Sep 2025",
    company: "Dicoding",
    location: "",
    locationtype: "Online",
    description:
      "Served as a Google Cloud Arcade Facilitator, guiding and supporting a community of 25 participants throughout their cloud learning journey. Facilitated hands-on learning activities through Google Cloud Skills Boost labs and Arcade quests, covering fundamental and advanced cloud technologies, including IAM, Kubernetes, and serverless computing. Helped participants navigate technical challenges, track learning progress, and achieve learning milestones while fostering an engaging and collaborative cloud learning environment.",
  },
  {
    role: "AI Engineer Cohort",
    employmenttype: "Bootcamp",
    startdate: "Feb 2025",
    enddate: "Jun 2025",
    company: "Laskar AI",
    location: "",
    locationtype: "Online",
    description:
      "Participated in an intensive AI bootcamp focused on machine learning, deep learning, and data science. Gained hands-on experience with Python, Scikit-learn, and TensorFlow through real-world projects. Collaborated on a capstone project to build an AI solution, strengthening my skills in data analysis, model development, and teamwork.",
  },
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
