import { motion } from 'framer-motion';
import { Target, Eye, Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const About = () => {
  const whyUs = [
    "Large and active social media audience",
    "Professional promotional videos",
    "Increased brand visibility",
    "Trusted by growing businesses",
    "Affordable promotion packages"
  ];

  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Grow Your Brand with the <br />
            <span className="text-primary">Power of Social Media Influence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed mb-8"
          >
            Welcome to Elisa & Daye Promotion, where we help businesses, brands, hotels, restaurants, and entrepreneurs reach thousands of potential customers through powerful social media promotion.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-md text-muted-foreground max-w-2xl mx-auto italic"
          >
            "We believe that every business deserves to be seen. Through creative videos, authentic content, and strategic social media marketing, we help our clients stand out in today's competitive digital world."
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted group shadow-xl">
                  <img 
                    src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/52afacfb-77d3-46e5-ad5c-769fe029d2bf/luxury-promotion-shoot-0a8da0e9-1780665034598.webp" 
                    alt="Social Media Shoot" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="bg-primary p-8 rounded-2xl text-white shadow-lg">
                  <Star className="w-8 h-8 mb-4 fill-white text-white" />
                  <div className="text-3xl font-bold mb-1">Elite</div>
                  <div className="opacity-80 font-medium">Marketing Strategy</div>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-zinc-900 p-8 rounded-2xl text-white shadow-lg">
                  <Eye className="w-8 h-8 mb-4 text-secondary" />
                  <div className="text-3xl font-bold mb-1">510K+</div>
                  <div className="opacity-80 font-medium text-secondary">Active Followers</div>
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted group shadow-xl">
                  <img 
                    src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/52afacfb-77d3-46e5-ad5c-769fe029d2bf/marketing-team-studio-acf1e237-1780665032576.webp" 
                    alt="Digital Growth" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
            {/* Absolute element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-primary to-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Why Businesses Choose Us</h3>
            <div className="space-y-4 mb-8">
              {whyUs.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-800 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl border border-border shadow-sm mb-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-primary">
                    <Target size={20} />
                    <h4 className="font-bold uppercase tracking-wider text-xs">Our Mission</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To help businesses grow by leveraging the power of social media influence and digital marketing.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3 text-secondary">
                    <Eye size={20} />
                    <h4 className="font-bold uppercase tracking-wider text-xs">Our Vision</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To become one of the leading social media promotion and influencer marketing brands, connecting businesses with millions of potential customers through engaging and impactful content.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-semibold text-lg">Ready to Reach More Customers?</p>
              <Button size="lg" className="w-fit rounded-full px-8 group bg-primary hover:bg-primary/90 text-white" asChild>
                <a href="#contact">
                  Start Promoting Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
