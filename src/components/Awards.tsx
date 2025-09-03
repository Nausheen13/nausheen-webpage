import ProfileSidebar from './ProfileSidebar';

const Awards = () => {
  const awards = [
    {
      year: "2024",
      title: "UKRI's Impact Acceleration Account funding",
      description: "£80K grant, ∼£42K in-kind to advance the technology readiness of multi-fidelity nozzle design with Syngenta and Unilever"
    },
    {
      year: "2024",
      title: "Sir William Wakeham Award for outstanding research contributions",
      description: "Department of Chemical Engineering, Imperial College London. Awarded from among ∼150 postdocs in the department",
      link: "https://www.imperial.ac.uk/news/252599/sir-william-wakeham-award-2024-recipients/"
    },
    {
      year: "2024",
      title: "Special session selection - Machine Learning in Fluid Dynamics",
      description: "Selected as one of the top 20 researchers for the American Physical Society Division of Fluid Dynamics (APS-DFD) Annual Meeting (∼3500 attendees). Selection based on research quality, innovation, and highest interest to the community."
    },
    {
      year: "2024",
      title: "UK-India Achievers Honours Finalist",
      description: "Finalist in the category of Education, Science and Innovation. Recognition for groundbreaking research/educational excellence made by an individual of Indian origin."
    },
    {
      year: "2023",
      title: "Most Distinguished Developing Career Achievement Prize",
      description: "The Process Industries Division, IMechE (awarded to one person every year)"
    },
    {
      year: "2023",
      title: "Entrepreneurs First Women in AI program",
      description: "Selected as one of 20 individuals in the UK chosen to meet co-founders and build technology companies from scratch"
    },
    {
      year: "2022",
      title: "Top 50 Women in Engineering",
      description: "Theme: Inventors and Innovators - Women's Engineering Society, supported by Guardian"
    },
    {
      year: "2022",
      title: "Ted Perry Research Award",
      description: "IOR (presented annually to the best early career researcher in cooling systems)"
    }
  ];

  return (
    <section id="awards" className="py-16 sm:py-24">
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
                  src="/images/awards-banner.jpg"
                  alt="Awards"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Awards</h1>
                    <p className="text-xl">Recognition for outstanding research contributions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Awards List */}
            <div className="grid md:grid-cols-2 gap-4">
              {awards.map((award, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-accent/10 text-accent flex-shrink-0">
                      {award.year}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-2 leading-tight">
                        {award.title}
                      </h3>
                      <p className="text-sm text-foreground leading-relaxed mb-2">
                        {award.description}
                      </p>
                      {award.link && (
                        <a 
                          href={award.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline text-xs"
                        >
                          Learn more →
                        </a>
                      )}
                    </div>
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

export default Awards;