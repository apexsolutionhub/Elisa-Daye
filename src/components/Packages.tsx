import { motion } from 'framer-motion';
import { Check, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export const Packages = () => {
  const packages = [
    {
      name: "Standard Package",
      price: "ETB 45,000",
      icon: <Zap className="w-6 h-6 text-primary" />,
      features: [
        "One promotional video",
        "Posted on your company's TikTok account",
        "Content creation guidance",
        "Increased audience engagement",
        "Basic campaign reporting"
      ],
      popular: false
    },
    {
      name: "Premium Package",
      price: "ETB 90,000",
      icon: <Crown className="w-6 h-6 text-yellow-500" />,
      features: [
        "One promotional video",
        "Posted on Elisa & Daye TikTok account",
        "TikTok audience: 510k+ followers",
        "Additional Instagram promotion",
        "Maximum brand visibility",
        "Campaign performance report"
      ],
      popular: true
    }
  ];

  return (
    <section id="packages" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Promotion Packages</h2>
          <p className="text-muted-foreground text-lg">
            Simple and transparent pricing to help your business reach thousands of new potential customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className={cn(
                "relative h-full overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2",
                pkg.popular ? "border-primary shadow-xl shadow-primary/10" : "border-border"
              )}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">
                    Most Popular
                  </div>
                )}
                <CardHeader className="p-8">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6">
                    {pkg.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">{pkg.name}</CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold">{pkg.price}</span>
                    <span className="text-muted-foreground text-sm font-medium">/ campaign</span>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8 space-y-4">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="px-8 pb-8">
                  <Button className={cn(
                    "w-full rounded-full h-12 text-base font-bold transition-all",
                    pkg.popular ? "bg-primary text-white hover:bg-primary/90" : "variant-outline"
                  )} variant={pkg.popular ? "default" : "outline"} asChild>
                    <a href="#contact">Choose {pkg.name}</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
