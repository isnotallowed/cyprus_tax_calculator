export const renderLongText = (text: string) => {
  return text
    .split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);
};
