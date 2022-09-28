const mouseOut = (index) => {
  const dotsElement = document.getElementById(`dots-${index}`);
  const iconsElement = document.getElementById(`icons-${index}`);

  dotsElement.style.display = 'flex';
  iconsElement.style.display = 'none';
};

export default mouseOut;
