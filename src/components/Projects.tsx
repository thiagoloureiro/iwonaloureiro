import React from 'react';
import w1 from '../projects/01/w1.jpg';
import w2 from '../projects/01/w2.jpg';
import w3 from '../projects/01/w3.jpg';
import w4 from '../projects/01/w4.jpg';

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Architecture' | 'Interior Design';
  location: string;
  year: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Villa in the Hills',
    description: 'A contemporary residential project that seamlessly integrates indoor and outdoor living spaces. The design features floor-to-ceiling windows, sustainable materials, and a minimalist aesthetic.',
    category: 'Architecture',
    location: 'Los Angeles, CA',
    year: '2023',
    imageUrl: w1
  },
  {
    id: '2',
    title: 'Urban Loft Transformation',
    description: 'Complete renovation of a historic warehouse into a modern living space. The project preserves the building\'s industrial character while introducing contemporary design elements.',
    category: 'Interior Design',
    location: 'New York, NY',
    year: '2023',
    imageUrl: w2
  },
  {
    id: '3',
    title: 'Sustainable Office Complex',
    description: 'A LEED-certified commercial building featuring innovative sustainable design solutions, green spaces, and energy-efficient systems.',
    category: 'Architecture',
    location: 'San Francisco, CA',
    year: '2022',
    imageUrl: w3
  },
  {
    id: '4',
    title: 'Minimalist Apartment',
    description: 'Interior design project focusing on clean lines, natural light, and functional spaces. The design creates a sense of spaciousness in a compact urban apartment.',
    category: 'Interior Design',
    location: 'Chicago, IL',
    year: '2023',
    imageUrl: w4
  }
];

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light tracking-tight text-gray-900 mb-4">Our Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Exploring the intersection of form and function through innovative architecture and interior design solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-sm uppercase tracking-wider font-medium mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-light mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">{project.description}</p>
                  <div className="flex justify-between text-sm">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 