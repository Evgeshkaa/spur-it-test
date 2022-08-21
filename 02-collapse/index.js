let collapsible = document.querySelector('.collapsible')
let button = collapsible.querySelector('.collapsible__button');
let content = collapsible.querySelector('.collapsible__content');
let buttonVisible = button.querySelector('.collapsible__action.collapsible__action--visible');
let buttonHidden = button.querySelector('.collapsible__action.collapsible__action--hidden');

// Init
content.hidden = true;
buttonVisible.hidden = true;

// Events
buttonVisible.onclick = function () {
    let animate = content.animate([
        {opacity: 1},
        {opacity: 0},
    ], 300);

    animate.onfinish = function() {
        content.hidden = true;
        buttonHidden.hidden = false;
        buttonVisible.hidden = true;
    };
};

buttonHidden.onclick = function () {
    content.hidden = false;

    let animate = content.animate([
        {opacity: 0},
        {opacity: 1},
    ], 300);
    
    animate.onfinish = function() {
        buttonHidden.hidden = true;
        buttonVisible.hidden = false;
    };
};
