"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ShieldCheck,
  BadgeDollarSign,
  Zap,
  Plane,
  Car,
  Clock,
  Star,
  ChevronDown,
  CheckCircle2,
  CalendarDays,
  ClipboardCheck,
  PlaneTakeoff,
  Building2,
  ArrowRight,
  Search,
  Check,
  ShieldAlert,
  Users,
  MapPin,
  Quote,
  CreditCard,
  CheckCircle,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { DateTimePicker } from "@/components/ui/DatePicker";
import AirportPopover from "@/components/ui/AirportPicker"
import { api } from "@/lib/api";
import type React from "react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const steps = [
  {
    icon: CalendarDays,
    num: "01",
    title: "Enter Dates",
    desc: "Pick your drop-off and pick-up dates and times",
  },
  {
    icon: ClipboardCheck,
    num: "02",
    title: "Fill Details",
    desc: "Enter your car and contact information",
  },
  {
    icon: CheckCircle2,
    num: "03",
    title: "Get Confirmed",
    desc: "Receive instant confirmation with your slot number",
  },
  {
    icon: PlaneTakeoff,
    num: "04",
    title: "Park & Fly",
    desc: "Drop off your car and head to the terminal",
  },
];

const features = [
  {
    icon: Clock,
    title: "CCTV Monitored 24/7",
    desc: "High-definition cameras monitor our entire facility around the clock.",
  },
  {
    icon: Shield,
    title: "Secure Gated Facilities",
    desc: "Entry and exit restricted only to authorized personnel and customers.",
  },
  {
    icon: Users,
    title: "Professional Staff",
    desc: "Our highly trained team treats your vehicle with the utmost respect.",
  },
  {
    icon: CheckCircle,
    title: "Instant Confirmation",
    desc: "Book online and receive your entry instructions immediately via email/SMS.",
  },
  {
    icon: MapPin,
    title: "Close to Terminals",
    desc: "Located just minutes away from Heathrow Terminals 2, 3, 4, and 5.",
  },
  {
    icon: CreditCard,
    title: "Free Cancellation",
    desc: "Plans change. Cancel up to 24 hours prior to arrival at no extra cost.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Frequent Flyer",
    text: "Absolutely brilliant service! Booked within a minute and my car was safe the entire trip. Will definitely use again.",
    stars: 5,
    initials: "SM",
    color: "bg-blue-500",
  },
  {
    name: "James R.",
    role: "Business Traveller",
    text: "Best airport parking I've ever used. The price was unbeatable and the whole process was seamless.",
    stars: 5,
    initials: "JR",
    color: "bg-purple-500",
  },
  {
    name: "Emily K.",
    role: "Family Traveller",
    text: "Used Heathrow Safe Parking for our family holiday. Easy booking, great price, and peace of mind knowing our car was secure.",
    stars: 5,
    initials: "EK",
    color: "bg-emerald-500",
  },
];

const faqs = [
  {
    q: "How do I book a parking space?",
    a: "Simply enter your drop-off and pick-up dates, fill in your vehicle and contact details, and confirm your booking. You'll receive an instant confirmation with a unique tracking number.",
  },
  {
    q: "Do I need to create an account?",
    a: "No account needed! Just book and go. You'll receive a tracking number to manage your booking anytime.",
  },
  {
    q: "How is the price calculated?",
    a: "Pricing is based on chargeable days and follows our current admin-managed pricing schedule. You will always see the live total before payment.",
  },
  {
    q: "Can I cancel or modify my booking?",
    a: "Please contact our support team with your tracking number and we'll be happy to assist with any changes or cancellations.",
  },
  {
    q: "Is the car park secure?",
    a: "Absolutely. Our facility has 24/7 CCTV surveillance, security patrols, and controlled access. Your vehicle is in safe hands.",
  },
];

// ─── Page Component ────────────────────────────────────────────────────────────

