import ProfileSidebar from './ProfileSidebar';

const JoinUs = () => {
  return (
    <section id="join-us" className="py-16 sm:py-24 bg-muted/30">
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
                Join Us
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We are always looking for passionate individuals to join our team.
                Open positions will be listed here and advertised on relevant platforms.
                We also welcome visiting academics and students interested in collaborative research.
              </p>
            </div>

            {/* Current Open Positions */}
            <div className="mb-12 bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Current Open Positions
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We are looking for a PhD student to join our group starting in
                <strong> September 2026</strong>. The position will be formally opened
                <strong> soon</strong>. If you are interested, please feel free to
                reach out to discuss the opportunity.
              </p>
            </div>

            {/* PhD and Postdoc Opportunities */}
            <div className="mb-12 bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                PhD and Postdoctoral Scholarships / Fellowships
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you are interested in working with us as a PhD student or postdoctoral
                researcher, please send an email with your CV and a brief statement of motivation.
                Please use the email title
                <span className="font-medium">
                  {" "}“PhD/Postdoc Inquiry – Your Name”
                </span>.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Prospective applicants are encouraged to apply through the following
                competitive scholarship and fellowship schemes.
              </p>
            </div>

            {/* PhD Scholarships */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                PhD Scholarships (2026 Entry)
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <a
                  href="https://www.manchester.ac.uk/study/postgraduate-research/funding/presidents-doctoral-scholarships/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
                >
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    President’s Doctoral Scholarship
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    University of Manchester doctoral scholarship opportunity.
                  </p>
                </a>

                <a
                  href="https://www.manchester.ac.uk/study/postgraduate-research/funding/deans-doctoral-scholarships/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
                >
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    Dean’s Doctoral Scholarship
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Competitive doctoral funding scheme at Manchester.
                  </p>
                </a>

                <a
                  href="https://www.chinese-scholarship-council.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
                >
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    CSC Joint Scholarship
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Joint funding route for eligible PhD applicants.
                  </p>
                </a>

                <a
                  href="https://www.manchester.ac.uk/study/postgraduate-research/programmes/dual-award/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
                >
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    Dual-award PhD Program
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Joint doctoral training opportunity with partner institutions.
                  </p>
                </a>
              </div>
            </div>

            {/* Postdoctoral Fellowships */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Postdoctoral Fellowships
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <a
                  href="https://marie-sklodowska-curie-actions.ec.europa.eu/actions/postdoctoral-fellowships"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
                >
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    Marie Skłodowska-Curie Actions (MSCA) Postdoctoral Fellowships
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    European postdoctoral fellowship scheme supporting international mobility.
                  </p>
                </a>

                <a
                  href="https://www.leverhulme.ac.uk/early-career-fellowships"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
                >
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    Leverhulme Trust Early Career Fellowships
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Fellowship scheme for outstanding early-career researchers.
                  </p>
                </a>

                <a
                  href="https://royalsociety.org/grants/newton-international-fellowships/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
                >
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    Royal Society Newton International Fellowship
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    International fellowship supporting global postdoctoral researchers.
                  </p>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;