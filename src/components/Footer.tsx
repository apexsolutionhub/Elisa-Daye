import { motion } from 'framer-motion';
import { Instagram, Youtube, Music2, Heart } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FE2C55] to-[#25F4EE] flex items-center justify-center p-[2px]">
              <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-gradient">ED</span>
              </div>
            </div>
            <div>
              <div className="font-bold text-lg leading-tight">Elisa & Daye</div>
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Promotion Agency</div>
            </div>
          </div>

          <div className="flex gap-8">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#packages" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Packages</a>
            <a href="#why-us" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Why Us</a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex gap-4">
            <a href="https://www.instagram.com/elisadani2?igsh=MThzMzU4ZXM0YjF1YQ%3D%3D&utm_source=qr" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <Instagram size={20} />
            </a>
            <Tooltip>
              <TooltipTrigger asChild>
                <span
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center opacity-50 cursor-not-allowed"
                  aria-disabled="true"
                  aria-label="YouTube - Coming Soon"
                >
                  <Youtube size={20} />
                </span>
              </TooltipTrigger>
              <TooltipContent>Coming Soon</TooltipContent>
            </Tooltip>
            <a href="https://www.tiktok.com/@elisadaye?_r=1&_d=f10jh4ld14c85m&sec_uid=MS4wLjABAAAArpXcrhADW7v3WuvOUXiu7exTaCgtNu9QH6tjvxzWmxmH-pf3c95tbkDfhUr4LyNC&share_author_id=7129606120356430853&sharer_language=en&source=h5_m&u_code=e37gbb3l6akcd6&item_author_type=1&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=1A7DDFD5-89C3-4117-8298-E764AD9F8095&user_id=7129606120356430853&sec_user_id=MS4wLjABAAAArpXcrhADW7v3WuvOUXiu7exTaCgtNu9QH6tjvxzWmxmH-pf3c95tbkDfhUr4LyNC&social_share_type=4&ug_btm=b8727,b0&utm_campaign=client_share&share_app_id=1233" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <Music2 size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Elisa & Daye Promotion. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Powered by{' '}
            <a
              href="https://www.apexsolutionhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-primary transition-colors"
            >
              Apex Solution
            </a>
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground font-medium">
            Made with <Heart size={14} className="text-primary fill-current" /> in Ethiopia
          </div>
        </div>
      </div>
    </footer>
  );
};
