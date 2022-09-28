const mouseOver = (index) => {
  const dotsElement = document.getElementById(`dots-${index}`);
  const iconsElement = document.getElementById(`icons-${index}`);

  dotsElement.style.display = 'none';
  iconsElement.style.display = 'flex';
};

export default mouseOver;
