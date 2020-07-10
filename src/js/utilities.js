export const createBlock = (parent, type, id) => {
  const block = document.createElement(type);
  parent.appendChild(block);
  block.id = id;
  return block;
};
