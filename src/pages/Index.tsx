import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Gift, Eye, BarChart3, MapPin, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-illustration.png";
import step1Img from "@/assets/step1-signup.png";
import step2Img from "@/assets/step2-surveys.png";
import step3Img from "@/assets/step3-rewards.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const brands = ["Target", "Amazon", "PayPal", "Starbucks", "AMC Theaters"];

const features = [
  { icon: Gift, title: "Rewards & Incentives", desc: "Earn gift cards from retailers like Amazon and Apple, and PayPal cash for sharing your opinions." },
  { icon: Eye, title: "Influence Tomorrow", desc: "Brands, organizations, and researchers want to hear what you have to say. Your insights drive change." },
  { icon: BarChart3, title: "Diverse Surveys", desc: "From product feedback to social issues, our surveys cover a wide range of topics you care about." },
];

const testimonials = [
  { quote: "I love this platform because it has helped me treat myself a couple times every year. This is so important as a mom of a toddler.", author: "S.D.", location: "Illinois" },
  { quote: "Great surveys and reasonable compensation for them. I love being a part of this community!", author: "E.R.", location: "Florida" },
  { quote: "I really enjoy being a part of this community. The surveys are the perfect length and are about many different subjects.", author: "J.L.", location: "Utah" },
];

const steps = [
  { img: step1Img, title: "Become a Member", desc: "Sign up for free and become a valued member of our survey community." },
  { img: step2Img, title: "Take Surveys", desc: "Select from a variety of surveys that match your interests and demographics." },
  { img: step3Img, title: "Earn & Redeem Rewards", desc: "Earn points and sweepstakes entries for surveys you complete. Redeem for PayPal, gift cards and more." },
];

