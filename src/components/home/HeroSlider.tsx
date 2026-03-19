import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import weighingImg from "@/assets/weighing-equipment.jpg";
import cyberImg from "@/assets/cybersecurity.jpg";
import softwareImg from "@/assets/software-solutions.jpg";

const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = [
    {
      title: "Advanced Weighing Solutions & Technology Services",
      description:
        "Empowering industries with cutting-edge weighbridge management software, precision weighing equipment, and enterprise technology services.",
      image: heroImage,
      cta: { text: "Explore Products", link: "/products" },
    },
    {
      title: "Precision Weighing Equipment for Every Industry",
      description:
        "Industrial-grade weighing scales and systems designed for accuracy, durability, and reliability in demanding environments.",
      image: weighingImg,
      cta: { text: "View Equipment", link: "/products/weighing-equipment" },
    },
    {
      title: "Cybersecurity Solutions That Protect Your Business",
      description:
        "Comprehensive penetration testing, security audits, and vulnerability assessments to safeguard your digital infrastructure.",
      image: cyberImg,
      cta: { text: "Learn More", link: "/services/cybersecurity" },
    },
    {
      title: "Enterprise Software Solutions Built For Scale",
      description:
        "Sophisticated weighbridge management, payroll processing, and security systems designed for modern businesses.",
      image: softwareImg,
      cta: { text: "Discover Software", link: "/products/software" },
    },
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0">
              <div className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[80vh] flex items-center">
                {/* Background with overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 gradient-hero opacity-90" />
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
                  <div className="max-w-3xl animate-fade-in">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary-foreground mb-4 sm:mb-6 leading-tight">
                      {slide.title}
                    </h1>

                    <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl">
                      {slide.description}
                    </p>

                    <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4">
                      {" "}
                      <Link to={slide.cta.link}>
                        <Button variant="accent" size="lg" className="group">
                          {slide.cta.text}
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                      <Link to="/quote"></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
