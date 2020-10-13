// Check if a 'header' element exists in the page
if (document.querySelectorAll('header')[0] !== undefined) {
  // If so: fetch its contents and insert it into the DOM element
  fetch("./header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });
}

// Check if a 'footer' element exists in the page
if (document.querySelectorAll('footer')[0] !== undefined) {
  // If so: fetch its contents and insert it into the DOM element
  fetch("./footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });
}
