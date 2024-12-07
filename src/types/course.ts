export interface Course {
  id: string;
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  price: number;
  duration: string;
  imageUrl: string;
  topics: string[];
}