import { v4 } from "uuid";

export const imageRename = (name) => `images/${v4() + "." + getExtesion(name)}`;

const getExtesion = (image) =>
  image.slice((Math.max(0, image.lastIndexOf(".")) || Infinity) + 1);
