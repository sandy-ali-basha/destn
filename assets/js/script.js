// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $("#myBtn").show();
    } else {
        $("#myBtn").hide();
    }

}


$("document").ready(() => {
    $(".strategy_Hbutton").click(function () {
        $('html, body').animate({
            scrollTop: "700"
        }, 200);
    });
    // Turn input element into a pond with configuration options
    $('.my-pond').filepond({
        allowMultiple: true,
        required: true,
        iconRemove: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12.5" cy="12.5" r="12.5" fill="#FFF3F3"/>
        <path d="M17.9326 8.04631C17.9327 8.04246 17.9296 8.03933 17.9257 8.03933H16.4372C16.3933 8.03933 16.3499 8.02952 16.3063 8.02522H16.0225C15.2608 8.02522 14.6433 7.40775 14.6433 6.64606C14.6434 6.54241 14.6028 6.44291 14.5304 6.36888C14.4579 6.29486 14.3593 6.25216 14.2558 6.25H10.323C10.2179 6.25 10.1172 6.29167 10.043 6.36597C9.9687 6.44027 9.92694 6.54099 9.92694 6.64606C9.92694 7.40775 9.30947 8.02522 8.54777 8.02522H8.27248C8.2288 8.02951 8.18546 8.03933 8.14157 8.03933H6.64605C6.5045 8.03933 6.37376 8.11476 6.30305 8.23731C6.23232 8.35986 6.23232 8.5108 6.30305 8.63335C6.37377 8.7559 6.5045 8.83143 6.64605 8.83143C7.36978 8.83143 7.97713 9.37698 8.05448 10.0966L8.94665 18.3961C8.95765 18.4934 9.00411 18.5833 9.07719 18.6486C9.15017 18.7139 9.2447 18.7499 9.34269 18.75H15.2416C15.3386 18.7486 15.4317 18.7118 15.5036 18.6467C15.5755 18.5816 15.6211 18.4925 15.632 18.3961L16.5239 10.1106C16.6014 9.39095 17.2088 8.84539 17.9326 8.84539C18.0742 8.84539 18.2049 8.76996 18.2756 8.64741C18.3463 8.52486 18.3463 8.37382 18.2756 8.25136C18.2061 8.13083 18.0784 8.05579 17.9396 8.05335C17.9358 8.05328 17.9326 8.05016 17.9326 8.04631ZM10.7276 7.53366C10.7276 7.26218 10.9477 7.0421 11.2191 7.0421H13.3596C13.631 7.0421 13.8511 7.26218 13.8511 7.53366C13.8511 7.80514 13.631 8.02522 13.3596 8.02522H11.2191C10.9477 8.02522 10.7276 7.80514 10.7276 7.53366ZM15.1604 15.3744C15.0021 16.8408 13.7642 17.9522 12.2893 17.9522C10.8145 17.9522 9.57662 16.8408 9.41832 15.3744L9.09728 12.4007C8.89233 10.5022 10.3798 8.84548 12.2893 8.84548C14.1989 8.84548 15.6863 10.5021 15.4814 12.4006L15.1604 15.3744Z" fill="#E41D1D"/>
        <path d="M12.2906 17.0262C12.3956 17.0262 12.4964 16.9845 12.5707 16.9103C12.645 16.836 12.6866 16.7352 12.6866 16.6302V10.1696C12.6866 10.028 12.6112 9.89727 12.4887 9.82655C12.3661 9.75573 12.2151 9.75573 12.0925 9.82655C11.97 9.89728 11.8945 10.028 11.8945 10.1696V16.6302C11.8945 16.7352 11.9362 16.836 12.0105 16.9103C12.0848 16.9845 12.1855 17.0262 12.2906 17.0262H12.2906Z" fill="#E41D1D"/>
        <path d="M10.7288 17.0223C10.7288 17.0223 10.7288 17.0223 10.7288 17.0223H10.7457C10.8503 17.018 10.9488 16.9724 11.0199 16.8955C11.091 16.8187 11.1288 16.7168 11.1249 16.6122L10.8861 10.1517C10.8861 10.1516 10.8861 10.1516 10.8862 10.1516C10.8862 10.1515 10.8862 10.1515 10.8862 10.1515C10.884 10.0457 10.8388 9.94525 10.7608 9.8736C10.6828 9.80202 10.5789 9.76544 10.4732 9.7723C10.3686 9.77672 10.2701 9.82234 10.1991 9.89918C10.128 9.97602 10.0902 10.0779 10.094 10.1825L10.3328 16.6431C10.3378 16.745 10.3816 16.8411 10.4554 16.9116C10.529 16.9821 10.6269 17.0217 10.7288 17.0223C10.7288 17.0223 10.7288 17.0223 10.7288 17.0223Z" fill="#E41D1D"/>
        <path d="M13.8357 17.0224C13.8357 17.0224 13.8357 17.0224 13.8357 17.0224H13.8497C13.9541 17.0248 14.0552 16.986 14.1314 16.9147C14.2075 16.8432 14.2526 16.7447 14.257 16.6404L14.4958 10.1798C14.4958 10.1798 14.4958 10.1798 14.4958 10.1798C14.4957 10.1798 14.4957 10.1797 14.4957 10.1797C14.4996 10.0751 14.4618 9.9733 14.3908 9.89646C14.3197 9.81962 14.2211 9.77401 14.1165 9.76959C14.0096 9.75858 13.9029 9.7931 13.8227 9.86477C13.7425 9.93634 13.6962 10.0385 13.6952 10.1461L13.4535 16.6067C13.4535 16.6067 13.4536 16.6067 13.4536 16.6067C13.4536 16.6067 13.4536 16.6067 13.4536 16.6068C13.4483 16.7127 13.4857 16.8165 13.5576 16.8946C13.6293 16.9728 13.7296 17.0188 13.8357 17.0224C13.8357 17.0224 13.8357 17.0224 13.8357 17.0224Z" fill="#E41D1D"/>
        </svg>
        `,
        stylePanelLayout: 'compact',
        styleButtonRemoveItemPosition: 'right',
        styleButtonProcessItemPosition: 'right',
        styleLoadIndicatorPosition: 'right',
        styleProgressIndicatorPosition: 'right'
    });
    var click = 1;
    $(".sm_1").addClass("doneSmall")
    $('.sw_next_btn').click(() => {
        click++;
        if (click == 2) {
            $(".sm_2").addClass("doneSmall");
        }
        if (click == 3) {
            $(".sm_3").addClass("doneSmall");
        }
        if (click == 4) {
            $(".sm_4").addClass("doneSmall");
        }
    })
});
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var swiper = new Swiper(".slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".Myswiper-button-next",
        prevEl: ".Myswiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
var swiper = new Swiper(".clients_swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
var swiper = new Swiper(".ourWorkSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".Myswiper-button-next",
        prevEl: ".Myswiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".more_swiper", {
    slidesPerView: "auto",
    // centeredSlides: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".Featured_swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
