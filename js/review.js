(function() {
  let $cardContainer = $("#reviews"),
    $reviewBarContainer = $("#review-bars"),
    agentName = $cardContainer.attr("data-zillow-id")
  if (agentName !== "") {
    const url = `https://www.zillow.com/webservice/ProReviews.htm?zws-id=X1-ZWz1gj0a19ie4r_4zss3&screenname=${agentName}&count=4&output=json`;
    $.getJSON(url, function(result) {
      // pulls data for agent review score
      const info = result.response.results.proInfo
      const reviewCount = info.reviewCount,
        localknowledgeRating = (info.localknowledgeRating === "5.0") ? "5" : info.localknowledgeRating,
        processexpertiseRating = (info.processexpertiseRating === "5.0") ? "5" : info.processexpertiseRating,
        responsivenessRating = (info.responsivenessRating === "5.0") ? "5" : info.responsivenessRating,
        negotiationskillsRating = (info.negotiationskillsRating === "5.0") ? "5" : info.negotiationskillsRating
      $("[data-skill-name='local-knowledge']").html(`<span class="review-score">${localknowledgeRating}</span><span class="divider">/</span><span class="review-max-score">5</span> Local Knowledge`)
      $("[data-skill-name='process-expertise']").html(`<span class="review-score">${processexpertiseRating}</span><span class="divider">/</span><span class="review-max-score">5</span> Process Expertise`)
      $("[data-skill-name='responsiveness']").html(`<span class="review-score">${responsivenessRating}</span><span class="divider">/</span><span class="review-max-score">5</span> Responsiveness`)
      $("[data-skill-name='negotiation-skills']").html(`<span class="review-score">${negotiationskillsRating}</span><span class="divider">/</span><span class="review-max-score">5</span> Negotiation Skills`)
      const easingFn = (t, b, c, d) => {
        let ts = (t /= d) * t;
        let tc = ts * t;
        return b + c * (tc + -3 * ts + 3 * t);
      }
      const options = {  
        useEasing: true,
          easingFn: easingFn,
          useGrouping: true,
          separator: ',',
          decimal: '.',
      };
      // const homesSold = new CountUp(document.getElementById("homes-sold"), 0, recentSaleCount, 0, 5, options);
      const fiveStarReviews = new CountUp(document.getElementById("five-star-reviews"), 0, reviewCount, 0, 5, options);
      // if (!homesSold.error) homesSold.start()
      // else console.error(homesSold.error)
      if (!fiveStarReviews.error) fiveStarReviews.start()
      else console.error(fiveStarReviews.error)
      $.each(result.response.results.proReviews.review, function(_, review) {
        // pulls data for individual reviews
        const reviewer = review.reviewer,
          reviewerLink = review.reviewerLink,
          reviewURL = review.reviewURL,
          reviewDate = review.reviewDate,
          reviewSummary = review.reviewSummary,
          rating = review.rating,
          description = review.description
        const card = `
          <div class="col-lg-3 col-md-6 col-sm-12 justify-content-center mb-5">
            <div class="card">
              <div class="card-body card-review">
                <h5 class="card-title mt-0 mb-2">${reviewer}</h5>
                <div class="card-title card-rating">
                  <img src="/assets/star.svg" alt=""/>
                  <img src="/assets/star.svg" alt=""/>
                  <img src="/assets/star.svg" alt=""/>
                  <img src="/assets/star.svg" alt=""/>
                  <img src="/assets/star.svg" alt=""/>
                </div>
                <p class="card-text">
                  ${description}
                  <a href="${reviewURL}" target="_blank">[read more]</a>
                </p>
                <p class="card-title mb-0">
                  — <a href="${reviewerLink}" target="_blank">${reviewer}</a>
                </p>
              </div>
            </div>
          </div>
        `
        $cardContainer.append(card)
      })
    });
  }
})()
$(document).ready(function() {
  $(".progress-bar").each(function(i) {
    $(this).animate({
      width: $(this).attr('aria-valuenow') + '%'
    });
  });
});
