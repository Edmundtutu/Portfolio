import { CarouselItem } from '../components/types';
import { Work, Testimonial } from '../components/types';

export const profile = {
  name: "Edmund Tutuma",
  role: "Software Engineer",
  location: "Mbarara, Uganda",
  description: "I'm a Backend Engineer who likes crafting microservices, implementing event-driven architectures, and deploying cloud-native applications",
  image: "https://avatars.githubusercontent.com/u/124844140?s=400&u=c07cd17bab6c28a398cb89f5fc681b4ee85e02b9&v=4",
  email: "edmund.tutuma@email.com",
};

export const works: Work[] = [
  { title: "Ovum Care Solutions", subtitle: "Distributed System, Android App, Menstraul Health", icon: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=100&h=100&fit=crop&q=80", visitUrl:""},//"https://gyn.lockfreed.com"},
  { title: "Somesa LMS", subtitle: "Website, Multi-Tenant Coporate Training", icon: "https://somesa.ug/assets/images/home_page/somesa_detailed_logo.png", visitUrl:"https://somesa.ug" },
  { title: "Json Library", subtitle: "Maven, Extension for JacksonLib", icon: "https://miro.medium.com/v2/resize:fit:706/1*cg0es0zkE5J7CUa2QuSRVQ.jpeg", visitUrl:"https://github.com/Edmundtutu/jsonlib"},
  { title: "Yo Spotify", subtitle: "Spotify clone, Integartion of Spotify OpenApi ", icon: "https://yo-spotify.vercel.app/logo.svg", visitUrl:"https://yo-spotify.vercel.app/"},
];

export const carouselItems: CarouselItem[] = [
  {
    id: 'laravel-rest-apis',
    title: 'Laravel REST APIs',
    description: 'REST endpoints with Eloquent relationships, JWT auth via Sanctum, queued jobs & events, and Swagger docs.',
    image: 'https://www.logo.wine/a/logo/Laravel/Laravel-Logo.wine.svg',
    category: 'Backend',
    level: 'Expert',
    yearsOfExperience: 3
  },
  {
    id: 'android-mvvm-room-retrofit',
    title: 'Android MVVM',
    description: 'Android apps with ViewModel + LiveData/Flow, Room for persistence, and Retrofit for network calls in Kotlin/Java.',
    image: 'https://img.freepik.com/premium-photo/glowing-blue-neon-android-logo-black-background_824086-4053.jpg?semt=ais_hybrid&w=740',
    category: 'Mobile',
    level: 'Expert',
    yearsOfExperience: 2
  },
  {
    id: 'react-hooks-architecture',
    title: 'React',
    description: 'Component-based UIs with functional components and hooks. REST API integration and authentication flows.',
    image: 'https://media2.dev.to/dynamic/image/width=800,height=,fit=scale-down,gravity=auto,format=auto/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sziup4s0n0zsl9khff1c.png',
    category: 'Frontend',
    level: 'Advanced',
    yearsOfExperience: 2
  },
  {
    id: 'spring-boot-microservices',
    title: 'Spring Boot Microservices',
    description: 'REST microservices with Spring Boot, including JWT-based security, Swagger/OpenAPI documentation, and resilience patterns.',
    image: 'https://wallpaperaccess.com/full/9954228.png',
    category: 'Backend',
    level: 'Intermediate',
    yearsOfExperience: 1
  },  
  {
    id: 'maven-library-publishing',
    title: 'Maven',
    description: 'Reusable modules, structured POM, semantic versioning, unit-tested with JUnit, and published to a repository for sharing.',
    image: 'https://www.mend.io/wp-content/uploads/2024/02/How-to-Use-Dependency-Injection-in-Java_-Tutorial-with-Examples.png',
    category: 'Tools',
    level: 'Advanced',
    yearsOfExperience: 2
  },
];
export const testimonials: Testimonial[] = [  
  {
    name: "Dr Adones Rukundo",
    role: "Founder, Ovum Care",
    feedback: "Edmund is a fantastic engineer! His work on our project was so helpful.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Henry Nkuke",
    role: "Senior Developer, Interswitch",
    feedback: "Professional, reliable, and highly skilled. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Denis Kedry",
    role: "CTO, Somesa",
    feedback: "Trust me, He has got the muscle for it!",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  }
];