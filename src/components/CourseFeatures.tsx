
import { 
  CheckCircle2, 
  BookOpen, 
  ClipboardList, 
  MessageSquare,
  Video,
  BookText,
  FilePenLine
} from "lucide-react";

const FeatureItem = ({ icon, children }: { icon: React.ReactNode, children: React.ReactNode }) => {
  return (
    <div className="flex items-start mb-5">
      <div className="text-brand-teal mr-4 mt-1">{icon}</div>
      <div>{children}</div>
    </div>
  );
};

const CourseFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            When you join LMT2: Mastering The Behavior Change Process, you get...
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <FeatureItem icon={<BookOpen className="h-6 w-6" />}>
                <h3 className="font-semibold text-lg mb-1">The 6-module course</h3>
                <p className="text-gray-600">Master the methodology behind transformational behavior change</p>
              </FeatureItem>
              
              <FeatureItem icon={<ClipboardList className="h-6 w-6" />}>
                <h3 className="font-semibold text-lg mb-1">Daily exercises in small increments</h3>
                <p className="text-gray-600">Build your skills with manageable, practical learning steps</p>
              </FeatureItem>
              
              <FeatureItem icon={<MessageSquare className="h-6 w-6" />}>
                <h3 className="font-semibold text-lg mb-1">Extensive daily feedback</h3>
                <p className="text-gray-600">Get personalized guidance from Lefkoe Method Facilitators</p>
              </FeatureItem>
            </div>
            
            <div className="md:border-l md:pl-8 md:border-gray-200">
              <h3 className="font-bold text-xl mb-5 text-amber-700">
                Register by Friday and also get...
              </h3>
              
              <FeatureItem icon={<Video className="h-6 w-6" />}>
                <h3 className="font-semibold text-lg mb-1">Three extra recorded sessions</h3>
                <p className="text-gray-600">Watch Morty Lefkoe, Shelly Lefkoe and Anne Lieberman helping clients transform their lives <span className="text-amber-700 font-medium">($79 value)</span></p>
              </FeatureItem>
              
              <FeatureItem icon={<BookText className="h-6 w-6" />}>
                <h3 className="font-semibold text-lg mb-1">Communication training</h3>
                <p className="text-gray-600">A recorded training on how to talk about TLM so people actually listen and understand you <span className="text-amber-700 font-medium">($99 value)</span></p>
              </FeatureItem>
              
              <FeatureItem icon={<FilePenLine className="h-6 w-6" />}>
                <h3 className="font-semibold text-lg mb-1">Written feedback on a session</h3>
                <p className="text-gray-600">Get expert analysis of your practice session <span className="text-amber-700 font-medium">($350 value)</span></p>
              </FeatureItem>
              
              <FeatureItem icon={<CheckCircle2 className="h-6 w-6" />}>
                <h3 className="font-semibold text-lg mb-1">The premium course at the regular price</h3>
                <p className="text-gray-600">Save $100 on your registration</p>
              </FeatureItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;
