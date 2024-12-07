import React from 'react';
import { Course } from '../types/course';
import { BookOpen } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img 
        src={course.imageUrl} 
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium
            ${course.level === 'beginner' ? 'bg-green-100 text-green-800' :
              course.level === 'intermediate' ? 'bg-blue-100 text-blue-800' :
              'bg-purple-100 text-purple-800'}`}>
            {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
          </span>
          <span className="text-gray-600 flex items-center gap-1">
            <BookOpen size={16} />
            {course.duration}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {course.topics.map((topic, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-md"
              >
                {topic}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-4 border-t">
            <span className="text-2xl font-bold text-gray-900">${course.price}</span>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}