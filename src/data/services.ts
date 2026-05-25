export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  fullDescription: string;
  subServices: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: "general",
    icon: "Stethoscope",
    title: "General Consultations",
    description: "From routine checkups to acute illness management, we provide thorough, personalized care for patients of all ages.",
    fullDescription: "Comprehensive medical care for the whole family. Our general consultation services cover everything from common colds to complex health concerns, ensuring every patient receives personalized attention and evidence-based treatment.",
    subServices: ["Routine checkups", "Acute illness treatment", "Minor injury care", "Health assessments"],
    image: "/service-general.jpg",
  },
  {
    id: "chronic",
    icon: "Heart",
    title: "Chronic Disease Care",
    description: "Ongoing management and support for diabetes, hypertension, asthma, and other long-term conditions.",
    fullDescription: "Long-term support for ongoing conditions. We specialize in managing chronic diseases with personalized care plans, regular monitoring, and lifestyle guidance to help you live your healthiest life.",
    subServices: ["Diabetes management", "Hypertension monitoring", "Asthma care", "Arthritis treatment"],
    image: "/service-chronic.jpg",
  },
  {
    id: "preventive",
    icon: "Shield",
    title: "Preventive Health",
    description: "Vaccinations, health screenings, wellness exams, and lifestyle counseling to keep your family healthy.",
    fullDescription: "Stay ahead of health issues before they arise. Our preventive health services are designed to catch potential problems early and keep your family protected through comprehensive screenings and immunizations.",
    subServices: ["Vaccinations & immunizations", "Cancer screenings", "Wellness exams", "Lifestyle counseling"],
    image: "/service-preventive.jpg",
  },
  {
    id: "procedures",
    icon: "Syringe",
    title: "Minor Procedures",
    description: "In-clinic procedures including wound care, injections, ear syringing, and skin lesion removal.",
    fullDescription: "Safe, in-clinic procedures with minimal downtime. Our minor procedure services are performed with precision and care, using modern techniques in a comfortable, sterile environment.",
    subServices: ["Wound stitching", "Injections & vaccinations", "Ear syringing", "Skin lesion removal"],
    image: "/service-procedures.jpg",
  },
];
