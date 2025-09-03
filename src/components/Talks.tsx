import ProfileSidebar from './ProfileSidebar';

const Talks = () => {
  const talks = [
    "Machine Learning and Dynamical Systems Seminar at the Alan Turing Institute (2024)",
    "Mattehorn studio, startup company, UK (2024)",
    "Molecular Systems Engineering seminar at Imperial (2024)",
    "Department of Mathematics and Statistics seminar at the University of Strathclyde (2024)",
    "Research Symposium, Brunel Design School, Brunel University London (2023)",
    "Workshop at Isaac Newton Institute for Mathematical Sciences, University of Cambridge (2023)",
    "Special Session: Machine Learning for Multiphase Flows, 11th International Conference on Multiphase Flow, Kobe, Japan (Session attracting the highest number of attendees in the entire conference) (2023)",
    "Chemical Engineering Departmental Series at Newcastle University (2022)",
    "Industry talk for Total (2022)",
    "Tech Talk at the Institute of Refrigeration, UK (2022)"
  ];

  return (
    <section id="talks" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <ProfileSidebar />
          </div>
          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Banner Section */}
            <div className="relative mb-16 rounded-2xl overflow-hidden">
              <div className="h-64 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
                <img
                  src="/images/talks-banner.jpg"
                  alt="Talks"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Talks</h1>
                    <p className="text-xl">Selected presentations and conference talks</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Talks List */}
            <div className="space-y-4">
              {talks.map((talk, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></div>
                    <p className="text-foreground leading-relaxed">{talk}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talks;