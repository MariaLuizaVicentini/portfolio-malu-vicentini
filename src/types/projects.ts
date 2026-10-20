
export interface Project {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  featured?: boolean;
  browserLabel?: string;
}


export interface ProjectCardProps {
  project: Project;
}

