import { cn } from "../../app/lib/utils";
import {
  IconBrain,
  IconCpu,
  IconCode,
  IconRobot,
  IconCloudCog,
  IconMessageChatbot,
  IconTrendingUp,
  IconShieldLock,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "AI at Core",
      description: "Harnessing the power of AI to build intelligent, scalable solutions for modern businesses.",
      icon: <IconBrain />,
    },
    {
      title: "Automation Engine",
      description: "Automate complex workflows and tasks with precision and speed using our smart tools.",
      icon: <IconRobot />,
    },
    {
      title: "Custom Software",
      description: "Tailored applications and systems built from the ground up to fit your business needs.",
      icon: <IconCode />,
    },
    {
      title: "Cloud-Native Infrastructure",
      description: "Optimized for the cloud – fast, secure, and reliable. Scale as you grow.",
      icon: <IconCloudCog />,
    },
    {
      title: "Conversational AI",
      description: "Deploy chatbots and virtual assistants that actually understand and solve problems.",
      icon: <IconMessageChatbot />,
    },
    {
      title: "Secure by Design",
      description: "We bake security into every layer, ensuring compliance and protecting your data.",
      icon: <IconShieldLock />,
    },
    {
      title: "Smart Analytics",
      description: "Real-time insights, AI-powered predictions, and actionable dashboards.",
      icon: <IconTrendingUp />,
    },
    {
      title: "Powered by Innovation",
      description: "Always evolving, always improving – we push the limits of what's possible.",
      icon: <IconCpu />,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 ? (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-purple-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
