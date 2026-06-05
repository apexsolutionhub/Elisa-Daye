import { motion } from 'framer-motion';
import { Check, Zap, Crown, Instagram, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const Packages = () => {
  const packages = [
    {
      name: "Standard Package",
      price: "ETB 45,000",
      icon: <Zap className="w-8 h-8 text-primary" />,
      features: [
        "One promotional video",
        "Posted on your company's TikTok account",
        "Content creation guidance",
        "Increased audience engagement",
        "Basic campaign reporting"
      ],
      popular: false,
      color: "from-[#FE2C55] to-[#FF4D6D]"
    },
    {
      name: "Premium Package",
      price: "ETB 90,000",
      icon: <Crown className="w-8 h-8 text-amber-500" />,
      features: [
        "One promotional video",
        "Posted on Elisa & Daye TikTok account",
        "TikTok audience: 510,000+ followers",
        "Additional Instagram promotion",
        "Maximum brand visibility",
        "Campaign performance report"
      ],
      popular: true,
      color: "from-[#25F4EE] to-[#00C2FF]"
    }
  ];

  return (
    <section id="packages" className="py-24 relative overflow-hidden bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Flexible Promotion Packages
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Turn views into customers and followers into loyal clients. Choose the perfect plan to grow your business with Elisa & Daye Promotion.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative p-1 rounded-[2.5rem] transition-all duration-500",
                pkg.popular 
                  ? "bg-gradient-to-br from-[#FE2C55] via-[#9B30FF] to-[#25F4EE] shadow-2xl scale-105 z-10" 
                  : "bg-border hover:bg-muted-foreground/20"
              )}
            >
              <div className="bg-white dark:bg-zinc-900 rounded-[2.4rem] p-8 md:p-10 h-full flex flex-col">
                {pkg.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FE2C55] to-[#9B30FF] text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                    Most Recommended
                  </div>
                )}

                <div className="flex items-center justify-between mb-8">
                  <div className={cn(
                    "p-4 rounded-2xl bg-muted flex items-center justify-center",
                    pkg.popular ? "text-primary" : "text-muted-foreground"
                  )}>
                    {pkg.icon}
                  </div>
                  <div className="flex gap-2">
                    <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 shadow-sm border border-border">
                      <Play size={20} className="text-[#FE2C55] fill-[#FE2C55]" />
                    </div>
                    {pkg.popular && (
                      <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 shadow-sm border border-border">
                        <Instagram size={20} className="text-[#E4405F]" />
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl font-extrabold tracking-tight">{pkg.price}</span>
                  <span className="text-muted-foreground font-medium italic">/ single campaign</span>
                </div>

                <div className="space-y-5 mb-10 flex-grow">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-muted-foreground text-base leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={cn(
                    "w-full rounded-full h-14 text-lg font-bold shadow-xl transition-all duration-300 transform hover:scale-[1.02]",
                    pkg.popular 
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                      : "bg-zinc-900 dark:bg-white dark:text-zinc-900 hover:opacity-90 text-white"
                  )}
                  asChild
                >
                  <a href="#contact">Get Started with {pkg.name.split(' ')[0]}</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-1 bg-gradient-to-r from-[#FE2C55]/20 to-[#25F4EE]/20 rounded-full">
            <div className="flex flex-col sm:flex-row items-center gap-4 px-8 py-4 bg-white dark:bg-zinc-900 rounded-full border border-border">
              <span className="text-base font-medium">Have a large scale project or need monthly management?</span>
              <a href="#contact" className="text-base font-bold text-primary hover:underline flex items-center">
                Contact for Custom Quote <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
