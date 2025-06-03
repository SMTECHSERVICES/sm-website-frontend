// src/components/Timeline.jsx
const Timeline = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Our Journey</h2>
        <ol className="relative border-l-4 border-blue-600 pl-6">
          <li className="mb-10">
            <span className="text-blue-600 font-bold">2018:</span>
            <p className="text-gray-700 ml-2">SM Services founded with vision of career transformation.</p>
          </li>
          <li className="mb-10">
            <span className="text-blue-600 font-bold">2020:</span>
            <p className="text-gray-700 ml-2">Launched online training and job portal during pandemic.</p>
          </li>
          <li className="mb-10">
            <span className="text-blue-600 font-bold">2023:</span>
            <p className="text-gray-700 ml-2">Expanded to 12+ cities with payroll & job fair modules.</p>
          </li>
          <li className="mb-10">
            <span className="text-blue-600 font-bold">2025:</span>
            <p className="text-gray-700 ml-2">Launching MentorConnectBiz.com and AI-based job match system.</p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Timeline;
