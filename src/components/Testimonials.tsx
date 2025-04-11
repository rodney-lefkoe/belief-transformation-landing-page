
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The LMT training has completely transformed how I work with clients. I can now identify limiting beliefs quickly and help create lasting change.",
    author: "Sarah K.",
    role: "Life Coach"
  },
  {
    quote: "Learning to find beliefs with the Lefkoe Method gave me skills that no other program ever did. The personalized feedback made all the difference.",
    author: "Michael T.",
    role: "Therapist"
  },
  {
    quote: "I joined to help others, but ended up transforming my own life in the process. The daily exercises and feedback are invaluable.",
    author: "Jennifer R.",
    role: "Wellness Practitioner"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            What Our Alumni Are Saying
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-brand-teal/30 mb-4" />
                  <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
