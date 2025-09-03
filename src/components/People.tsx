import ProfileSidebar from './ProfileSidebar';

const People = () => {
  const collaboratingStudents = [
    {
      name: "Aynur Atalay",
      role: "PhD",
      affiliation: "Imperial College London and BASF",
      collaboration: "Active learning and Gaussian process models for bubble size distribution in impinging jets"
    },
    {
      name: "Friedrich Hastedt",
      role: "PhD",
      affiliation: "The Sargent Centre for Process Systems Engineering, Imperial College London",
      collaboration: "Geometry-Conditioned Graph Neural Nets"
    },
    {
      name: "Dr Tom Savage",
      role: "PhD, alumni, currently: Palantir",
      affiliation: "The Sargent Centre for Process Systems Engineering, Imperial College London",
      collaboration: "Multi-fidelity Bayesian Optimisation for reactors"
    },
    {
      name: "Santhiya Thiagarajan",
      role: "PhD",
      affiliation: "Centre for Medicines Manufacturing, University of Strathclyde",
      collaboration: "Computational and reduced order models for drug dissolution in gastro-intestinal tract"
    },
    {
      name: "Marco Barbacci Schettino",
      role: "Undergraduate - Final year",
      affiliation: "Imperial College London",
      collaboration: "Multi-fidelity Bayesian optimisation with variational autoencoders for reactors"
    },
    {
      name: "Tom Slade",
      role: "Undergraduate - Final year",
      affiliation: "Imperial College London",
      collaboration: "Multi-fidelity Bayesian optimisation with variational autoencoders for reactors"
    }
  ];

  const keyCollaborators = [
    {
      name: "Prof Omar Matar",
      role: "Professor of Fluid Mechanics, Head Chemical Engineering, Imperial College London"
    },
    {
      name: "Dr Hongying Li",
      role: "Assistant Professor, Nanyang Technological University, Singapore"
    },
    {
      name: "Dr Antonio del Rio Chanona",
      role: "Associate Professor, Imperial College London"
    },
    {
      name: "Dr Jonathan McDonough",
      role: "Associate Professor, Newcastle University"
    },
    {
      name: "Dr Cameron Brown",
      role: "Reader, Centre for Medicines Manufacturing, University of Strathclyde"
    }
  ];

  return (
    <section id="people" className="py-16 sm:py-24 bg-muted/30">
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
                People
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Collaborating with talented researchers and students to advance the field.
              </p>
            </div>

            {/* Collaborating Students */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-primary mb-8">Collaborating Students</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {collaboratingStudents.map((student, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                        <p className="text-muted-foreground text-xs text-center">
                          Photo
                        </p>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-primary mb-1">{student.name}</h4>
                        <p className="text-sm font-medium text-accent">{student.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{student.affiliation}</p>
                    <p className="text-sm text-foreground leading-relaxed">
                      <strong>Collaboration:</strong> {student.collaboration}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Collaborators */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-primary mb-8">Other Key Collaborators</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {keyCollaborators.map((collaborator, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                        <p className="text-muted-foreground text-xs text-center">
                          Photo
                        </p>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-primary mb-1">{collaborator.name}</h4>
                      </div>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{collaborator.role}</p>
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

export default People;