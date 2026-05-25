export interface Review {
  name: string;
  text: string;
  date: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    name: "Sarah M.",
    text: "Dr. Williams is absolutely wonderful with my children. He takes the time to explain everything and makes them feel comfortable. The booking system is so easy to use!",
    date: "January 2025",
    rating: 5,
  },
  {
    name: "James K.",
    text: "Been coming here for 3 years. The chronic care management has been life-changing for my diabetes. Highly recommend to anyone looking for a family doctor.",
    date: "December 2024",
    rating: 5,
  },
  {
    name: "Themba N.",
    text: "Professional, caring, and efficient. I was able to book online and had minimal wait time. The staff is friendly and the clinic is always clean.",
    date: "November 2024",
    rating: 5,
  },
  {
    name: "Linda P.",
    text: "Best medical clinic in the area. Dr. Williams caught an issue early during my preventive screening that could have been serious. Forever grateful.",
    date: "October 2024",
    rating: 5,
  },
  {
    name: "Michael R.",
    text: "The online booking is fantastic. No more waiting on hold. The reminder texts are helpful too. Great service from start to finish.",
    date: "September 2024",
    rating: 5,
  },
  {
    name: "Grace T.",
    text: "Took my elderly mother here for a checkup. The doctor was patient and thorough. The wheelchair access and parking made everything easy.",
    date: "August 2024",
    rating: 5,
  },
  {
    name: "David B.",
    text: "Quick and professional service for a minor procedure. In and out within 30 minutes. The follow-up care was excellent too.",
    date: "July 2024",
    rating: 5,
  },
  {
    name: "Patricia S.",
    text: "After years of going to different clinics, I finally found my family doctor. The whole family comes here now. Vaccinations, checkups, everything.",
    date: "June 2024",
    rating: 5,
  },
  {
    name: "Thabo M.",
    text: "Excellent experience every time. The staff remembers your name and the doctor actually listens. Rare to find this level of care these days.",
    date: "May 2024",
    rating: 5,
  },
  {
    name: "Emily W.",
    text: "The Saturday hours are a lifesaver for working parents. Easy to get appointments and the care is top-notch. Five stars all around.",
    date: "April 2024",
    rating: 5,
  },
  {
    name: "Robert L.",
    text: "Professional healthcare with a personal touch. Dr. Williams explained my hypertension management plan clearly. Feeling much more in control of my health.",
    date: "March 2024",
    rating: 5,
  },
  {
    name: "Nomsa D.",
    text: "Beautiful clinic, friendly staff, and exceptional medical care. My kids actually look forward to their checkups. That says everything.",
    date: "February 2024",
    rating: 5,
  },
  {
    name: "Chris H.",
    text: "Had a wound that needed stitching. Walked in without an appointment and was seen promptly. Clean facilities and skilled hands.",
    date: "January 2024",
    rating: 5,
  },
  {
    name: "Amanda F.",
    text: "The preventive health program here is comprehensive. Got all my screenings done in one visit. Very efficient and thorough.",
    date: "December 2023",
    rating: 5,
  },
  {
    name: "Peter J.",
    text: "Dr. Williams has been our family doctor for over 5 years. From my newborn daughter to my parents, he cares for us all with dedication.",
    date: "November 2023",
    rating: 5,
  },
  {
    name: "Zanele K.",
    text: "Finally a doctor who treats the whole person, not just symptoms. The holistic approach to healthcare here is refreshing and effective.",
    date: "October 2023",
    rating: 5,
  },
];

export const featuredReviews = reviews.slice(0, 6);
