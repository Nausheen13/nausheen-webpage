import ProfileSidebar from './ProfileSidebar';

const Research = () => {
  const researchProjects = [
    {
      title: "Exploration-dominated and Multi-fidelity Bayesian optimisation for plug flow reactor",
      description: [
        "This project focuses on using Bayesian optimisation to enhance the performance of coiled plug flow reactors, which are widely used in chemical and pharmaceutical manufacturing. Traditional optimisation of such systems typically requires hundreds of costly and time-consuming experiments to identify optimal operating conditions. By integrating Bayesian optimisation with CFD simulations, I developed an automated framework that reduced the search process to under 33 hours of computation.",
        "To further improve efficiency, a multi-fidelity optimisation strategy was implemented, combining low-resolution, fast-running simulations with high-resolution, computationally intensive models. This approach enabled the surrogate model to learn from inexpensive approximations while selectively refining predictions with high-fidelity data, significantly lowering the total computational cost. The framework dynamically allocated resources to the most promising regions of the design space, achieving accurate and efficient optimisation. This strategy supports scalable application to complex reactor designs and has been validated through experimental manufacturing and performance testing."
      ],
      image: "/images/research1.jpg"
    },
    {
      title: "Categorical Bayesian Optimisation for Erosion Problems",
      description: [
        "In this project, a categorical Bayesian optimisation framework was developed to address the challenges of complex, high-dimensional design spaces commonly encountered in shape optimisation tasks. Conducted in collaboration with Dr. Hongying Li (Nanyang Technological University), the work focused on fluid–solid systems involving erosion and particle deposition. By representing geometry and motion as categorical variables, the framework successfully bypassed the scalability issues associated with conventional continuous optimisation methods.",
        "This approach achieved three times faster convergence and revealed novel, high-performing design configurations that would likely be overlooked by traditional techniques. The methodology is broadly applicable to a wide range of engineering problems that involve discrete or hybrid design choices, including those in fluid dynamics, structural mechanics, and thermal management."
      ],
      image: "/images/research2.jpg"
    },
    {
      title: "Geometry-Informed Graph-Neural Nets",
      description: [
        "Spray systems used in drug delivery, agriculture, and manufacturing are highly sensitive to nozzle geometry, which affects droplet size and spray patterns. Traditional CFD methods capture these effects accurately but are too computationally intensive for rapid design.",
        "This project develops a geometry-conditioned Graph Neural Network (GNN) that predicts multiphase flow fields across diverse nozzle shapes with over 100× speedup compared to CFD. Using data from high-resolution simulations, the model incorporates shape information through various embedding techniques enabling accurate, geometry-aware predictions. The result is a fast and scalable surrogate model for spray system optimisation and control."
      ],
      image: "/images/research3.jpg"
    }
  ];

  return (
    <section id="research" className="py-16 sm:py-24 bg-muted/30">
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
                Research
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Advancing the intersection of machine learning and fluid dynamics for next-generation engineering solutions.
              </p>
            </div>

            {/* Research Overview Section */}
            <div className="bg-card rounded-lg border border-border p-8 lg:p-12 mb-16">
              <h3 className="text-2xl font-semibold text-primary mb-6">Research Overview</h3>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 text-foreground leading-relaxed">
                  My research sits at the intersection of{' '}
                  <a 
                    href="https://en.wikipedia.org/wiki/Computational_fluid_dynamics" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    computational fluid dynamics (CFD)
                  </a>, 
                  machine learning, and optimisation. I develop novel methodologies to accelerate the design and optimisation of fluid systems using advanced computational techniques.
                </p>
                <p className="mb-6 text-foreground leading-relaxed">
                  Traditional engineering design processes often require extensive experimentation and simulation, which can be time-consuming and computationally expensive. My work focuses on creating intelligent frameworks that can learn from limited data to make accurate predictions and guide optimisation processes efficiently.
                </p>
                <p className="mb-6 text-foreground leading-relaxed">
                  Key areas of focus include:{' '}
                  <a 
                    href="https://en.wikipedia.org/wiki/Bayesian_optimization" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Bayesian optimisation
                  </a> 
                  for reactor design, geometry-informed neural networks for multiphase flows, and categorical optimisation for complex engineering systems. These methodologies have applications across industries including pharmaceuticals, agriculture, and manufacturing.
                </p>
                <p className="text-foreground leading-relaxed">
                  Through collaborations with leading institutions like{' '}
                  <a 
                    href="https://www.imperial.ac.uk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Imperial College London
                  </a>,{' '}
                  <a 
                    href="https://www.ntu.edu.sg/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Nanyang Technological University
                  </a>, and industry partners, my research aims to bridge the gap between fundamental research and practical engineering applications.
                </p>
              </div>
            </div>

            {/* Research Projects */}
            <div className="space-y-16">
              {researchProjects.map((project, index) => (
                <div key={index} className="bg-card rounded-lg border border-border p-8 lg:p-12">
                  <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
                    {/* Figure - Now on the left */}
                    <div className="lg:col-span-4 mb-8 lg:mb-0">
                      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                          }}
                        />
                        <div className="hidden w-full h-full flex items-center justify-center">
                          <p className="text-muted-foreground text-center px-4">
                            Research Figure
                            <br />
                            <span className="text-sm">(To be added)</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-8">
                      <h3 className="text-2xl font-semibold text-primary mb-6 leading-tight">
                        {project.title}
                      </h3>
                      <div className="prose prose-lg max-w-none">
                        {project.description.map((paragraph, pIndex) => (
                          <p key={pIndex} className="mb-6 text-foreground leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
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

export default Research;