import { motion } from 'framer-motion';
import { Users, Video, FastForward, TrendingUp, Wallet, ShieldCheck } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      title: "Large audience reach",
      description: "Access our engaged community of over 510,000+ followers on TikTok and Instagram.",
      icon: <Users className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Professional content",
      description: "High-quality, viral-ready promotional videos tailored to your brand identity.",
      icon: <Video className="w-8 h-8 text-rose-500" />
    },
    {
      title: "Fast campaign execution",
      description: "Quick turnaround times to ensure your brand message hits the market when it matters.",
      icon: <FastForward className="w-8 h-8 text-amber-500" />
    },
    {
      title: "Proven marketing results",
      description: "Data-driven strategies that turn views into real customers and revenue.",
      icon: <TrendingUp className="w-8 h-8 text-green-500" />
    },
    {
      title: "Affordable packages",
      description: "Premium influencer marketing that fits your budget, from startups to hotels.",
      icon: <Wallet className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Trusted by Many",
      description: "Join the 100+ businesses who have successfully grown with our promotions.",
      icon: <ShieldCheck className="w-8 h-8 text-cyan-500" />
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-zinc-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
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
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            We don't just post content; we create impact. Our approach combines authentic storytelling with strategic reach.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-800/50 border border-zinc-700 hover:border-primary/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
