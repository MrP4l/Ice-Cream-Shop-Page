function observerForHeader() {
    const divToObserve = document.getElementById("textContainer");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting >= 1) {
          header.classList.remove("onScroll");

        } else {
          header.classList.add("onScroll");
        }
      });
    }, {threshold: 1});
    
    observer.observe(divToObserve);
}

export default observerForHeader;