import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  {
    category: "Products & Ordering",
    questions: [
      {
        q: "How do I request a quote for your products?",
        a: "You can request a quote by visiting our Quote page, calling us at +254 725 903309, or emailing info@brickspring.co.ke. We typically respond within 24 hours.",
      },
      {
        q: "Do you offer bulk discounts?",
        a: "Yes, we offer competitive volume discounts for bulk orders. Contact our sales team for customized pricing based on your quantity requirements.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfers, M-Pesa, cheques, and can arrange credit terms for established clients. All prices are quoted in Kenya Shillings (KSh).",
      },
      {
        q: "Do you ship nationwide in Kenya?",
        a: "Yes, we deliver across Kenya. Delivery timelines vary by location — typically 1-3 business days for Nairobi and major towns, and 3-7 days for remote areas.",
      },
      {
        q: "Can I download a product catalog?",
        a: "Yes! Visit our Products page and click the 'Download Catalog' button to get our full product catalog with pricing in KSh.",
      },
    ],
  },
  {
    category: "Software Solutions",
    questions: [
      {
        q: "What software solutions does Brickspring offer?",
        a: "We offer Weighspring (Weighbridge Management), Timespring (Time-released Messaging), Payrollspring (Payroll Processing), Secuspring (Security Module), Safetyspring (Safety Management), and Parkspring (Park Management).",
      },
      {
        q: "Do your software products come with training?",
        a: "Yes, all our software products include comprehensive training for your team. We also provide user manuals, video tutorials, and ongoing support.",
      },
      {
        q: "Can your software integrate with existing systems?",
        a: "Absolutely. Our software solutions are built with integration in mind and support APIs, database connectivity, and third-party system integration. Our integration services team can assist with custom setups.",
      },
      {
        q: "Is cloud hosting available for your software?",
        a: "Yes, we offer both on-premise and cloud-hosted deployment options for all our software products, depending on your preference and infrastructure.",
      },
    ],
  },
  {
    category: "Weighing Equipment",
    questions: [
      {
        q: "Do you provide calibration services?",
        a: "Yes, we offer professional calibration services for all weighing equipment we sell. We also provide calibration certificates for regulatory compliance.",
      },
      {
        q: "What warranty do your weighing products come with?",
        a: "Our weighing equipment comes with a standard 1-2 year manufacturer warranty, depending on the product. Extended warranty options are also available.",
      },
      {
        q: "Do you offer installation for weighing equipment?",
        a: "Yes, our trained technicians provide professional installation services. This includes setup, calibration, testing, and user training.",
      },
    ],
  },
  {
    category: "Services & Support",
    questions: [
      {
        q: "What cybersecurity services do you offer?",
        a: "We provide penetration testing, vulnerability assessments, security audits, compliance consulting, and ongoing monitoring services to protect your business.",
      },
      {
        q: "Do you offer after-sales support?",
        a: "Yes, we provide comprehensive after-sales support including phone/email support, on-site maintenance, remote assistance, and spare parts supply.",
      },
      {
        q: "What is your response time for support issues?",
        a: "We aim to respond to all support queries within 4 hours during business hours. Critical issues receive priority attention with same-day resolution targets.",
      },
      {
        q: "Do you offer CCTV maintenance contracts?",
        a: "Yes, we offer annual maintenance contracts for CCTV installations that include regular inspections, cleaning, firmware updates, and priority support.",
      },
    ],
  },
  {
    category: "Company & General",
    questions: [
      {
        q: "Where is Brickspring located?",
        a: "Our office is located in Litein, Kericho, Kenya. Our postal address is P.O. Box 373-20210, Litein, Kericho, Kenya. We serve clients across Kenya and East Africa.",
      },
      {
        q: "How long has Brickspring been in business?",
        a: "Brickspring has been providing technology solutions since our founding, with years of experience serving businesses across Kenya in weighing, software, and security solutions.",
      },
      {
        q: "Do you work with government institutions?",
        a: "Yes, we are registered and compliant with all requirements for supplying goods and services to government institutions, parastatals, and county governments.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="gradient-hero text-primary-foreground py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              Find answers to common questions about our products, services, and company.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {faqs.map((category, idx) => (
              <div key={idx} className="mb-10">
                <h2 className="text-xl md:text-2xl font-bold mb-4">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, faqIdx) => (
                    <AccordionItem
                      key={faqIdx}
                      value={`${idx}-${faqIdx}`}
                      className="bg-card rounded-lg border px-4"
                    >
                      <AccordionTrigger className="text-left text-sm md:text-base font-medium">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            {/* CTA */}
            <div className="text-center mt-12 p-8 bg-card rounded-xl border">
              <h3 className="text-lg md:text-xl font-bold mb-3">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our team is ready to help. Get in touch with us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact">
                  <Button variant="default" size="lg">Contact Us</Button>
                </Link>
                <Link to="/quote">
                  <Button variant="accent" size="lg">Request a Quote</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
