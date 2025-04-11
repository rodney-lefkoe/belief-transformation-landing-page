
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-brand-blue to-brand-teal py-4 text-white">
      <div className="container flex justify-between items-center">
        <h1 className="text-2xl font-bold">The Lefkoe Method</h1>
        <a href="https://recreateyourlife.infusionsoft.app/app/orderForms/LMT2---Premium-Discount-Offer">
          <Button variant="secondary" className="font-semibold">
            Register Now <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
