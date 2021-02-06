export function onDragStart(event) {
    // event
    //     .target
    //     .id = 'drag';
    console.log(event)

  
    // console.log(event.dataTransfer);
  }

export function onDragOver(event) {
    event.preventDefault();
  }

export function onDrop(event) {
    const id = event
      // .dataTransfer
      // .getData('text');

      const draggableElement = document.getElementById(id);
      const dropzone = event.target;
      dropzone.appendChild(draggableElement);
      savePosition(draggableElement);

      // event
      //   .dataTransfer
      //   .clearData();
  }

export function savePosition(element) {
      console.log(element)
      // Cookies.setCookie()
  }