
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CourseFeatures from "@/components/CourseFeatures";
import Testimonials from "@/components/Testimonials";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <CourseFeatures />
        <Testimonials />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
