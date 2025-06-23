import { CarouselItem } from '../components/types';
import { Work, Testimonial } from '../components/types';

export const profile = {
  name: "Edmund Tutuma",
  role: "Software Engineer",
  location: "New York, USA",
  description: `Software engineer & Educator living in New York, USA.\nSkilled with problem solving, systems development using web, desktop and AI technologies.`,
  image: "https://avatars.githubusercontent.com/u/124844140?s=400&u=c07cd17bab6c28a398cb89f5fc681b4ee85e02b9&v=4",
  email: "edmund.tutuma@email.com",
};

export const works: Work[] = [
  { title: "Consultfranc Therapy Services", subtitle: "Website, Therapy", icon: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=100&h=100&fit=crop&q=80" },
  { title: "Patience Peace, Mbarara", subtitle: "Website, PhysioTherapy", icon: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=100&h=100&fit=crop&q=80" },
  { title: "Smart Skills", subtitle: "Website, Non Profit", icon: "https://images.unsplash.com/photo-1579389083395-4507e98b5b67?w=100&h=100&fit=crop&q=80" },
];

export const carouselItems: CarouselItem[] = [
  {
    id: 1,
    title: 'Mountain Retreat',
    description: 'A peaceful getaway in the mountains',
    image: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Ocean View',
    description: 'Beautiful sunset by the ocean',
    image: 'https://images.pexels.com/photos/1012982/pexels-photo-1012982.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Urban Adventure',
    description: 'Explore the city lights',
    image: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'Forest Hike',
    description: 'Nature trails through ancient forests',
    image: 'https://images.pexels.com/photos/240040/pexels-photo-240040.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Jane Doe",
    feedback: "Edmund is a fantastic engineer! His work on our project was top-notch.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "John Smith",
    feedback: "Professional, reliable, and highly skilled. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  }
]; 