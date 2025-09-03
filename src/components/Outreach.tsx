import ProfileSidebar from './ProfileSidebar';

const Outreach = () => {
  const outreachActivities = [
    {
      title: "International Community Building",
      description: "Co-built an online, international community of webinar series with subscribers >330 for fluid dynamics + ML",
      link: "https://cassyni.com/s/premiere"
    },
    {
      title: "Student Mentorship and Judging",
      description: "Judge for AIHack event, hosted by IC Data Science Society (150 students participated). Judge for 'Towards the Future of AI' 70 poster sessions at ICL."
    },
    {
      title: "Science Communication",
      description: "Invited for podcast on weekly science and technology radio show on VCS radio Cardiff, sponsored by Institution of Engineering & Technology (IET).",
      link: "https://tinyurl.com/ryvf9n23"
    },
    {
      title: "Writing and Advocacy",
      description: "Columnist for Process Industry Informer and writer for Women's Engineering Society for articles related to challenges faced by Women in STEM. Published an article on Phys.org on the Gender Pay Gap",
      link: "https://phys.org/news/2018-05-years-gender-gap.html"
    }
  ];

  return (
    <section id="outreach" className="py-16 sm:py-24">
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
                  src="/images/outreach-banner.jpg"
                  alt="Outreach Activities"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Outreach</h1>
                    <p className="text-xl">Advancing diversity, education, and public engagement in STEM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact and Commitment Section - Now after banner */}
            <div className="mb-12 bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Impact and Commitment</h3>
              <p className="text-foreground leading-relaxed mb-4">
                My outreach activities focus on promoting diversity and inclusion in STEM fields, particularly supporting women and underrepresented groups in engineering and technology. Through mentorship, science communication, and community building, I aim to inspire the next generation of researchers and engineers.
              </p>
              <p className="text-foreground leading-relaxed">
                I believe that making science accessible and inclusive is essential for driving innovation and solving global challenges. My work spans from academic mentorship to public engagement, always with the goal of creating opportunities for others to participate in and contribute to scientific advancement.
              </p>
            </div>

            {/* Outreach Activities */}
            <div className="grid gap-6 md:grid-cols-2">
              {outreachActivities.map((activity, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {activity.title}
                  </h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    {activity.description}
                  </p>
                  {activity.link && (
                    <a 
                      href={activity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent hover:underline text-sm font-medium"
                    >
                      Learn more →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outreach;