function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animationright');
  for (let elm of elements) {
    observer.observe(elm);
  }

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  observer = new IntersectionObserver(onEntry, options);
  elements = document.querySelectorAll('.element-animationrotate');
  for (let elm of elements) {
    observer.observe(elm);
  }