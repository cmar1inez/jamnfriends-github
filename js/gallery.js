// A $( document ).ready() block.
$(document).ready(function () {
  //console.log("ready!");

  $("#ngy2p").nanogallery2({
    //this is where the setting go
    thumbnailWidth: "300",
    thumbnailHeight: "auto",
    thumbnailBorderVertical: 0,
    thumbnailBorderHorizontal: 0,
    thumbnailLabel: {
      position: "overImageOnBottom"
    },
    thumbnailHoverEffect2: "imageScaleIn80|imageSepiaOff|LabelAppear75",
    thumbnailGutterWidth: 20,
    thumbnailGutterHeight: 20,
    thumbnailAlignment: "center",
    thumbnailOpenImage: true
  });
});
