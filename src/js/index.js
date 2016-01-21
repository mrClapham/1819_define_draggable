var _dragArea;

document.addEventListener("DOMContentLoaded", function(){
   init();
});

function init(){
    console.log("Dom Loaded ", this);
    try{
      fin.desktop.main(function(){
        initWithOpenFin();
      })
    }catch(err){
      initNoOpenFin();
    }
};

function initWithOpenFin(){
  console.log("OpenFin is available. ");
  _dragArea = document.querySelector("#dragger");
  fin.desktop.Window.getCurrent().defineDraggableArea(_dragArea);
    initDomEventListeners();
    initDragEventListener();
}

function initDomEventListeners(){
[].slice.call(document.querySelectorAll(".listened")).map(function(d,i){
    d.addEventListener('mouseover', function(e){
        console.log("MOUSE OVER --- ")
        e.target.classList.remove('mouseleave');
        e.target.classList.add('mouseover');

    });
    d.addEventListener('mouseout', function(e){
        console.log("MOUSE OUT --- ")
        e.target.classList.remove('mouseleave');
        e.target.classList.add('mouseover');
    });
    d.addEventListener('mouseleave', function(e){
        console.log("MOUSE LEAVE --- ")
        e.target.classList.add('mouseleave');
        e.target.classList.remove('mouseover');
    });
});
}
/*
 initDragEventListener will have no effect on the drag bar, as it is defined as a draggable area, and is there for illustration only.
 */
function initDragEventListener(){
    _dragArea.addEventListener('mouseover', function(e){
        console.log("MOUSE OVER --- ");
        e.target.classList.remove('mouseleave');
        e.target.classList.add('mouseover');

    });
    _dragArea.addEventListener('mouseout', function(e){
        console.log("MOUSE OUT --- ");
        e.target.classList.add('mouseleave');
        e.target.classList.remove('mouseover');

    });
    _dragArea.addEventListener('mouseleave', function(e){
        console.log("MOUSE LEAVE --- ");
        e.target.classList.add('mouseleave');
        e.target.classList.remove('mouseover');

    });
    _dragArea.addEventListener('mousemove', function(e){
        console.log("MOUSE MOVE --- ");
        e.target.classList.remove('mouseleave');
        e.target.classList.add('mouseover');

    });


}

function initNoOpenFin(){
  alert("OpenFin is not available. You are in a browser.");
}
