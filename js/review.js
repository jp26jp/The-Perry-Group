(function() {
  const path = location.pathname
  let agentName = path.split("/")[2]

  switch (agentName) {
    case "michael-perry":
      agentName = "michaelperry123"
      break;
    case "mason-conley":
      agentName = "Mason-Conley"
      break;
    case "tim-leary":
      agentName = "Tim-Leary"
      break;
    case "travis-clemens":
      agentName = "travisclemens"
      break;
    case "tanner-webster":
      agentName = "tanweb9"
      break;
  }

  const url = `https://www.zillow.com/webservice/ProReviews.htm?zws-id=X1-ZWz1gj0a19ie4r_4zss3&screenname=${agentName}&count=4&output=json`;
  let $cardContainer = $(".card-columns");

  $.getJSON(url, function(data) {
    $.each(data.response.results.proReviews.review, function(_, review) {
      const reviewer = review.reviewer,
        reviewerLink = review.reviewerLink,
        reviewURL = review.reviewURL,
        reviewDate = review.reviewDate,
        reviewSummary = review.reviewSummary,
        rating = review.rating,
        description = review.description

      const card = `
      	<div class="card">
        	<div class="card-body">
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
      `

      $cardContainer.append(card)
    })
  });
})()
