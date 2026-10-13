export interface Titles {
  about: string;
  experience: string;
  stack: string;
  job: {
    tasks: string;
    team: string;
    stack: string;
  };
}

export interface Case {
  title: string;
  description: string;
  extra: { name: string; value: string }[];
}

export interface Job {
  dates: string;
  job: string;
  jobDescription: string;
  companyName: string;
  companyLink?: string;
  companyDescription?: string;
  team: string;
  stack: string;
  tasks: {
    title: string;
    description: string;
  }[];
  cases: Case[];
}

export interface Content {
  personal: {
    name: string;
    job: string;
    email: string;
    phone: string;
    tg: string;
  };
  about: {
    description: string;
  };
  hardSkills: string[];
  softSkills: string[];
  experience: Job[];
}
