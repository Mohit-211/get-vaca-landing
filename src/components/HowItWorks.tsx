import { Search, CreditCard, Sparkles } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Search",
      description:
        "Find the perfect stay from our curated collection of luxury properties worldwide.",
      number: "01",
    },
    {
      icon: CreditCard,
      title: "Book",
      description:
        "Secure your reservation with our safe and seamless online payment system.",
      number: "02",
    },
    {
      icon: Sparkles,
      title: "Enjoy",
      description:
        "Relax and create unforgettable memories at your dream destination.",
      number: "03",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-sand/90 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter font-light leading-relaxed">
            Your journey to the perfect vacation is just three simple steps away
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-ocean via-coral to-ocean opacity-20"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Step number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-coral to-sunset rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-playfair font-bold text-lg">
                  {step.number}
                </span>
              </div>

              {/* Icon circle */}
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-ocean to-ocean-light rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-ocean/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <step.icon className="h-12 w-12 text-white" />
              </div>

              <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4 group-hover:text-ocean transition-colors">
                {step.title}
              </h3>

              <p className="text-muted-foreground font-inter leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>

              {/* Decorative element */}
              <div className="mt-6 w-16 h-1 bg-gradient-to-r from-coral to-sunset mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="flex items-center justify-center gap-2 text-muted-foreground font-inter">
            <div className="w-2 h-2 bg-coral rounded-full animate-pulse"></div>
            <span>Ready to start your journey?</span>
            <div
              className="w-2 h-2 bg-ocean rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
