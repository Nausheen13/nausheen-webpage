import ProfileSidebar from './ProfileSidebar';

const News = () => {
  const newsItems = [
    {
      date: "Current",
      title: "Delivering talks at AIChE annual meeting in Boston and APS Division of Fluid Dynamics Meeting in Houston",
      type: "Conference Presentations"
    }
  ];

  return (
    <section id="news" className="py-16 sm:py-24 bg-muted/30">
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
                News
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Latest updates and announcements from our research activities.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {newsItems.map((item, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
                            {item.date}
                          </span>
                          <span className="text-sm text-muted-foreground">{item.type}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-primary leading-relaxed">
                          {item.title}
                        </h3>
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

export default News;