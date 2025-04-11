
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This training has changed my world. Most people use only \"Will\" to try to push through patterns that are not serving them, only to have them show back up at a later date. I now have the knowledge to change patterns quickly, effectively, and permanently. This is a game changer.",
    author: "Becky Hess",
    role: "West Jordan, Utah, USA"
  },
  {
    quote: "I have enjoyed learning about finding and eliminating limiting beliefs through the LMT1 and LMT2. The Techniques are easy to learn and Rodney and his team have worked very hard to make it so. I have used the Techniques with my clients and they have been amazed. In myself, feel like I'm finding myself again. The changes are subtle but lasting. My mind is clearer and more at peace. I'm very grateful to have the opportunity to learn and apply this life changing method. Thank you very much.",
    author: "Neelima Deshpande",
    role: "India"
  },
  {
    quote: "I have found the Lefkoe Method training a great tool to use not only for myself but also with clients. I was able to remove beliefs from my life and so I am confident in offering this method for clients as well. I recommend the Lefkoe Training process for anyone considering taking it up.",
    author: "Barbara Elisjones",
    role: "Sydney Australia"
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
