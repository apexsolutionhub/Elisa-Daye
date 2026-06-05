import { motion } from 'framer-motion';
import { CheckCircle2, Target, Eye, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

const socialPlatforms = [
  { name: 'Telegram', Icon: TelegramIcon, color: '#229ED9', bg: 'bg-[#229ED9]/10', aspect: 'aspect-square' },
  { name: 'Facebook', Icon: Facebook, color: '#1877F2', bg: 'bg-[#1877F2]/10', aspect: 'aspect-[4/5]' },
  { name: 'TikTok', Icon: TikTokIcon, color: '#FE2C55', bg: 'bg-[#FE2C55]/10', aspect: 'aspect-[4/5]' },
  { name: 'Instagram', Icon: Instagram, color: '#E1306C', bg: 'bg-[#E1306C]/10', aspect: 'aspect-square' },
] as const;

export const About = () => {
  const points = [
    "Large and active social media audience",
    "Professional promotional videos",
    "Increased brand visibility",
    "Trusted by growing businesses",
    "Affordable promotion packages"
  ];

  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Grow Your Brand with the <br />
                <span className="text-primary">Power of Social Media</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to Elisa & Daye Promotion, where we help businesses, brands, hotels, restaurants, and entrepreneurs reach thousands of potential customers through powerful social media promotion.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-background rounded-2xl border border-border shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="text-primary" />
                </div>
                <h4 className="font-bold mb-2 uppercase tracking-wide text-sm">Our Mission</h4>
                <p className="text-sm text-muted-foreground">
                  To help businesses grow by leveraging the power of social media influence and digital marketing.
                </p>
              </div>
              <div className="p-6 bg-background rounded-2xl border border-border shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="text-secondary" />
                </div>
                <h4 className="font-bold mb-2 uppercase tracking-wide text-sm">Our Vision</h4>
                <p className="text-sm text-muted-foreground">
                  To become one of the leading social media promotion and influencer marketing brands globally.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Why Businesses Choose Us</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {points.map((point) => (
                  <div key={point} className="flex items-center gap-3 group">
                    <CheckCircle2 className="text-primary w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button size="lg" className="rounded-full px-8 h-14 bg-primary text-white" asChild>
              <a href="#packages">Start Promoting Today →</a>
            </Button>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -10 }}
                className="space-y-4 pt-12"
              >
                {socialPlatforms.slice(0, 2).map(({ name, Icon, color, bg, aspect }) => (
                  <div
                    key={name}
                    className={`${aspect} rounded-3xl ${bg} border border-border shadow-xl flex flex-col items-center justify-center gap-4 transition-transform hover:scale-105`}
                  >
                    <Icon className="w-16 h-16 md:w-20 md:h-20" style={{ color }} />
                    <span className="font-semibold text-sm text-muted-foreground">{name}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div
                whileHover={{ y: 10 }}
                className="space-y-4"
              >
                {socialPlatforms.slice(2).map(({ name, Icon, color, bg, aspect }) => (
                  <div
                    key={name}
                    className={`${aspect} rounded-3xl ${bg} border border-border shadow-xl flex flex-col items-center justify-center gap-4 transition-transform hover:scale-105`}
                  >
                    <Icon className="w-16 h-16 md:w-20 md:h-20" style={{ color }} />
                    <span className="font-semibold text-sm text-muted-foreground">{name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
