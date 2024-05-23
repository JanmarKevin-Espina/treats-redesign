const data = [
  {
    question: "What is Treats",
    details: "Treats is a subscription service for international snacks. Every month we send you a box of snacks from a different country!"
  },
  {
    question: "What kind of snacks do I receive in my box from Treats?",
    details: "You can expect to receive snacks from candy to crackers to chips to cookies to chocolate and more. We include all types of snacks in our box with the exception of drinks. You can get an idea of the snacks we send by visiting our Explore Treats page."
  },
  {
    question: "How many snacks do I get with my box of Treats?",
    details: 'We feature two types of boxes, the "Standard Pack" and the "Premium Pack". The "Standard Pack" contains 5+ international snacks, and the "Premium Pack" contains 10+ international snacks.'
  },
  {
    question: "How long are your subscription plans?",
    details: "We offer Month-to-Month subscription plans, as well as 3-Month, 6-Month and 12-Month Gift Subscription plans."
  },
  {
    question: "Are the snacks in my box chosen from a different country every month?",
    details: "Thats correct! Each month's box will feature snacks from a different country in the world. The country you'll receive is a secret until you recieve the box!"
  },
  {
    question: "I just placed an order. How do I know what snacks will be in my box?",
    details: "The snacks you will receive in your box will remain a secret until you receive the box. But don't worry, your box will include an information card that provides the names of all the snacks inside of your box. You can learn more information about your snacks, such as its origins and its nutritional/allergic information, from the Explore Treats page."
  },
  {
    question: "If live outside of the United States, is there a chance I could receive Treats from my own country?",
    details: "At the moment there is a chance you might be sent a box of Treats that is indigenous to your country or region. This is a possibility if you are an international customer. If you would prefer not to receive snacks from your own country, send us an email at and we will make sure you never receive a box from your own country."
  },
  {
    question: "Can I subscribe to Treats if I have allergies?",
    details: "If you have allergies, we recommend against subscribing to Treats at the moment, as some of the snacks in the boxes contain common allergens such as wheat."
  },
  {
    question: "Do snacks in the box contain any form of meat, such as pork?",
    details: "Yes, they do. We recommend vegans and vegetarians and anyone who cannot eat specific types of meat (such as beef, pork or chicken) to refrain from eating our snacks because some of the snacks contain ingredients made with meat."
  },
]

const ordersData = [
  {
    question: "What are your accepted payment methods?",
    details: "We accept Visa, Mastercard, Discover and American Express credit cards and debit cards from our Checkout page. All of our payments are processed through the Stripe Payment Processor."
  },
  {
    question: "How soon are my orders processed?",
    details: "Your orders are processed on the same day they are received, and your first box will be shipped as soon as our fulfillment team is able to process your order and all subsequent boxes will be shipped to you between the second or third week of every month. Please be patient with potential shipment delays due to pandemic impacts affecting the supply chain."
  },
  {
    question: "What is your policy on refunds?",
    details: "We offer a refund to the retail value of any item in your box that arrive missing or damaged. We also offer a full refund on boxes that were lost during delivery. Cancellations must be processed prior to shipment, once shipped we will not reverse charges or provide refunds. If you have any questions or concerns, don't hesitate to contact us at hello@trytreats.com. We'll take care of you!"
  },
  {
    question: "How do I change my billing information?",
    details: 'You can change your billing information by visiting your Treats Account page. Once you are on the page, scroll down to the “Credit Card” section and click the “Edit" Button. You will then be taken to a page to edit your Credit Card information. Once have finished, click the “Save” button and your billing information will be updated.'
  },
  {
    question: "Can I pause my subscription?",
    details: 'Yes you can. You can pause your subscription by navigating to your Account page, and clicking the "Edit" button under the "Your Subscription" section of the page. You will then be taken to another page where you can pause your subscription, change your subscription plan or cancel your subscription.'
  },
  {
    question: "How do I cancel my subscription?",
    details: 'You can send us an email at hello@trytreats.com (please include the email your subscription is under) or you can cancel your subscription by navigating to your Account page, and clicking the "Edit" button under the "Your Subscription" section of the page. You will then be taken to another page where you can pause your subscription, change your subscription plan or cancel your subscription. Cancellations must be processed prior to shipment, once shipped we will not reverse charges or provide refunds.'
  }
]

