interface Photo {
  src: string;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  title: string;
  link: string;
  description: string;
  fullDescription?: string;
  repo?: string;
  icon: string;
  tags: string[];
  images: Photo[];
  previewImages?: Photo[];
}
