import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Official Influencer Brand</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Promoting Your Brand to <br />
              <span className="text-gradient">Thousands</span> of Customers
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Elisa & Daye Promotion helps businesses, hotels, and restaurants reach a wider audience through creative, authentic, and high-impact social media marketing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-primary hover:bg-primary/90 text-white group" asChild>
                <a href="#contact">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-2" asChild>
                <a href="#packages">View Packages</a>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-border pt-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold">510k+</span>
                <span className="text-sm text-muted-foreground">TikTok Reach</span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold">100+</span>
                <span className="text-sm text-muted-foreground">Brands Helped</span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex items-center -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="client" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-bold text-white">
                  +20
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 border-8 border-background">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/attachments/9fa2811f-cb73-4c17-9981-92206c533e29/1780664080460_elisa.jpg" 
                alt="Elisa and Daye" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl text-white">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Play className="fill-white w-6 h-6 ml-1" />
                  </div>
                  <div>
                    <div className="font-bold">Latest Promotion</div>
                    <div className="text-sm opacity-80">Hotel & Resort Launch</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 p-4 glass rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">
                <Star size={20} className="fill-current" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Trust</div>
                <div className="font-bold">Highly Rated</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-10 p-4 glass rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                <Users size={20} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Audience</div>
                <div className="font-bold">Engaged Daily</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};