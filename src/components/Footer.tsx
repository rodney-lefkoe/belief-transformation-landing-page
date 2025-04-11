
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} The Lefkoe Method. All rights reserved.</p>
          <p className="text-sm text-gray-400">
            Helping people eliminate limiting beliefs and transform their lives with proven methods.
          </p>
          <div className="flex justify-center items-center mt-4 text-sm text-gray-400">
            <p>Made with <Heart className="h-4 w-4 inline text-red-500 mx-1" /> by The Lefkoe Institute</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
