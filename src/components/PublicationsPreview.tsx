import { ArrowRight, FileText, ExternalLink } from 'lucide-react';

const PublicationsPreview = () => {
  const featuredPublications = [
    {
      title: "Machine learning-assisted discovery of flow reactor designs",
      journal: "Nature Chemical Engineering",
      year: "2024",
      highlight: "20K+ accesses",
      doi: "10.1038/s44286-024-00099-1",
      image: "/images/pub1.jpg",
      link: "https://doi.org/10.1038/s44286-024-00099-1"
    },
    {
      title: "Machine learning and physics-driven modelling and simulation of multiphase systems",
      journal: "International Journal of Multiphase Flow",
      year: "2024",
      highlight: "33 researchers collaboration",
      doi: "10.1016/j.ijmultiphaseflow.2024.104936",
      image: "/images/pub2.jpg",
      link: "https://doi.org/10.1016/j.ijmultiphaseflow.2024.104936"
    },
    {
      title: "Discovery of mixing characteristics for enhancing coiled reactor performance",
      journal: "Chemical Engineering Journal",
      year: "2023",
      highlight: "Sir William Wakeham Award Winner",
      doi: "10.1016/j.cej.2023.145217",
      image: "/images/pub3.jpg",
      link: "https://doi.org/10.1016/j.cej.2023.145217"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-primary">Key Publications</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Peer-reviewed research published in leading journals
          </p>
        </div>

        <div className="space-y-6 mb-10">
          {featuredPublications.map((pub, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-start">
                {/* Image */}
                <div className="lg:col-span-3 mb-4 lg:mb-0">
                  <img
                    src={pub.image}
                    alt={pub.title}
                    className="w-full h-32 lg:h-40 object-cover rounded-lg border border-muted"
                  />
                </div>
                
                {/* Content */}
                <div className="lg:col-span-8">
                  <h3 className="font-semibold text-lg text-primary mb-2 leading-tight">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="font-medium">{pub.journal}</span>
                    <span>•</span>
                    <span>{pub.year}</span>
                    {pub.highlight && (
                      <>
                        <span>•</span>
                        <span className="text-accent font-medium">{pub.highlight}</span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">DOI: {pub.doi}</p>
                  <a 
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted text-primary rounded text-sm font-medium hover:bg-muted/80 transition-colors"
                  >
                    View Paper <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                
                {/* External link icon */}
                <div className="lg:col-span-1 flex justify-end lg:justify-center">
                  <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="/publications"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            View All Publications
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PublicationsPreview;