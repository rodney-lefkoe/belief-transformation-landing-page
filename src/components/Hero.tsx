
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-8 md:py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            LMT2: Mastering The Behavior Change Process
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Learn how to find limiting beliefs and transform lives—including your own
          </p>
          <div className="mb-8 inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full">
            <Clock className="mr-2 h-5 w-5" />
            <span className="font-medium">Limited Time Offer: Expires Friday</span>
          </div>
          <div className="mt-4 pb-2">
            <a href="https://recreateyourlife.infusionsoft.app/app/orderForms/LMT2---Premium-Discount-Offer">
              <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-lg px-8">
                Register Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
