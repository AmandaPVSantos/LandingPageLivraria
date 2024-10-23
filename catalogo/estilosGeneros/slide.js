$(document).ready(function(){
    function aplicarEstilosBotoes() {
        $('.btn#botaoComprar').css({
            'background-color': '#000',
            'border': '#000',
            'color': '#fff',
            'font-weight': 'bold',
            'font-size': '20px',
            'margin-top': '9px',
            'height': '50px',
            'width': '170px'
        });

        $('.btn#botaoComprar:hover').css({
            'background-color': '#fceabb',
            'color': 'black',
            'font-weight': 'bold'
        });
    }

    aplicarEstilosBotoes();

    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="prev"><i class="bi bi-arrow-left-circle-fill"></i></button>',
        nextArrow: '<button type="button" class="next"><i class="bi bi-arrow-right-circle-fill"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }).on('afterChange', function(event, slick, currentSlide){
        aplicarEstilosBotoes();
    });
});
