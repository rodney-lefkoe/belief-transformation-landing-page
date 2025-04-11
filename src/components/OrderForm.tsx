
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const OrderPoint = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start space-x-3 mb-4">
      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
      <p className="text-gray-700">{children}</p>
    </div>
  );
};

const OrderForm = () => {
  return (
    <section id="order" className="py-16 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-brand-teal shadow-xl">
            <CardHeader className="bg-brand-teal text-white text-center pb-6">
              <CardTitle className="text-3xl font-bold mb-2">Lefkoe Method Training 2</CardTitle>
              <CardDescription className="text-white text-xl font-medium">Order Form</CardDescription>
            </CardHeader>
            
            <CardContent className="pt-8">
              <div className="text-center mb-8">
                <p className="text-xl font-semibold mb-6">
                  YES! I want to learn how to find my own limiting beliefs as well as those of others so I can help transform lives.
                </p>
                
                <div className="mb-8 bg-gray-100 p-6 rounded-lg">
                  <OrderPoint>
                    I understand I will be billed <span className="line-through font-medium">$1697</span> <span className="text-brand-teal font-bold">$1597</span> today to receive access to the "Lefkoe Method Training 2."
                  </OrderPoint>
                  
                  <OrderPoint>
                    I understand that this training is PRIMARILY about finding beliefs.
                  </OrderPoint>
                  
                  <OrderPoint>
                    Once the course begins I will receive a new set of lessons each week for six weeks.
                  </OrderPoint>
                  
                  <OrderPoint>
                    I will also get personal feedback from Lefkoe Method Facilitators to ensure that I become a master at identifying specific problems and finding relevant beliefs.
                  </OrderPoint>
                  
                  <OrderPoint>
                    There are no refunds for this course. If in doubt, <a href="https://docs.google.com/document/d/1gv9OfWvANJLZoOhNRHONbBdN0bxtM3TWn57LX4E5JI4/edit#heading=h.nkbzf3prbho2" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">see the experience of alumni</a>. Others have money back guarantees because they cannot promise skill.
                  </OrderPoint>
                </div>
                
                <a href="https://recreateyourlife.infusionsoft.app/app/orderForms/LMT2---Premium-Discount-Offer" className="inline-block">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-10 font-bold">
                    Secure Your Spot Now
                  </Button>
                </a>
                
                <p className="mt-4 text-sm text-gray-600">Order over our secure order form.</p>
                
                <div className="mt-8 bg-amber-50 border border-amber-200 p-4 rounded-md">
                  <p className="text-amber-800 font-medium">
                    Limited time offer: Expires Friday. Don't miss your bonus materials worth over $500 in value!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
