const ManchesterBanner = () => {
    return (
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src="manchester-banner.jpg"
              alt="University of Manchester"
              className="w-full h-[320px] md:h-[420px] object-cover"
            />
  
            <div className="absolute inset-0 bg-black/30" />
  
            <div className="absolute inset-0 flex items-end">
              <div className="p-6 md:p-10 text-white">
                <p className="text-sm md:text-base uppercase tracking-[0.2em] mb-2">
                  Academic Appointment
                </p>
                <h2 className="text-2xl md:text-4xl font-semibold">
                  Department of Chemical Engineering, University of Manchester
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ManchesterBanner;