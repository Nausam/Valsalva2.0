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
      <AccordionItem value="1" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-xl font-medium text-zinc-950 dark:text-zinc-50">
              What types of snorkeling equipment do you offer?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 text-lg pr-2 text-zinc-500 dark:text-zinc-400">
            We offer masks, snorkels, fins, wetsuits, underwater cameras, and
            accessories like dry bags and anti-fog sprays.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="2" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-xl font-medium text-zinc-950 dark:text-zinc-50">
              How do I pick the right mask size?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 text-lg pr-2 text-zinc-500 dark:text-zinc-400">
            Use our size guide on product pages to measure and find the perfect
            fit.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="3" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-xl font-medium text-zinc-950 dark:text-zinc-50">
              Do you ship internationally?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 text-lg pr-2 text-zinc-500 dark:text-zinc-400">
            Yes, we ship worldwide. Shipping costs and times depend on your
            location.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="4" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-xl font-medium text-zinc-950 dark:text-zinc-50">
              What’s your return policy?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 text-lg pr-2 text-zinc-500 dark:text-zinc-400">
            We accept returns within 30 days if items are unused and in original
            packaging.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="5" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-xl font-medium text-zinc-950 dark:text-zinc-50">
              Are your products beginner-friendly?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 text-lg pr-2 text-zinc-500 dark:text-zinc-400">
            Yes, many of our products are designed for beginners and marked with
            a badge.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="6" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-xl font-medium text-zinc-950 dark:text-zinc-50">
              Do your products have a warranty?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 text-lg pr-2 text-zinc-500 dark:text-zinc-400">
            Most items come with a warranty. Check the product page for details.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="7" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-xl font-medium text-zinc-950 dark:text-zinc-50">
              How do I care for my snorkeling gear?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 text-lg pr-2 text-zinc-500 dark:text-zinc-400">
            Rinse with fresh water after use and store in a cool, dry place.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="8" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-xl font-medium text-zinc-950 dark:text-zinc-50">
              Can I use this gear for scuba diving?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 text-lg pr-2 text-zinc-500 dark:text-zinc-400">
            Some gear works for shallow diving but not for deep scuba diving.
            Check product details.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="9" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-xl font-medium text-zinc-950 dark:text-zinc-50">
              Do you offer group discounts?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 text-lg pr-2 text-zinc-500 dark:text-zinc-400">
            Yes, we offer discounts for bulk orders. Contact us for details.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="10" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-xl font-medium text-zinc-950 dark:text-zinc-50">
              How do I check stock availability?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 text-lg pr-2 text-zinc-500 dark:text-zinc-400">
            Stock status is shown on product pages. Sign up for alerts on
            out-of-stock items.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
