import { TriGeometry } from "../modelStore";

const position = [
  // Front face
  -1.0,
  -1.0,
  1.0,
  1.0,
  -1.0,
  1.0,
  1.0,
  1.0,
  1.0,
  -1.0,
  1.0,
  1.0,

  // Back face
  -1.0,
  -1.0,
  -1.0,
  -1.0,
  1.0,
  -1.0,
  1.0,
  1.0,
  -1.0,
  1.0,
  -1.0,
  -1.0,

  // Top face
  -1.0,
  1.0,
  -1.0,
  -1.0,
  1.0,
  1.0,
  1.0,
  1.0,
  1.0,
  1.0,
  1.0,
  -1.0,

  // Bottom face
  -1.0,
  -1.0,
  -1.0,
  1.0,
  -1.0,
  -1.0,
  1.0,
  -1.0,
  1.0,
  -1.0,
  -1.0,
  1.0,

  // Right face
  1.0,
  -1.0,
  -1.0,
  1.0,
  1.0,
  -1.0,
  1.0,
  1.0,
  1.0,
  1.0,
  -1.0,
  1.0,

  // Left face
  -1.0,
  -1.0,
  -1.0,
  -1.0,
  -1.0,
  1.0,
  -1.0,
  1.0,
  1.0,
  -1.0,
  1.0,
  -1.0,
];

const faceColors = [
  [1.0, 1.0, 1.0, 1.0], // Front face: white
  [1.0, 0.0, 0.0, 1.0], // Back face: red
  [0.0, 1.0, 0.0, 1.0], // Top face: green
  [0.0, 0.0, 1.0, 1.0], // Bottom face: blue
  [1.0, 1.0, 0.0, 1.0], // Right face: yellow
  [1.0, 0.0, 1.0, 1.0], // Left face: purple
];

let color: number[] = [];

for (let j = 0; j < faceColors.length; ++j) {
  const c = faceColors[j];

  color = color.concat(c, c, c, c);
}

const index = [
  // front
  0,
  1,
  2,
  0,
  2,
  3,
  // back
  4,
  5,
  6,
  4,
  6,
  7,
  // top
  8,
  9,
  10,
  8,
  10,
  11,
  // bottom
  12,
  13,
  14,
  12,
  14,
  15,
  // right
  16,
  17,
  18,
  16,
  18,
  19,
  // left
  20,
  21,
  22,
  20,
  22,
  23,
];

const normal = [
  // Front
  0.0,
  0.0,
  1.0,
  0.0,
  0.0,
  1.0,
  0.0,
  0.0,
  1.0,
  0.0,
  0.0,
  1.0,

  // Back
  0.0,
  0.0,
  -1.0,
  0.0,
  0.0,
  -1.0,
  0.0,
  0.0,
  -1.0,
  0.0,
  0.0,
  -1.0,

  // Top
  0.0,
  1.0,
  0.0,
  0.0,
  1.0,
  0.0,
  0.0,
  1.0,
  0.0,
  0.0,
  1.0,
  0.0,

  // Bottom
  0.0,
  -1.0,
  0.0,
  0.0,
  -1.0,
  0.0,
  0.0,
  -1.0,
  0.0,
  0.0,
  -1.0,
  0.0,

  // Right
  1.0,
  0.0,
  0.0,
  1.0,
  0.0,
  0.0,
  1.0,
  0.0,
  0.0,
  1.0,
  0.0,
  0.0,

  // Left
  -1.0,
  0.0,
  0.0,
  -1.0,
  0.0,
  0.0,
  -1.0,
  0.0,
  0.0,
  -1.0,
  0.0,
  0.0,
];

export const model: TriGeometry = {
  position: Float32Array.from(position),
  color: Float32Array.from(color),
  index: Uint16Array.from(index),
  normal: Float32Array.from(normal),
};
