import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Eye, Users, Linkedin, Mail } from "lucide-react";
import ceoImg from "@/assets/team/C.E.O.jpg";
import ctoImg from "@/assets/team/KIBET.jpg";
import leadEngineerImg from "@/assets/team/HILLARY.jpg";
import salesManagerImg from "@/assets/team/CLINT.jpg";

const teamMembers = [
  {
    name: "David Kipkoechz",
    role: "CEO & Founder",
    image: ceoImg,
    bio: "With over 15 years in technology and weighing solutions, David leads Brickspring's vision for innovation and growth across East Africa.",
    linkedin: "#",
    email: "david@brickspring.co.ke",
  },
  {
    name: "Grace Chebet",
    role: "Chief Technology Officer",
    image: ctoImg,
    bio: "Grace drives our technology strategy, overseeing software development, cybersecurity services, and system integration projects.",
    linkedin: "#",
    email: "grace@brickspring.co.ke",
  },
  {
    name: "Brian Langat",
    role: "Lead Engineer",
    image: leadEngineerImg,
    bio: "Brian manages our weighing equipment division, ensuring precision calibration and top-tier hardware solutions for all clients.",
    linkedin: "#",
    email: "brian@brickspring.co.ke",
  },
  {
    name: "Faith Njeri",
    role: "Sales & Partnerships Manager",
    image: salesManagerImg,
    bio: "Faith cultivates client relationships and strategic partnerships, ensuring every customer receives tailored solutions.",
    linkedin: "#",
    email: "faith@brickspring.co.ke",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-primary-foreground mb-6">
                About Brickspring
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Leading the industry in weighing solutions and technology
                services for over 15 years
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2008, Brickspring has grown from a small weighing
                  equipment supplier to a comprehensive technology solutions
                  provider serving industries across East Africa and beyond.
                </p>
                <p className="text-muted-foreground mb-4">
                  Based in Litein, Kericho County, our journey has been driven
                  by a commitment to innovation, quality, and customer
                  satisfaction. We've continuously evolved our product and
                  service offerings to meet the changing needs of modern
                  businesses.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to serve over 500 clients with our
                  integrated solutions that combine hardware excellence,
                  sophisticated software, cybersecurity, and expert professional
                  services.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-smooth">
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      15+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-smooth">
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      500+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Happy Clients
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-smooth">
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      50+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Products
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-smooth">
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      24/7
                    </div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The dedicated professionals driving innovation and excellence at
                Brickspring
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-2 hover:border-accent transition-smooth hover:shadow-xl">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                    <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                      <a
                        href={member.linkedin}
                        className="bg-primary-foreground/90 p-2 rounded-full hover:bg-accent transition-smooth">
                        <Linkedin className="h-4 w-4 text-primary" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="bg-primary-foreground/90 p-2 rounded-full hover:bg-accent transition-smooth">
                        <Mail className="h-4 w-4 text-primary" />
                      </a>
                    </div>
                  </div>
                  <CardContent className="pt-5 pb-6 text-center">
                    <h3 className="text-lg font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-accent font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-accent transition-smooth">
                <CardContent className="pt-8">
                  <Target className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower businesses with innovative weighing solutions and
                    technology services that drive efficiency, accuracy, and
                    growth.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-accent transition-smooth">
                <CardContent className="pt-8">
                  <Eye className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the leading provider of integrated weighing and
                    technology solutions in East Africa, recognized for
                    innovation and customer excellence.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-accent transition-smooth">
                <CardContent className="pt-8">
                  <Users className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl mb-4">Our Values</h3>
                  <p className="text-muted-foreground">
                    Quality, integrity, innovation, and customer satisfaction
                    are at the core of everything we do.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="mb-6">Certifications & Partnerships</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our commitment to quality and excellence is validated by
              industry-leading certifications
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                "ISO 9001",
                "ISO 27001",
                "CE Certified",
                "Industry Partner",
              ].map((cert, index) => (
                <Card key={index} className="hover:shadow-xl transition-smooth">
                  <CardContent className="p-8">
                    <Award className="h-12 w-12 text-accent mx-auto mb-3" />
                    <div className="font-semibold">{cert}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
