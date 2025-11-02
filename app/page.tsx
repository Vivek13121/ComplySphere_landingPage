"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  Globe,
  Shield,
  Zap,
  TrendingUp,
  Check,
  MessageSquare,
  BarChart3,
  FileText,
  CreditCard,
} from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Prism from "@/components/prism";

gsap.registerPlugin(ScrollTrigger);

// Feature card component with GSAP animations
function FeatureCard({ feature, index }: { feature: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Liquid flow animation on scroll
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 100,
        rotateX: -15,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 0.5,
          markers: false,
        },
        ease: "power3.out",
      }
    );

    // Hover animation
    const card = cardRef.current;
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -10,
        boxShadow: "0 25px 50px rgba(69, 102, 255, 0.3)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative bg-linear-to-br from-white/40 to-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 hover:border-primary/50 transition-smooth overflow-hidden"
      style={{
        perspective: "1200px",
      }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10">
        <div className="flex gap-4 items-start mb-4">
          <div className="shrink-0">
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-linear-to-br from-primary/30 to-accent/30 group-hover:from-primary/50 group-hover:to-accent/50 transition-all duration-300">
              {feature.icon}
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-foreground">
          {feature.title}
        </h3>
        <ul className="space-y-2">
          {feature.items.map((item: string, i: number) => (
            <li key={i} className="text-foreground/70 text-sm flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Animated border glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
    </div>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 60,
        rotateY: -10,
      },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 0.7,
        delay: index * 0.08,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          end: "top 55%",
          scrub: 0.4,
          markers: false,
        },
        ease: "power3.out",
      }
    );

    // Hover animation
    const card = cardRef.current;
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -8,
        boxShadow: "0 20px 40px rgba(69, 102, 255, 0.2)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative bg-linear-to-br from-blue-50/60 via-purple-50/40 to-blue-50/30 dark:from-blue-950/40 dark:via-purple-950/30 dark:to-blue-900/20 backdrop-blur-xl rounded-2xl p-8 border border-blue-200/50 dark:border-blue-800/40 hover:border-primary/60 transition-smooth overflow-hidden shadow-lg hover:shadow-2xl"
      style={{
        perspective: "1200px",
      }}
    >
      {/* Animated gradient background overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/8 via-accent/5 to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      {/* Glassy shine effect */}
      <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500 rounded-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="font-bold text-lg mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <ul className="space-y-2.5">
          {service.items.map((item: string, j: number) => (
            <li
              key={j}
              className="text-foreground/65 text-sm flex gap-3 group-hover:text-foreground/80 transition-colors"
            >
              <span className="text-primary font-bold text-base shrink-0">
                •
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary/0 via-primary/40 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);

  const handleContactUs = () => {
    const phoneNumber = "9896225019";
    const message = "Hello, I'm interested in ComplySphere's services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      title: "Firm Discovery & Verification",
      icon: <Globe className="w-8 h-8 text-primary" />,
      items: [
        "Browse 100+ verified accounting firms across India",
        "Filter by location, services, or specialization",
        "View firm profiles including experience, services, certifications, client reviews, and portfolio",
      ],
    },
    {
      title: "Service Request System",
      icon: <FileText className="w-8 h-8 text-primary" />,
      items: [
        "Post Requirements describing your compliance needs",
        "Receive Proposals from multiple firms",
        "Compare & Choose based on pricing, experience, and ratings",
        "Track Progress with real-time project updates",
      ],
    },
    {
      title: "Real-time Messaging",
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      items: [
        "Direct, secure chat between businesses and firms",
        "Instant notifications for new proposals or messages",
        "Clarify project details, negotiate pricing, and finalize deliverables easily",
      ],
    },
    {
      title: "Smart Dashboards",
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      items: [
        "Business Dashboard: Manage service requests, track progress, and communicate with firms",
        "Firm Dashboard: Showcase expertise, submit proposals, and handle multiple projects efficiently",
      ],
    },
    {
      title: "AI Chatbot Assistant",
      icon: <Zap className="w-8 h-8 text-accent" />,
      items: [
        "Powered by Gemini Flash 2.0, your personal compliance companion",
        "GST & tax filing guidance, Company registration help, Tax planning suggestions",
        "Deadline reminders and compliance updates",
      ],
    },
    {
      title: "Document Management",
      icon: <FileText className="w-8 h-8 text-accent" />,
      items: [
        "Securely upload and share compliance documents",
        "Cloud-based access and automatic versioning",
        "Maintain audit trails and download final reports",
      ],
    },
    {
      title: "Payment & Invoicing",
      icon: <CreditCard className="w-8 h-8 text-accent" />,
      items: [
        "Milestone-based, escrow-protected payments",
        "Auto-generated invoices",
        "Transparent transaction history",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-secondary/10 to-background relative">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>

      <div className="relative z-10">
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
            isScrolled
              ? "bg-background/95 backdrop-blur shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              <Image
                src="/complysphere-logo.png"
                alt="ComplySphere"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-bold text-xl text-foreground">
                ComplySphere
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#about"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="#features"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Features
              </Link>
              <Link
                href="#services"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                href="#why"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Why Us
              </Link>
            </div>

            <button
              onClick={handleContactUs}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Hero content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-1 gap-8 items-center">
              {/* Left side - Text */}
              <div>
                <div className="mb-6 inline-block animate-fade-in-up">
                  <div className="bg-primary/10 border border-primary/30 rounded-full px-4 py-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-primary">
                      India's Premier Compliance Marketplace
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-balance leading-tight mb-6 animate-fade-in-up">
                  Connecting Businesses with Verified Accounting &{" "}
                  <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Compliance Experts
                  </span>
                </h1>

                <p className="text-lg text-foreground/60 text-balance mb-8 animate-fade-in-up leading-relaxed">
                  Simplify compliance, taxation, and financial management with
                  India's first marketplace that connects you to trusted CA and
                  compliance firms – all in one platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
                  <button
                    onClick={handleContactUs}
                    className="group bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Contact Us
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section
          id="about"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-balance">
              About ComplySphere
            </h2>

            <p className="text-lg text-foreground/70 mb-8 text-center leading-relaxed">
              At ComplySphere, we bridge the gap between businesses seeking
              reliable financial services and professional firms offering expert
              compliance solutions.
            </p>

            <p className="text-lg text-foreground/70 mb-12 text-center leading-relaxed">
              Whether you're a startup, SME, or enterprise, ComplySphere helps
              you find verified accounting and compliance partners with
              transparent pricing and smart automation tools.
            </p>

            <div className="bg-linear-to-br from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/20">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Our Mission
              </h3>
              <p className="text-center text-foreground/70 mb-8 leading-relaxed">
                To make compliance effortless and accessible through:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/20">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Transparent Pricing
                    </h4>
                    <p className="text-foreground/60 text-sm">
                      No hidden costs, straightforward and honest pricing
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/20">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Verified Professionals
                    </h4>
                    <p className="text-foreground/60 text-sm">
                      Only certified firms and qualified experts
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/20">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      AI-Powered Guidance
                    </h4>
                    <p className="text-foreground/60 text-sm">
                      Instant assistance for any compliance need (Coming Soon)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/20">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Streamlined Workflows
                    </h4>
                    <p className="text-foreground/60 text-sm">
                      From discovery to delivery, simplified process
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center text-balance">
              Who We Serve
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* For Businesses */}
              <div className="bg-linear-to-br from-primary/10 to-transparent rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  For Businesses
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span className="text-foreground/70">
                      Startups needing company registration & compliance setup
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span className="text-foreground/70">
                      SMEs requiring ongoing accounting and tax filing
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span className="text-foreground/70">
                      Enterprises seeking specialized audit or advisory services
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span className="text-foreground/70">
                      Any organization looking for trustworthy financial
                      partners
                    </span>
                  </li>
                </ul>
              </div>

              {/* For Accounting Firms */}
              <div className="bg-linear-to-br from-accent/10 to-transparent rounded-2xl p-8 border border-accent/20">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  For Accounting Firms
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <span className="text-foreground/70">
                      Chartered Accountants expanding their client base
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <span className="text-foreground/70">
                      Tax consultants offering specialized services
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <span className="text-foreground/70">
                      Compliance professionals seeking new opportunities
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <span className="text-foreground/70">
                      Audit firms showcasing their expertise globally
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-secondary/5 to-background"
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-balance mb-4">
                Key Features
              </h2>
              <p className="text-center text-foreground/60 text-lg">
                Powerful tools designed for seamless compliance
              </p>
            </div>

            <div
              ref={containerRef}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {features.map((feature, index) => (
                <div key={index}>
                  <FeatureCard feature={feature} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Covered */}
        <section
          id="services"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background to-secondary/5"
        >
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-balance mb-4">
                Services Covered
              </h2>
              <p className="text-center text-foreground/60 text-lg">
                Comprehensive compliance solutions for every stage
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Tax Filing & Planning",
                  items: [
                    "ITR filing",
                    "Corporate tax",
                    "International taxation",
                    "Tax notices",
                  ],
                },
                {
                  title: "GST Compliance",
                  items: [
                    "Registration",
                    "Returns",
                    "Refunds",
                    "Input credit management",
                  ],
                },
                {
                  title: "Company Registration",
                  items: [
                    "Pvt. Ltd.",
                    "LLP",
                    "Proprietorship",
                    "Partnership setup",
                  ],
                },
                {
                  title: "Audit Services",
                  items: ["Statutory", "Internal", "Tax", "Due diligence"],
                },
                {
                  title: "Payroll Management",
                  items: [
                    "Salary processing",
                    "PF/ESI compliance",
                    "TDS on salaries",
                  ],
                },
                {
                  title: "Annual Compliance",
                  items: ["ROC filings", "Board meetings", "Director KYC"],
                },
                {
                  title: "Bookkeeping & Accounting",
                  items: [
                    "Financial statements",
                    "Balance sheets",
                    "Daily entries",
                  ],
                },
                {
                  title: "Business Advisory",
                  items: [
                    "Financial consulting",
                    "Business structure planning",
                    "Funding assistance",
                  ],
                },
              ].map((service, i) => (
                <ServiceCard key={i} service={service} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose ComplySphere */}
        <section id="why" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center text-balance">
              Why Choose ComplySphere?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="group p-8 rounded-2xl bg-linear-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-smooth hover:shadow-2xl hover:shadow-primary/10">
                <div className="w-14 h-14 bg-linear-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Trusted by Top Firms
                </h3>
                <p className="text-foreground/60">
                  Trusted by top CA and compliance firms across India
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-linear-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-smooth hover:shadow-2xl hover:shadow-primary/10">
                <div className="w-14 h-14 bg-linear-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Global Reach
                </h3>
                <p className="text-foreground/60">
                  Designed for startups, SMEs, and global businesses expanding
                  into India
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-linear-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-smooth hover:shadow-2xl hover:shadow-primary/10">
                <div className="w-14 h-14 bg-linear-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  AI & Automation
                </h3>
                <p className="text-foreground/60">
                  Backed by AI and automation for faster compliance cycles
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-linear-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-smooth hover:shadow-2xl hover:shadow-primary/10">
                <div className="w-14 h-14 bg-linear-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Reliable & Secure
                </h3>
                <p className="text-foreground/60">
                  Transparent, secure, and reliable at every step
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-linear-to-br from-primary/10 to-accent/10 rounded-3xl p-12 md:p-16 border border-primary/20 text-center">
              <h2 className="text-4xl font-bold mb-8 text-balance">
                Ready to Start Your Global Compliance Journey?
              </h2>
              <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of startups and businesses already leveraging our
                platform for seamless international compliance.
              </p>
              <button
                onClick={handleContactUs}
                className="bg-linear-to-r from-primary to-accent text-primary-foreground px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Contact Us
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        <footer className="border-t border-border bg-card/50 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/complysphere-logo.png"
                    alt="ComplySphere"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <span className="font-bold text-lg">ComplySphere</span>
                </div>
                <p className="text-foreground/60 text-sm">
                  Bridging global businesses with Indian compliance experts.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li>
                    <a
                      href="#features"
                      className="hover:text-primary transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Security
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li>
                    <a
                      href="#about"
                      className="hover:text-primary transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
              <p>© 2025 ComplySphere. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
