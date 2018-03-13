var contactsCirle = d3.select("#contacts");
    var interviewsCircle = d3.select("#interviews");
    var offersCirle = d3.select("#offers");
    var acceptedCircle = d3.select("#accepted");
    
    contactsCirle
      .on("mouseover", handleMouseOverContacts)
      .on("mouseout", handleMouseOutContacts);
      d3.select("#contacts + text")
      .on("mouseover", handleMouseOverContacts)
      .on("mouseout", handleMouseOutContacts);

    function handleMouseOverContacts(d, i) {  // Add interactivity
      // Use D3 to select element, change color and size
      interviewsCircle.attr("class", "grey grey-darkest");
      offersCirle.attr("class", "grey grey-medium");
      acceptedCircle.attr("class", "grey grey-lightest");
    }

    function handleMouseOutContacts(d, i) {  // Add interactivity
      // Use D3 to select element, change color and size
      interviewsCircle.attr("class", "green");
      offersCirle.attr("class", "purple");
      acceptedCircle.attr("class", "yellow");
    }

    interviewsCircle
      .on("mouseover", handleMouseOverInterviews)
      .on("mouseout", handleMouseOutInterviews);
      d3.select("#interviews + text")
      .on("mouseover", handleMouseOverInterviews)
      .on("mouseout", handleMouseOutInterviews);

    function handleMouseOverInterviews(d, i) {  // Add interactivity
      // Use D3 to select element, change color and size
      contactsCirle.attr("class", "grey grey-darkest");
      offersCirle.attr("class", "grey grey-medium");
      acceptedCircle.attr("class", "grey grey-lightest");
    }

    function handleMouseOutInterviews(d, i) {  // Add interactivity
      // Use D3 to select element, change color and size
      contactsCirle.attr("class", "orange");
      offersCirle.attr("class", "purple");
      acceptedCircle.attr("class", "yellow");
    }

    offersCirle
      .on("mouseover", handleMouseOverOffers)
      .on("mouseout", handleMouseOutOffers);
      d3.select("#offers + text")
      .on("mouseover", handleMouseOverOffers)
      .on("mouseout", handleMouseOutOffers);

    function handleMouseOverOffers(d, i) {  // Add interactivity
      // Use D3 to select element, change color and size
      interviewsCircle.attr("class", "grey grey-darkest");
      contactsCirle.attr("class", "grey grey-medium");
      acceptedCircle.attr("class", "grey grey-lightest");
    }

    function handleMouseOutOffers(d, i) {  // Add interactivity
      // Use D3 to select element, change color and size
      interviewsCircle.attr("class", "green");
      contactsCirle.attr("class", "orange");
      acceptedCircle.attr("class", "yellow");
    }

    acceptedCircle
      .on("mouseover", handleMouseOverAccepted)
      .on("mouseout", handleMouseOutAccepted);
      d3.select("#accepted + text")
      .on("mouseover", handleMouseOverAccepted)
      .on("mouseout", handleMouseOutAccepted);

    function handleMouseOverAccepted(d, i) {  // Add interactivity
      // Use D3 to select element, change color and size
      contactsCirle.attr("class", "grey grey-darkest");
      offersCirle.attr("class", "grey grey-medium");
      interviewsCircle.attr("class", "grey grey-lightest");
    }

    function handleMouseOutAccepted(d, i) {  // Add interactivity
      // Use D3 to select element, change color and size
      contactsCirle.attr("class", "orange");
      offersCirle.attr("class", "purple");
      interviewsCircle.attr("class", "green");
    }