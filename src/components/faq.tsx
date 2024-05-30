// import LetterAppear from "./animations/letter-appear";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
export default function FAQ() {
    return (
        <section className="relative h-fit overflow-hidden px-6 py-20 sm:px-20 lg:px-40 xl:px-60 2xl:px-80">
            <div className="flex flex-col sm:items-start items-center lg:gap-y-10 gap-y-4 ">
                <div className="absolute -left-1/2 -top-1/2  block ">
                    <img src="/Gradient 2.webp" alt="palm" />
                </div>
                <h2 className="text-gradient w-1/2 text-center sm:text-left text-4xl font-bold sm:text-5xl lg:text-6xl 2xl:text-7xl">
                    FAQS
                </h2>
                <p className="lg:text-4xl text-2xl font-bold">Những câu hỏi thường gặp</p>

                <div className="relative w-full  space-y-10">
                    <Accordion type="single" collapsible className="w-full space-y-2 sm:text-2xl text-lg">
                        <AccordionItem className="rounded-xl bg-white sm:px-10 px-4 sm:py-2" value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent className="text-2xl">
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="rounded-xl bg-white sm:px-10 px-4 sm:py-2" value="item-2">
                            <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent className="text-2xl">
                                Yes. It comes with default styles that matches the other components&apos; aesthetic.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem className="rounded-xl bg-white sm:px-10 px-4 sm:py-2" value="item-3">
                            <AccordionTrigger>Is it animated?</AccordionTrigger>
                            <AccordionContent className="text-2xl">
                                Yes. It&apos;s animated by default, but you can disable it if you prefer.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="rounded-xl bg-white sm:px-10 px-4 sm:py-2" value="item-4">
                            <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent className="text-2xl">
                                Yes. It comes with default styles that matches the other components&apos; aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="rounded-xl bg-white sm:px-10 px-4 sm:py-2" value="item-5">
                            <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent className="text-2xl">
                                Yes. It comes with default styles that matches the other components&apos; aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
