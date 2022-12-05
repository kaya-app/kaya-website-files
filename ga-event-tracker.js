//GA Event Tracker Script. Licensed under MIT. Free for any use by all. Written by Paul Seal from codeshare.co.uk

// Get the category, action and label from the element and send it to GA. The action is optional, because mostly it will be a click event.
var trackClickEvent = function() {
  var eventCategory = this.getAttribute("data-event-category");
  var eventAction = this.getAttribute("data-event-action");
  var eventLabel = this.getAttribute("data-event-label");
  var eventValue = this.getAttribute("data-event-value");
  ga('send', 'event', eventCategory, (eventAction != undefined && eventAction != '' ? eventAction : 'click'), eventLabel, eventValue);
};

// Find all of the elements on the page which have the class 'ga-event'
var elementsToTrack = document.getElementsByClassName("ga-event");

// Add an event listener to each of the elements you found
var elementsToTrackLength = elementsToTrack.length;
for (var i = 0; i < elementsToTrackLength; i++) {
  elementsToTrack[i].addEventListener('click', trackClickEvent, false);
}
