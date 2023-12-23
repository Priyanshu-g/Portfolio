function dragMouseDown(e) {
    e = e || window.event;
    //e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.pageX ;
    pos4 = e.pageY ;
    e.target.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    e.target.onmousemove = elementDrag;
}

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.pageX;
    pos2 = pos4 - e.pageY;
    pos3 = e.pageX;
    pos4 = e.pageY;
    // set the element's new position:
    e.target.style.top = (e.target.offsetTop - pos2) + "px";
    e.target.style.left = (e.target.offsetLeft - pos1) + "px";
}

function closeDragElement(e) {
    /* stop moving when mouse button is released:*/
    e.target.onmouseup = null;
    e.target.onmousemove = null;
}

  