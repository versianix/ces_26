$(document).ready(function () {
    // Select the element that is clicked by user
    $("#container").on("click", "*", function (e) {
        e.stopPropagation();
        $(".selected").removeClass("selected"); // Remove the class of previously selected element
        $(this).addClass("selected"); // Add a class to the clicked element
    });

    // Add a click event to the root element
    $("#root").click(function (e) {
        if (e.target === this) {  // If the clicked element is the root element
            e.stopPropagation();  // Stop the event from bubbling up to the container
            $(".selected").removeClass("selected");
            $(this).addClass("selected");
        }
    });

    // Remove the selected element
    $("#remove-element").click(function () {
        if (!$(".selected").is("#root")) {  // Verifies if the selected element is not the root element
            $(".selected").remove();
        }
    });

    // Add a child element to the selected element
    $("#add-element").click(function () {
        const elementType = $("#element-type").val() || "div";
        const newElement = $(`<${elementType}>Novo Elemento</${elementType}>`);
        $(".selected").append(newElement);
    });

    // Edit the text of the element selected currently
    $("#edit-text").on("input", function () {
        const newText = $(this).val();
        $(".selected").text(newText);
    });

    // Edit the color of the element selected currently
    $("#edit-bg-color").on("input", function () {
        const newColor = $(this).val();
        $(".selected").css("background-color", newColor);
    });
});