// import LetterAppear from "./animations/letter-appear";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function FAQ() {
  return (
    <section className="py-20 2xl:px-80 h-fit xl:px-60 relative overflow-hidden">
      <div className="flex flex-col  gap-y-10 ">
        <div className="absolute -left-1/2 -top-1/2  block ">
          <img src="/Gradient 2.webp" alt="palm" />
        </div>
        <h2 className="2xl:text-7xl  text-6xl text-gradient font-bold w-1/2">
          FAQS
        </h2>
        <p className="text-4xl font-bold">Những câu hỏi thường gặp</p>

        <div className="relative w-full  space-y-10">
          <Accordion
            type="single"
            collapsible
            className="w-full text-2xl space-y-2"
          >
            <AccordionItem
              className="bg-white rounded-xl px-10 py-2"
              value="item-1"
            >
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent className="text-2xl">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="bg-white rounded-xl px-10 py-2"
              value="item-2"
            >
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent className="text-2xl">
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              className="bg-white rounded-xl px-10 py-2"
              value="item-3"
            >
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent className="text-2xl">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="bg-white rounded-xl px-10 py-2"
              value="item-4"
            >
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent className="text-2xl">
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="bg-white rounded-xl px-10 py-2"
              value="item-5"
            >
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent className="text-2xl">
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
