import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      label: "Call Us",
      value: "+251 900 000 000", // Placeholder but formatted
      link: "tel:+251900000000"
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-green-500" />,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      link: "https://wa.me/251900000000"
    },
    {
      icon: <Mail className="w-5 h-5 text-blue-500" />,
      label: "Email",
      value: "contact@elisadaye.com",
      link: "mailto:contact@elisadaye.com"
    },
    {
      icon: <MapPin className="w-5 h-5 text-rose-500" />,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to grow your business?</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Contact Elisa & Daye Promotion today and reach thousands of potential customers through our powerful social media platforms.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((info, i) => (
                <a 
                  key={i} 
                  href={info.link}
                  className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-border hover:border-primary transition-colors group shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {info.icon}
                    <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{info.label}</span>
                  </div>
                  <div className="font-semibold group-hover:text-primary transition-colors">{info.value}</div>
                </a>
              ))}
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#FE2C55] to-[#9B30FF] text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Let's Work Together</h3>
              <p className="opacity-90 mb-6 text-white/90">
                Most brands see initial results within the first 48 hours of campaign launch. Turn views into customers and followers into loyal clients.
              </p>
              <Button variant="secondary" className="rounded-full w-full sm:w-auto px-8 font-bold bg-white text-primary hover:bg-white/90" asChild>
                <a href="https://wa.me/251900000000" target="_blank" rel="noopener noreferrer">
                   <MessageSquare className="mr-2 w-5 h-5" />
                   Start Your Campaign
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-[2.5rem] border border-border shadow-2xl shadow-primary/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold tracking-wide">Full Name</label>
                  <Input required placeholder="John Doe" className="h-14 bg-muted/50 border-none focus-visible:ring-2 focus-visible:ring-primary text-base" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold tracking-wide">Business Name</label>
                  <Input required placeholder="Your Brand" className="h-14 bg-muted/50 border-none focus-visible:ring-2 focus-visible:ring-primary text-base" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide">Email Address</label>
                <Input required type="email" placeholder="john@brand.com" className="h-14 bg-muted/50 border-none focus-visible:ring-2 focus-visible:ring-primary text-base" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide">How can we help?</label>
                <Textarea required placeholder="Tell us about your campaign goals, target audience, and timeframe..." className="min-h-[150px] bg-muted/50 border-none focus-visible:ring-2 focus-visible:ring-primary resize-none text-base" />
              </div>
              <Button type="submit" className="w-full h-14 rounded-full text-lg font-bold group bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
