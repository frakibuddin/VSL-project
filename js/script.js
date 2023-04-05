$(document).ready(function () {
  var silder = $(".owl-carousel");
  silder.owlCarousel({
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    items: 1,
    stagePadding: 20,
    center: true,
    nav: false,
    margin: 50,
    dots: true,
    loop: true,
    responsive: {
      0: { items: 1 },
      480: { items: 1 },
      575: { items: 2 },
      768: { items: 2 },
      991: { items: 2 },
      1200: { items: 3 },
    },
  });
});

//video-player

new MediaElementPlayer("player1", {
  features: [
    "playpause",
    "current",
    "progress",
    "duration",
    "volume",
    "airplay",
  ],
});
new MediaElementPlayer("player2", {
  features: [
    "playpause",
    "current",
    "progress",
    "duration",
    "volume",
    "airplay",
  ],
});
new MediaElementPlayer("player3", {
  features: [
    "playpause",
    "current",
    "progress",
    "duration",
    "volume",
    "airplay",
  ],
});
new MediaElementPlayer("player4", {
  features: [
    "playpause",
    "current",
    "progress",
    "duration",
    "volume",
    "airplay",
  ],
});
new MediaElementPlayer("player5", {
  features: [
    "playpause",
    "current",
    "progress",
    "duration",
    "volume",
    "airplay",
  ],
});
