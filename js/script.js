$(function () {
  // 1枚ずつのスライダー
  $('.topimage').slick({
    autoplay:true,
    autoplaySpeed:1000,
    dots:true,
    fade:true,
    arrows: false,
    speed: 300,
  });

  // 3枚一度に見せるスライダー
  $('.slide-image').slick({
    infinite: true, 
    // ↑無限ループ
    slidesToShow: 3,
    // ↑一度に見せるスライドの数
    slidesToScroll: 3,
    // ↑スクロールされるスライドの数
    autoplay: true,
    autoplaySpeed: 1000,
  });

  // 真ん中を大きく見せるスライダー
  // 一度に見せる画像の数は奇数で（あまり多い数は推奨しない）
  // 用意する画像の数はslidesToshow+1にすること
  $('.center-image').slick({
    dots:true,
    // arrows:false,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3,
          autoPlay:true,
          autoplaySpeed:1000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
          autoplay:true,
          autoplaySpeed:1000,
        }
      }
    ]
  });



  let footerbg = document.querySelector(".footerbg");
  let animateMotion = footerbg.querySelector("animateMotion");
  animateMotion.setAttribute("begin","indefinite")
  const observer = new IntersectionObserver((entrys)=>{
    entrys.forEach((entry)=>{
      if(entry.isIntersecting){
        animateMotion.beginElement()
      }
    })
  });
  observer.observe(footerbg)


  console.log(animateMotion)

});