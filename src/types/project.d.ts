export interface ProjectImage {
  src: string;
  width: number;
  height: number;
}

export interface Project {
  id?: string;
  title: string;
  link: string;
  description: string;
  overview?: string | (() => JSX.Element);
  repo?: string;
  icon?: string;
  tags: string[];
  images?: ProjectImage[];
  previewImages?: ProjectImage[];
}
