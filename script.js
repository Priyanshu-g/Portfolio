var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
function dragMouseDown(e) {
    e = e || window.event;
    //e.preventDefault();
    // get the mouse cursor position at startup:
    window.pos3 = e.pageX ;
    window.pos4 = e.pageY ;
    //e.target.style.top = (e.pageX) + "px";
    //e.target.style.left = (e.pageY) + "px"
    e.target.onmouseup = closeDragElement;
    e.target.onmouseleave = closeDragElement;
    e.target.onmouseenter = closeDragElement;
    // call a function whenever the cursor moves:
    e.target.onmousemove = elementDrag;
}

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    window.pos1 = window.pos3 - e.pageX;
    window.pos2 = window.pos4 - e.pageY;
    window.pos3 = e.pageX;
    window.pos4 = e.pageY;
    // set the element's new position:
    e.target.style.top = (parseInt(e.target.style.top.substring(0,e.target.style.top.length - 2)) - window.pos2) + "px";
    e.target.style.left = (parseInt(e.target.style.left.substring(0,e.target.style.left.length - 2)) - window.pos1) + "px";
}

function closeDragElement(e) {
    /* stop moving when mouse button is released:*/
    e.target.onmouseup = null;
    e.target.onmousemove = null;
    e.target.onmouseleave = null;
    e.target.onmouseenter = null;
}

  