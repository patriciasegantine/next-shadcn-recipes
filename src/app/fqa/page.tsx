import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { recipeFAQ } from "@/app/fqa/recipe-faq";

export default function FQA() {
  return (
    <main>
      <h2>FAQ</h2>
      
      <Accordion type="single" collapsible>
        {
          recipeFAQ.map(item => (
            <AccordionItem value={`item-${item.id}`} key={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))
        }
      </Accordion>
    </main>
  
  )
}