export default function HomePage() {
  const router = useRouter();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startingDayPrice, setStartingDayPrice] = useState(12);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleQuickBook = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (startDate && endDate) {
      router.push(`/book?start=${startDate}&end=${endDate}`);
    } else {
      router.push("/book");
    }
  };

  useEffect(() => {
    api
      .getStartingDayPrice()
      .then((res) => setStartingDayPrice(res.data))
      .catch(() => {});
  }, []);

  return (
    <div className="overflow-hidden">
      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      {/* <section className="bg-image[url(/container.png)] relative overflow-hidden"> */}
      <section className="bg-[url('/hero_bg.png')] bg-cover bg-center relative overflow-hidden pt-10 lg:pt-0">
        {/* Diagonal orange accent strips */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: headline + trust badges */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-normal mb-6 text-white bg-transparent backdrop-blur-sm ">
                <Star className="w-3.5 h-3.5 fill-white" />
                Rated 4.9/5 by 50,000+ Travellers
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-nasal leading-tight mb-5 text-white text-stroke">
                Secure Your{" "}
                <span className="text-primary text-noice">
                  Heathrow Parking
                </span>{" "}
                in Seconds.
              </h1>

              <p className="text-lg text-ring mb-8 max-w-lg leading-relaxed">
                Real-time prices. 24/7 monitored facilities. No hidden fees. The
                smart way to park and fly.
              </p>

              {/* Mini trust badges */}
              {/* <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { icon: ShieldCheck, label: "24/7 Security" },
                  { icon: BadgeDollarSign, label: "Best Prices" },
                  { icon: Zap, label: "Instant Booking" },
                  { icon: MapPin, label: "Guaranteed Space" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-muted rounded-full px-3 py-1.5 border border-ring"
                  >
                    <Icon className="w-3.5 h-3.5 text-primary" />
                    {label}
                  </div>
                ))}
              </div> */}

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="px-8 py-3  font-semibold text-base w-full md:w-auto"
                >
                  <Link href="/book">
                    Book Now <ArrowRight />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="custom"
                  className="px-8 py-3 rounded-full font-semibold text-base text-white w-full md:w-auto"
                >
                  <Link href="/track">Track Booking</Link>
                </Button>
              </div>
            </div>

            {/* Right: orange booking widget */}
            <div className="animate-fade-in hidden md:block">
              <Card className="shadow-none rounded-2xl p-6 lg:p-8  backdrop-blur-sm bg-white/10 text-card-foreground border border-border">
                <CardHeader className="p-0 text-white">
                  <CardTitle className="text-xl font-semibold mb-1">
                    Find Your Parking
                  </CardTitle>
                  {/* <CardDescription className="text-sm mb-4  text-primary">
                    Enter your dates to see pricing
                  </CardDescription> */}
                </CardHeader>

                <CardContent className="p-0">
                  <form onSubmit={handleQuickBook} className="space-y-4">
                    <div className="space-y-1.5">
                      <Label>Select Airport</Label>
                      <AirportPopover/>
                    </div>
                    <div className="space-y-1.5">
                      <Label>Drop-off Date & Time</Label>

                      <DateTimePicker
                        value={startDate}
                        onChange={setStartDate}
                        homepage
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label>Pick-up Date & Time</Label>

                      <DateTimePicker
                        value={endDate}
                        onChange={setEndDate}
                        homepage
                      />
                    </div>

                    <Button className="w-full rounded-full">
                      Check Price & Book
                    </Button>
                  </form>

                  <p className="text-xs text-ring text-center mt-3 flex items-center justify-center gap-1">
                    <ShieldAlert className="h-3 w-3" />
                    Fully secured checkout
                    {/* From £{startingDayPrice}/day • No hidden fees */}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden bg-primary-light/10 md:bg-transparent md:bg-[url('/left.svg')] bg-no-repeat bg-cover ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">
              How Booking Works
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Four simple steps to secure your space and start your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            <div className="hidden lg:block absolute top-10 left-[12.5%] w-[75%] border-t border-dashed border-gray-300 z-0" />
            {/* STEP 1 */}
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connector (RIGHT SIDE ONLY) */}

                {/* Icon */}
                <div className="relative inline-flex justify-center mb-6 z-10">
                  {/* <span className="absolute -top-2 -right-2 bg-foreground text-background text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                    01
                  </span> */}

                  <div className="w-20 h-20 rounded-full bg-primary shadow-lg flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      {/* <CalendarDays className="w-6 h-6 text-white" /> */}
                      {step.num}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          OUR PARKING SERVICES
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:bg-[url('/right.svg')] relative overflow-hidden bg-no-repeat bg-cover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">
              Why Choose Heathrow Safe Parking
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We go above and beyond to ensure your vehicle is safe while you
              travel.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200 bg-white p-6 flex gap-4 items-start hover:shadow-md transition"
                >
                  {/* Icon Badge */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/20 shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden bg-primary-light/10 md:bg-transparent md:bg-[url('/left.svg')] bg-no-repeat bg-cover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground">
              Don&apos;t just take our word for it. Join thousands of happy
              travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-background rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow relative flex flex-col h-full"
              >
                <Quote className="absolute top-5 right-5 w-6 h-6 text-transparent fill-primary/20" />

                <div className="flex justify-between">
                  <div className="flex mb-3">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 text-primary fill-primary"
                      />
                    ))}
                  </div>
                </div>

                {/* Text (this should grow) */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-border pt-4 mt-6">
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {t.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MORE THAN JUST A PARKING SPACE  (split section)
      ══════════════════════════════════════════════════════ */}
      <section className="py-16">
        <div className="max-w-full mx-auto px- sm:px- lg:px- z-10 bg-primary">
          {/* Card Container */}
          <div className="grid lg:grid-cols-2 overflow-hidden shadow-xl">
            {/* Left Panel */}
            <div className="  px-8 py-16 lg:px-16 flex items-center">
              <div className="text-white lg:max-w-md">
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5">
                  A Seamless, Stress-Free Experience
                </h2>

                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  From the moment you drop off your car to the moment you
                  return, our team ensures your vehicle is safe and secure. Our
                  facilities are fully monitored, gated, and staffed around the
                  clock.
                </p>

                <div className="flex flex-col gap-3">
                  {[
                    {
                      title: "Drop-off in under 5 minutes",
                    },
                    {
                      title: "Complimentary airport transfer included",
                    },
                    {
                      title: "Instant email confirmation with direction",
                    },
                    {
                      title: "Return your car clean and ready to drive",
                    },
                  ].map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="flex flex-row gap-3 items-center "
                      >
                        <div className="p-1 rounded-full bg-white/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>

                        <h4 className="text-white font-normal">{item.title}</h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Image Panel */}
            <div className="hidden lg:flex items-center justify-center min-h-[200px]">
              <Image
                src="/happy_customer_parking.png"
                alt="Happy Customer"
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FAQs
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden bg-primary-light/10 md:bg-transparent md:bg-[url('/left.svg')] bg-no-repeat bg-cover">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our service
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-border overflow-hidden shadow-sm bg-background"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-foreground hover:bg-muted/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground shrink-0 ml-4 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed animate-fade-in border-t border-border pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[url('/cta.png')] bg-cover bg-center relative overflow-hidden">
        {/* <Image src="/readyToSave.svg" alt="" width={1440} height={353} /> */}
        {/* Decorative angled shapes */}
        {/* <div className="pointer-events-none absolute -right-20 top-0 h-full w-64 bg-white/5 rotate-12 rounded-3xl" /> */}
        {/* <div className="pointer-events-none absolute -left-16 bottom-0 h-full w-48 bg-white/5 -rotate-12 rounded-3xl" /> */}
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Ready to Save on Airport Parking?
          </h2>
          <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
            Book your guaranteed parking space today and travel with complete
            peace of mind.
          </p>
          <Button
            asChild
            className="bg-white text-primary hover:bg-primary hover:text-white font-semibold px-6  lg:px-10 py-4 rounded-xl text-lg border-0"
          >
            <Link href="/book">Book Now — From £{startingDayPrice}/day</Link>
          </Button>
        </div>
      </section>
      {/* </div> */}
    </div>
  );
}
