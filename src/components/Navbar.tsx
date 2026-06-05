import React, { useState } from 'react';
import { Menu, X, Instagram, Youtube, Music2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavbarProps {
  activeSection: string;
}

export const Navbar = ({ activeSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Packages', href: '#packages' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FE2C55] to-[#25F4EE] flex items-center justify-center p-[2px]">
            <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-gradient">ED</span>
            </div>
          </div>
          <span className="font-bold text-lg tracking-tight">Elisa & Daye</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === link.href.substring(1) ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button size="sm" className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20" asChild>
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-16 bg-background z-40 transition-transform duration-300 md:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col items-center gap-8 pt-20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="rounded-full px-10 py-6 text-lg bg-primary text-white shadow-xl shadow-primary/30" asChild>
            <a href="#contact" onClick={() => setIsOpen(false)}>Get Started</a>
          </Button>
          <div className="flex gap-6 mt-10">
            <Instagram className="text-muted-foreground hover:text-[#E1306C]" />
            <Youtube className="text-muted-foreground hover:text-[#FF0000]" />
            <Music2 className="text-muted-foreground hover:text-[#FE2C55]" />
          </div>
        </div>
      </div>
    </nav>
  );
};
