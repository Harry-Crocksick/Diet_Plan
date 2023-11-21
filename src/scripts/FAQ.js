const faqs = [
  {
    question: "How does your diet plan service work?",
    answer:
      "Plans are updated monthly to ensure continued progress and cater to your evolving preferences.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "You can cancel your subscription at any time. Please refer to our terms of service for details.",
  },
  {
    question: "Will I receive support from a nutritionist?",
    answer:
      "Yes, our plans come with access to certified nutritionists for guidance and support throughout your journey",
  },
  {
    question: "How do I get started with a diet plan?",
    answer:
      "Simply sign up on our website, provide your details, and our team will create a tailored plan for you.",
  },
  {
    question: "What type of diets do you offer?",
    answer:
      "We provide a range of diet options including balanced, keto, vegetarian, and more. You can choose based on your needs.",
  },
  {
    question: "Can I customize my diet plan?",
    answer:
      "Yes, you can customize your plan based on dietary restrictions, allergies, and food preferences.",
  },
];

const faqContainer = document.querySelector("#faqContainer");
const faqTemplate = document.querySelector("#faq");

faqs.forEach((faq) => faqContainer.append(createFAQ(faq)));

function createFAQ(faq) {
  const clone = faqTemplate.content.cloneNode(true);
  const question = clone.querySelector("h4");
  const answer = clone.querySelector("p");

  question.innerText = faq.question;
  answer.innerText = faq.answer;

  return clone;
}
