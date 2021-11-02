// The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

let simpleArray = ["one", 2, "three", true, false, undefined, null];
console.log(simpleArray.length);

let complexArray = [
  [
    {
      one: 1,
      two: 2,
    },
    {
      three: 3,
      four: 4,
    },
  ],
  [
    {
      a: "a",
      b: "b",
    },
    {
      c: "c",
      d: "d",
    },
  ],
];
console.log(complexArray.length);
