import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, Music2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const CONTACT_EMAIL = 'alemudaniel44@gmail.com';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New inquiry from ${name}`,
          _template: 'table',
        }),
      });

      if (!response.ok) throw new Error('Failed to send');

      toast.success("Message sent! We'll get back to you shortly.");
      form.reset();
    } catch {
      toast.error('Failed to send message. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Grow Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Contact Elisa & Daye Promotion today and reach thousands of potential customers through our powerful social media platforms.
            </p>

            <div className="space-y-6">
              <a href="tel:+251906983335" className="flex items-center gap-6 p-6 rounded-2xl bg-muted/50 border border-border hover:border-primary transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Call Us</div>
                  <div className="text-xl font-bold">0906983335</div>
                </div>
              </a>
              <a href="https://wa.me/251906983335" className="flex items-center gap-6 p-6 rounded-2xl bg-muted/50 border border-border hover:border-[#FE2C55] transition-colors group">
                <div className="w-12 h-12 bg-[#FE2C55]/10 rounded-full flex items-center justify-center text-[#FE2C55] group-hover:bg-[#FE2C55] group-hover:text-white transition-all">
                  <Music2 size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">TikTok</div>
                  <div className="text-xl font-bold">Follow Elisa & Daye</div>
                </div>
              </a>
              <a href="mailto:alemudaniel44@gmail.com" className="flex items-center gap-6 p-6 rounded-2xl bg-muted/50 border border-border hover:border-[#FE2C55] transition-colors group">
                <div className="w-12 h-12 bg-[#FE2C55]/10 rounded-full flex items-center justify-center text-[#FE2C55] group-hover:bg-[#FE2C55] group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Email</div>
                  <div className="text-xl font-bold">alemudaniel44@gmail.com</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-background border-2 border-border shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                  <Input id="contact-name" name="name" required placeholder="John Doe" disabled={isSubmitting} className="h-14 bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                  <Input id="contact-email" name="email" required type="email" placeholder="john@example.com" disabled={isSubmitting} className="h-14 bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Project Details</label>
                <Textarea id="contact-message" name="message" required placeholder="Tell us about your brand and promotion goals..." disabled={isSubmitting} className="min-h-[160px] bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-primary resize-none p-4" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full h-14 rounded-full text-lg font-bold group bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all disabled:opacity-70">
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
