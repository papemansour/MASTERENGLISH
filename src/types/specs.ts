export interface ProjectSpec {
  id: string;
  title: string;
  items: string[];
}

export interface SpecSection {
  id: string;
  title: string;
  description: string;
  specs: ProjectSpec[];
}