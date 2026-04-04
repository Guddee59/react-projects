const Projects = () => {
  const data = [
    { title: "Ecommerce App", desc: "React + Redux" },
    { title: "Portfolio", desc: "Modern UI Design" },
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl text-center font-bold mb-10">Projects</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-slate-800 p-6 rounded-xl w-80 hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>

            <button className="mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
              View Project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;