// src/components/LeadershipTeam.jsx
const leaders = [
  {
    name: "Er. Abhishek Mishra",
    title: "Founder & CEO",
    image: "/founder.jpeg",
    bio: "Visionary leader driving employment and entrepreneurship across India.",
  },
  {
    name: "Mr.Vivek Sharma",
    title: "Training Head",
    image: "/expert1.png",
    bio: "Oversees mentor sessions and certified training programs.",
  },
  {
    name: "Expert 2",
    title: "Job Fair Coordinator",
    image: "/expert2.jpg",
    bio: "Coordinates job fairs and corporate hiring drives.",
  },
  {
    name: "Mr.Sagar Bhardwaj",
    title: "Payroll & Software Consultant",
    image: "/expert3.jpg",
    bio: "Provides payroll system and business software advisory.",
  },
];

const LeadershipTeam = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">Leadership Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {leaders.map((leader, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={leader.image}
                alt={leader.name}
                className="rounded-full w-24 h-24 mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg">{leader.name}</h3>
              <p className="text-sm text-blue-600">{leader.title}</p>
              <p className="text-gray-600 mt-2 text-sm">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
