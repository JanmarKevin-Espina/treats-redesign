var reviews = [
  {
    "review": "Treats is totally worth the money! I love being able to try different snacks from all around the world. Highly recommend to try if you still haven’t!",
    "stars": 5,
    "name": "Brooklyn",
    "date": "02/22/2022",
    "title": "Try Treats Is The Best!"
  },
  {
    "review": "Had fun opening the box and seeing where the treats were from! My family had fun trying everything and talking about our favourites and least favorites.",
    "stars": 5,
    "name": "Corene",
    "date": "02/17/2022",
    "title": "Love the Biscuits!"
  },
  {
    "review": "Since the pandemic, my husband and I were not able to travel like we used to but thanks to Treats, we get to travel from our living room!",
    "stars": 5,
    "name": "Miranda",
    "date": "02/12/2022",
    "title": "Very Fast Shipping"
    },
  {
    "review": "I thought for sure I was going to have tried everything in our @trytreats box this month from Korea, but there’s a few things I haven’t had!! #trytreats",
    "stars": 5,
    "name": "Michele",
    "date": "02/09/2022",
    "title": "Reminds me of Home"
    },
  {
      "review": "This has been a family favorite, our family gathers around to have fun tasting and rating each of the snacks and candies!",
      "stars": 5,
    "name": "Owen",
    "date": "02/4/2022",
    "title": "Great Time as Always"
    },
  {
      "review": "Really neat selection of treats with a description of what each thing was and even some recipe ideas 😙 loved the surprise of what country was in there too! It made a super holiday gift :)",
      "stars": 5,
    "name": "Rachel",
    "date": "02/4/2022",
    "title": "Great Time as Always"
    }
];
var all_reviews = [];

for(var i=0; i<reviews.length; i++) {
  var current_review = reviews[i];
  var stars_html = [];
  for(var x=0; x<5; x++) {
    if(current_review.stars - x > 0) {
        stars_html.push(`<span class="fa fa-star checked"></span>`);
      }
      else {
        stars_html.push(`<span class="fa fa-star"></span>`);
    }
  };
  var review_html = 
    `<div class="testimony__item">
      <div>
        <h4 class="testimony__highlight">${current_review.title}</h4>
        <p class="testimony__content">"${current_review.review}"</p>
        <p class="reviewStars">${stars_html.join(" ")}</p>
        <h5 class="testimony__author">- ${current_review.name}</h5>   
      </div>
    </div>`
    all_reviews.push(review_html);
}
var html_to_send = all_reviews.join(" ");
$(".multiple-items").html(html_to_send);