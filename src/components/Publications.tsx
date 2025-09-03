import ProfileSidebar from './ProfileSidebar';

const Publications = () => {
  const keyPublications = [
    {
      authors: "Savage, T., Basha, N., McDonough, J., Krassowski, J., Matar, O., & del Rio Chanona, E. A.",
      year: "2024",
      title: "Machine learning-assisted discovery of flow reactor designs.",
      journal: "Nature Chemical Engineering",
      pages: "1–10",
      doi: "10.1038/s44286-024-00099-1",
      highlight: "Accessed 20K+ times; subject of a News and Views article: nature.com/articles/s44286-024-00095-5",
      image: "/images/pub1.jpg",
      link: "https://doi.org/10.1038/s44286-024-00099-1"
    },
    {
      authors: "Basha, N. et al.",
      year: "2024",
      title: "Machine learning and physics-driven modelling and simulation of multiphase systems.",
      journal: "International Journal of Multiphase Flow",
      pages: "179, 104936",
      doi: "10.1016/j.ijmultiphaseflow.2024.104936",
      highlight: "Collaborated with 33 researchers",
      image: "/images/pub2.jpg",
      link: "https://doi.org/10.1016/j.ijmultiphaseflow.2024.104936"
    },
    {
      authors: "Basha, N., Savage, T., McDonough, J., del Rio Chanona, E. A., & Matar, O. K.",
      year: "2023",
      title: "Discovery of mixing characteristics for enhancing coiled reactor performance through a Bayesian Optimisation–CFD approach.",
      journal: "Chemical Engineering Journal",
      pages: "145217",
      doi: "10.1016/j.cej.2023.145217",
      highlight: "Winner of the Sir William Wakeham Award for outstanding research contributions at Imperial College London",
      image: "/images/pub3.jpg",
      link: "https://doi.org/10.1016/j.cej.2023.145217"
    },
    {
      authors: "Basha, N., Kovacevic, A., & Rane, S.",
      year: "2021",
      title: "Numerical investigation of oil injection in screw compressors.",
      journal: "Applied Thermal Engineering",
      pages: "193, 116959",
      doi: "10.1016/j.applthermaleng.2021.116959",
      highlight: "Winner of the Ted Perry Research Award and IMechE's Most Distinguished Developing Career Achievement Prize",
      image: "/images/pub4.jpg",
      link: "https://doi.org/10.1016/j.applthermaleng.2021.116959"
    }
  ];

  const otherPublications = [
    {
      authors: "Basha, N., Li, H., & Matar, O. K.",
      title: "Learning to Choose: Categorical Bayesian Optimisation Framework for Motion-Aware Shapes.",
      status: "In preparation for submission to Data-Centric Engineering.",
      image: "/images/pub5.jpg"
    },
    {
      authors: "Savage, T., Basha, N., McDonough, J., Matar, O. K., & del Rio Chanona, E. A.",
      year: "2023",
      title: "Multi-Fidelity Data-Driven Design and Analysis of Reactor and Tube Simulations.",
      journal: "Computers & Chemical Engineering",
      doi: "10.1016/j.compchemeng.2023.108410",
      image: "/images/pub6.jpg",
      link: "https://doi.org/10.1016/j.compchemeng.2023.108410"
    },
    {
      authors: "Chen, J., Anastasiou, C., Cheng, S., Basha, N., Kahouadji, L., Arcucci, R., Angeli, P., & Matar, O. K.",
      year: "2023",
      title: "Computational fluid dynamics simulations of phase separation in dispersed oil-water pipe flows.",
      journal: "Chemical Engineering Science",
      pages: "267, 118310",
      doi: "10.1016/j.ces.2022.118310",
      image: "/images/pub7.jpg",
      link: "https://doi.org/10.1016/j.ces.2022.118310"
    },
    {
      authors: "Hamad, F., Faraji, F., Santim, C., Basha, N., & Ali, Z.",
      year: "2017",
      title: "Investigation of pressure drop in horizontal pipes with different diameters.",
      journal: "International Journal of Multiphase Flow",
      pages: "91, 120–129",
      doi: "10.1016/j.ijmultiphaseflow.2017.01.007",
      image: "/images/pub8.jpg",
      link: "https://doi.org/10.1016/j.ijmultiphaseflow.2017.01.007"
    }
  ];

  return (
    <section id="publications" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <ProfileSidebar />
          </div>
          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Key Publications
              </h2>
            </div>

            {/* Key Publications */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-primary mb-8">Featured Publications</h3>
              <div className="space-y-8">
                {keyPublications.map((pub, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6 lg:p-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
                      {/* Image */}
                      <div className="lg:col-span-4 mb-6 lg:mb-0">
                        <img
                          src={pub.image}
                          alt={pub.title}
                          className="w-full h-48 object-cover rounded-lg border border-muted"
                        />
                      </div>
                      {/* Content */}
                      <div className="lg:col-span-8">
                        <div className="mb-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
                            {pub.year}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                        <h4 className="text-lg font-semibold text-primary mb-3 leading-relaxed">
                          {pub.title}
                        </h4>
                        <p className="text-foreground mb-2">
                          {pub.journal}, {pub.pages}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          DOI: {pub.doi}
                        </p>
                        {pub.highlight && (
                          <div className="mb-4 text-xs text-accent">{pub.highlight}</div>
                        )}
                        <a 
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                        >
                          View Paper →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Publications */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-8">Other Publications</h3>
              <div className="space-y-6">
                {otherPublications.map((pub, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6 lg:p-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
                      {/* Image */}
                      <div className="lg:col-span-3 mb-4 lg:mb-0">
                        <img
                          src={pub.image}
                          alt={pub.title}
                          className="w-full h-32 object-cover rounded-lg border border-muted"
                        />
                      </div>
                      {/* Content */}
                      <div className="lg:col-span-9">
                        <div className="mb-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
                            {pub.year || pub.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                        <h4 className="text-base font-medium text-primary mb-2 leading-relaxed">
                          {pub.title}
                        </h4>
                        {pub.journal && (
                          <p className="text-foreground mb-1">{pub.journal}{pub.pages ? `, ${pub.pages}` : ''}</p>
                        )}
                        {pub.doi && (
                          <p className="text-sm text-muted-foreground mb-1">DOI: {pub.doi}</p>
                        )}
                        {pub.status && (
                          <p className="text-sm text-muted-foreground mb-1">{pub.status}</p>
                        )}
                        {pub.link && (
                          <a 
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-accent hover:underline text-sm font-medium"
                          >
                            View Paper →
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
      </div>
    </section>
  );
};

export default Publications;