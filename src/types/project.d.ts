export interface ProjectImage {
  src: string;
  width: number;
  height: number;
}

export interface Project {
  id?: string;
  title: string;
  description: string;
  link: string;
  metaTitle: string;
  metaDescription: string;
  repo?: string;
  icon?: string;
  tags: string[];
  keywords: string[];
  images?: ProjectImage[];
  previewImages?: ProjectImage[];
}
