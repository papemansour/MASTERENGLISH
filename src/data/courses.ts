import { Course } from '../types/course';

export const courses: Course[] = [
  {
    id: '1',
    title: 'English Fundamentals',
    level: 'beginner',
    description: 'Master basic English grammar, vocabulary, and conversation skills.',
    price: 99,
    duration: '3 months',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600',
    topics: ['Basic Grammar', 'Essential Vocabulary', 'Simple Conversations', 'Numbers & Time']
  },
  {
    id: '2',
    title: 'Business Communication',
    level: 'intermediate',
    description: 'Develop professional English skills for the workplace.',
    price: 149,
    duration: '4 months',
    imageUrl: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1600',
    topics: ['Business Writing', 'Presentations', 'Email Etiquette', 'Negotiation Skills']
  },
  {
    id: '3',
    title: 'Advanced Mastery',
    level: 'advanced',
    description: 'Perfect your English with advanced topics and native-level content.',
    price: 199,
    duration: '6 months',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1600',
    topics: ['Literature Analysis', 'Academic Writing', 'Public Speaking', 'Cultural Nuances']
  }
];