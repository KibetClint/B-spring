import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      company: "Global Logistics Inc.",
      content:
        "Brickspring's weighbridge management system has revolutionized our operations. The accuracy and reliability are unmatched.",
      rating: 5,
    },
    {
      name: "Kisyet Tea Factory",
      role: "IT Director",
      company: "TechCorp Industries",
      content:
        "Their cybersecurity services gave us peace of mind. The penetration testing revealed vulnerabilities we didn't know existed.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Procurement Head",
      company: "Mr Green Ltd.",
      content:
        "Outstanding product quality and exceptional customer service. The weighing equipment exceeded our expectations.",
      rating: 5,
    },
  ];

  return (
    <section className="py-10 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by industry leaders worldwide for quality and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-smooth">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-accent">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