const shippingData = [
  {
    question: "When will my first box be shipped?",
    details: "Your first box will be shipped as soon as our fulfillment team is able to process your order and all subsequent boxes will be shipped to you between the second or third week of every month. Please be patient with potential shipment delays due to pandemic impacts affecting the supply chain.",
    detailTwo: "Please note that for Month to Month subscriptions the 25th of the month is the 'cut-off date' for receiving next month's box, so if you signed up past the 25th of the month, the next time you will be billed for another box will on the 1st of the month following the next. For example, if you signed up January 28th, past the cut-off date of January 25th, the next time you are re-billed for your next box will be on March 1st (the renewing box itself will be shipped out between the second and third week of the month.)",
    detailsThree: "For 3, 6 or 12 month pre-paid subscriptions, the cut off date is the 20th of the month",
    detailsFour: "The reason the cut-off date exists is to ensure you don't have too short of a billing cycle from your initial order to the next renewal of your subscription. If you signed up after the cut-off date, and would like to be re-billed and receive the box for the following month (instead of skipping the month), just send us a note at hello@trytreats.com and we can make it happen for you!"
  },
  {
    question: "Is shipping free in the United States?",
    details: "Yes, shipping is free to any address in the United States."
  },
  {
    question: "Do you ship worldwide?",
    details: "Yes we do! Additional shipping charges will apply for international addresses. For international shipping, we subsidize part of the expense for the shipping in order to reduce your cost."
  },
  {
    question: "How much does international shipping cost?",
    details: "International shipping rates depends on where you're located."
  },
  {
    question: "Can I pause my subscription?",
    details: 'Yes you can. You can pause your subscription by navigating to your Account page, and clicking the "Edit" button under the "Your Subscription" section of the page. You will then be taken to another page where you can pause your subscription, change your subscription plan or cancel your subscription.'
  },
  {
    question: "How do I cancel my subscription?",
    details: 'You can send us an email at hello@trytreats.com (please include the email your subscription is under) or you can cancel your subscription by navigating to your Account page, and clicking the "Edit" button under the "Your Subscription" section of the page. You will then be taken to another page where you can pause your subscription, change your subscription plan or cancel your subscription. Cancellations must be processed prior to shipment, once shipped we will not reverse charges or provide refunds.'
  }
]
const search = document.getElementById("js-search");
const results = document.getElementById("js-faq__list");
const orders = document.getElementById("js-faq__orders");
const shipping = document.getElementById("js-faq__shipping");
let search_term = "";
const acc = document.getElementsByClassName("faq__accordion");
const hide = document.getElementById("js-hide");
var i;

const accordionList = () => {
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }
}

const showList = () => {
  results.innerHTML = "";
  data
    .filter((item) => {
      return (
        item.question.toLowerCase().includes(search_term)
      );
    })
    .forEach((e) => {
      const li = document.createElement("li");
      li.classList.add("faq__card");
      li.innerHTML = 
      `
        <button class="faq__accordion">${e.question}</button>
        <div class="faq__panel">
          <p>${e.details}</p>
        </div>`;
      results.appendChild(li);
    });
}

const showOrders = () => {
  orders.innerHTML = "";
  ordersData
    .filter((item) => {
      return (
        item.question.toLowerCase().includes(search_term)
      );
    })
    .forEach((e) => {
      const li = document.createElement("li");
      li.classList.add("faq__card");
      li.innerHTML = 
      `
        <button class="faq__accordion">${e.question}</button>
        <div class="faq__panel">
          <p>${e.details}</p>
        </div>`;
      orders.appendChild(li);
    });
}

const showShipping = () => {
  shipping.innerHTML = "";
  shippingData
    .filter((item) => {
      return (
        item.question.toLowerCase().includes(search_term)
      );
    })
    .forEach((e) => {
      const li = document.createElement("li");
      li.classList.add("faq__card");
      li.innerHTML = 
      `
        <button class="faq__accordion">${e.question}</button>
        <div class="faq__panel">
          <p>${e.details}</p>
        </div>`;
      shipping.appendChild(li);
    });
}

showList();
showOrders();
showShipping();

search.addEventListener("input", (event) => {
  // if (hide.style.display === "none") {
  //   hide.style.display = "block";
  // } else {
  //   hide.style.display = "none";
  // }

  if (search.value > 0) {
    hide.style.display = "none";
  } else {
    hide.style.display = "block";
  }

  console.log(search.value.length);
  search_term = event.target.value.toLowerCase();
  showList();
  showOrders();
  showShipping();
  accordionList();
});

accordionList();