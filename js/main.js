$(document).ready(function () {
    var currentFloor = 2;// переменная, где хранится текущий этаж
    var floorPath = $(".home-image path"); //каждый отдельный этаж в SVG
    var counterUp = $(".counter-up");  /* кнопка увеличения этажа*/
    var counterDown = $(".counter-down");  /* кнопка уменьшения этажа*/
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button")
   var viewFlatsButton = $(".view-flats");
    //функция при наведении мышью на этаж
    floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor");  //удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
    $(".counter").text(currentFloor);// записываем значение этажа в счетчик 
    });

    counterUp.on("click", function () { // отслеживаем клик по кнопке вверх
        if (currentFloor < 18) { // проверяем значение этажа
       currentFloor++; // прибавляем 1 этаж
       usCurrentFloor = currentFloor.toLocaleString("en-Us", {minimumIntegerDigits: 2, 
        useGrouping: false }); // фотматируем переменную сэтажом, чтобы было 01, а не 1
       $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик
       floorPath.removeClass("current-floor");// удаляем активный класс у этажей
       $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");  //подсвечиваем текущий этаж
        }
    });

    floorPath.on("click", toggleModal); /* при клике на этаж вызвать окно*/
    modalCloseButton.on("click", toggleModal); /* при клике на кнопку закрыть убирает окно*/
    viewFlatsButton.on("click", toggleModal);

    counterDown.on("click", function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-Us", {minimumIntegerDigits: 2, 
            useGrouping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");  
        }

    });
    function toggleModal() {
        modal.toggleClass("is-open")};
});