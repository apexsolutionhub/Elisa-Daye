import { motion } from 'framer-motion';
import { Users, Video, FastForward, TrendingUp, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WhyUs = () => {
  const features = [
    {
      title: "Large audience reach",
      description: "Tap into our network of over 510,000+ active and engaged followers.",
      icon: <Users className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Professional content",
      description: "High-quality video production tailored to your brand identity.",
      icon: <Video className="w-8 h-8 text-rose-500" />
    },
    {
      title: "Fast campaign execution",
      description: "Quick turnaround from concept to live post to keep your brand relevant.",
      icon: <FastForward className="w-8 h-8 text-amber-500" />
    },
    {
      title: "Proven marketing results",
      description: "Strategies designed to drive visibility, trust, and real customer growth.",
      icon: <TrendingUp className="w-8 h-8 text-green-500" />
    },
    {
      title: "Affordable packages",
      description: "Competitive pricing that offers maximum ROI for businesses of all sizes.",
      icon: <Wallet className="w-8 h-8 text-purple-500" />
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-zinc-950 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-[120px]" />
         <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Why Choose Us
          </motion.h2>
          <p className="text-zinc-400 text-lg">
            We don't just post content; we create meaningful connections between your brand and thousands of potential customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-primary to-secondary flex flex-col justify-center text-center lg:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Grow?</h3>
            <p className="text-white/80 text-sm mb-6">
              Join the hundreds of brands we've helped reach their full potential.
            </p>
            <Button variant="secondary" className="rounded-full font-bold" asChild>
              <a href="#contact">Contact Us Now</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
