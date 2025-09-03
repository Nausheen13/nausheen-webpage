import { ExternalLink, FileText, Github, Linkedin, User } from 'lucide-react';

const Hero = () => {
  const quickLinks = [
    { name: 'CV', href: '#', icon: FileText },
    { name: 'Google Scholar', href: '#', icon: ExternalLink },
    { name: 'ORCID', href: 'https://orcid.org/0009-0001-9011-3345', icon: User },
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-7 xl:col-span-8">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Dr. Nausheen Basha
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Machine Learning + Computational Fluid Dynamics for predictions and optimisation
            </p>
            <div className="mt-8 prose prose-lg max-w-none">
              <p>
                I am a Research Associate in Chemical Engineering at{' '}
                <a 
                  href="https://www.imperial.ac.uk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Imperial College London
                </a>, 
                specialising in CFD, optimisation (multi-fidelity and categorical), and 
                geometry-informed deep learning for fluid systems.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10">
              <h2 className="text-lg font-semibold text-primary mb-4">Quick Links</h2>
              <div className="flex flex-wrap gap-4">
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary border border-border rounded-md hover:bg-muted hover:text-accent transition-colors duration-200"
                    >
                      <Icon className="h-4 w-4" />
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="mt-12 lg:mt-0 lg:col-span-5 xl:col-span-4">
            <div className="aspect-square max-w-md mx-auto bg-muted rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/Nausheen.jpg"
                alt="Dr. Nausheen Basha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;