const Index = () => {
  const { scrollY } = useScroll();
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (v) => setShowSticky(v > 600));
  }, [scrollY]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4">
        <span className="font-heading text-2xl font-800 text-primary">unlock</span>
        <div className="flex gap-3 items-center">
          <button className="text-sm font-medium text-foreground min-h-[48px] px-3">Sign Up</button>
          <button className="bg-primary text-primary-foreground text-sm font-semibold rounded-lg px-5 min-h-[48px] active:scale-95 transition-transform">Login</button>
        </div>
      </header>

      {/* Hero */}
      <motion.section className="px-5 pt-4 pb-8" initial="hidden" animate="visible" variants={fadeUp}>
        <div className="flex flex-col gap-4">
          <h1 className="font-heading text-[2rem] leading-tight font-800 text-foreground">
            Ready to Unlock<br />
            <span className="text-primary">Surveys</span>
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed max-w-[320px]">
            Join Unlock's dynamic community of survey panelists today and earn rewards for your opinion.
          </p>
          <p className="text-sm text-foreground font-medium">
            Become a member today to unlock <strong>500</strong> welcome points.
          </p>
          <a href="https://afflat3d3.com/trk/lnk/39AB3687-53A7-49BB-BD1E-526A59261A4A/?o=30447&c=918277&a=600801&k=C8C7A06F7F70C7DF852F8011DE24F42B&l=34796&s1=ozzyunlock" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground font-semibold rounded-lg px-8 min-h-[52px] w-fit active:scale-95 transition-transform text-base inline-flex items-center">
            Join Now
          </a>
        </div>
        <img src={heroImg} alt="Person taking surveys on laptop" className="w-full max-w-[280px] mx-auto mt-6" />
      </motion.section>

      {/* Brands */}
      <motion.section className="px-5 py-8 border-t border-border" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <p className="text-sm text-muted-foreground text-center mb-4">Earn points to redeem gift cards</p>
        <div className="flex flex-wrap justify-center gap-4">
          {brands.map((b) => (
            <span key={b} className="text-sm font-semibold text-foreground bg-card rounded-lg px-4 py-2">{b}</span>
          ))}
        </div>
      </motion.section>

      {/* Why Join */}
      <motion.section className="px-5 py-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="font-heading text-2xl font-bold text-foreground text-center">Why join us?</h2>
        <p className="text-muted-foreground text-sm text-center mt-2">Learn how you can earn rewards while shaping the future.</p>
        <a href="https://afflat3d3.com/trk/lnk/39AB3687-53A7-49BB-BD1E-526A59261A4A/?o=30447&c=918277&a=600801&k=C8C7A06F7F70C7DF852F8011DE24F42B&l=34796&s1=ozzyunlock" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground font-semibold rounded-lg px-6 min-h-[48px] mx-auto mt-4 active:scale-95 transition-transform inline-flex items-center justify-center">Join Now</a>
        <div className="flex flex-col gap-6 mt-8">
          {features.map((f) => (
            <div key={f.title} className="bg-card rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section className="px-5 py-12 bg-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-6">What our members are saying…</h2>
        <div className="flex flex-col gap-4">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-background rounded-xl p-5 border border-border">
              <p className="text-sm text-muted-foreground italic leading-relaxed mb-4">"{t.quote}"</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">–{t.author}</span>
                <span className="flex items-center gap-1 text-xs text-primary font-medium">
                  <MapPin className="w-3 h-3" /> {t.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Stats Banner */}
      <section className="bg-primary px-5 py-10 text-center">
        <p className="text-primary-foreground/80 text-sm font-medium">Total value awarded to Unlock survey panelists in February</p>
        <p className="text-primary-foreground font-heading text-4xl font-800 mt-2">$119,548.17</p>
      </section>

      {/* How It Works */}
      <motion.section className="px-5 py-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="font-heading text-2xl font-bold text-foreground text-center">How it works?</h2>
        <p className="text-muted-foreground text-sm text-center mt-2">Here's a step-by-step guide to get you started.</p>
        <a href="https://afflat3d3.com/trk/lnk/39AB3687-53A7-49BB-BD1E-526A59261A4A/?o=30447&c=918277&a=600801&k=C8C7A06F7F70C7DF852F8011DE24F42B&l=34796&s1=ozzyunlock" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground font-semibold rounded-lg px-6 min-h-[48px] mx-auto mt-4 active:scale-95 transition-transform inline-flex items-center justify-center">Join Now</a>
        <div className="flex flex-col gap-8 mt-8">
          {steps.map((s, i) => (
            <div key={s.title} className="text-center">
              <img src={s.img} alt={s.title} className="w-40 h-40 object-contain mx-auto mb-3" />
              <h3 className="font-heading font-bold text-foreground">Step {i + 1}: {s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Final CTA */}
      <section className="px-5 py-16 text-center border-t border-border">
        <span className="font-heading text-2xl font-800 text-primary">unlock</span>
        <h2 className="font-heading text-xl font-bold text-foreground mt-4">Ready to start getting rewarded for your opinions?</h2>
        <p className="text-muted-foreground text-sm mt-2">Join Unlock now and become a member of a community that values your voice.</p>
        <a href="https://afflat3d3.com/trk/lnk/39AB3687-53A7-49BB-BD1E-526A59261A4A/?o=30447&c=918277&a=600801&k=C8C7A06F7F70C7DF852F8011DE24F42B&l=34796&s1=ozzyunlock" target="_blank" rel="noopener noreferrer" className="bg-foreground text-background font-semibold rounded-lg px-8 min-h-[52px] mt-6 active:scale-95 transition-transform inline-flex items-center justify-center">Join Now</a>
        <div className="flex justify-center gap-4 mt-6">
          {["X", "Facebook", "YouTube"].map((s) => (
            <span key={s} className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-xs font-semibold text-muted-foreground">{s[0]}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 py-6 border-t border-border text-center">
        <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
          {["About", "Privacy Policy", "Terms & Conditions", "Cookies", "Contact", "FAQs"].map((l) => (
            <a key={l} href="#" className="hover:text-foreground">{l}</a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-3">Copyright © 2025 Maru/</p>
      </footer>

      {/* Sticky Bottom CTA */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border px-5 py-3 z-50"
        initial={{ y: 100 }}
        animate={{ y: showSticky ? 0 : 100 }}
        transition={{ duration: 0.25 }}
      >
        <a href="https://afflat3d3.com/trk/lnk/39AB3687-53A7-49BB-BD1E-526A59261A4A/?o=30447&c=918277&a=600801&k=C8C7A06F7F70C7DF852F8011DE24F42B&l=34796&s1=ozzyunlock" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground font-semibold rounded-lg w-full min-h-[52px] active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
          Join Now <ChevronRight className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  );
};

export default Index;
