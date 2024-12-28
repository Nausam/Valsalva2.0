import { ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function Faq() {
  return (
    <Accordion
      className="flex w-full flex-col"
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      variants={{
        expanded: {
          opacity: 1,
          scale: 1,
        },
        collapsed: {
          opacity: 0,
          scale: 0.7,
        },
      }}
    >
      <AccordionItem value="getting-started" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-xl font-medium text-zinc-950 dark:text-zinc-50">
              Who are we?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 text-lg pr-2 text-zinc-500 dark:text-zinc-400">
            Valsalva is a premium destination for customizable snorkel fins
            tailored to meet your exact preferences and needs.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="animation-properties" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-xl font-medium text-zinc-950 dark:text-zinc-50">
              Where are we located?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 text-lg pr-2 text-zinc-500 dark:text-zinc-400">
            We are located in the sunny side of life, Maldives
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="advanced-features" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-xl font-medium text-zinc-950 dark:text-zinc-50">
              Do we ship worldwide?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 text-lg pr-2 text-zinc-500 dark:text-zinc-400">
            No. At the moment we only ship to Asia.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
