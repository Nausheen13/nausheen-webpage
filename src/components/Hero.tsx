import { ExternalLink, FileText, Github, Linkedin, User } from 'lucide-react';
import { Link } from "react-router-dom";

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
              <span className="underline">Computational</span> Fluid Dynamics + 
              <span className="underline"> Design</span> + 
              Artificial <span className="underline"> Intelligence</span> = 
              Computational Design Intelligence
            </p>

            <div className="mt-8 prose prose-lg max-w-none">
              <p>
                I am a Lecturer (Assistant Professor) in Chemical Engineering at{' '}
                <a
                  href="https://www.manchester.ac.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  the University of Manchester
                </a>, specialising in Digital Manufacturing and AI. I am building a research group focused on machine learning for engineering systems, combining computational fluid dynamics, optimisation, and advanced manufacturing to accelerate the design of next-generation chemical technologies.
              </p>

              <p>
                Previously, I was a Research Associate in the Department of Chemical Engineering at{' '}
                <a
                  href="https://www.imperial.ac.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Imperial College London
                </a>, working with{' '}
                <a
                  href="https://profiles.imperial.ac.uk/o.matar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Prof. Omar K. Matar
                </a>.
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
            <div className="aspect-square max-w-[260px] mx-auto bg-muted rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="Nausheen.jpg"
                alt="Dr. Nausheen Basha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Join Us Callout */}
        <div className="mt-16 bg-muted/60 border border-border rounded-xl p-8 max-w-3xl">
          <p className="text-2xl font-semibold text-primary leading-snug">
            Interested in joining the group? 
          </p>

          <p className="mt-3 text-lg text-foreground">
            We are always looking for motivated researchers to work on machine learning and fluids.
          </p>

          <Link
            to="/join-us"
            className="inline-block mt-6 px-7 py-3 text-sm font-semibold text-white bg-primary rounded-md hover:opacity-90 transition"
          >
            View Opportunities →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;