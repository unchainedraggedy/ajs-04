import calculateTotal from '../calculate';

test('basic-test', () => {
  const result = 5;
  expect(result).toBe(5);
});

test('calculate sum without discount', () => {
  const list = [
    {
      id: 776,
      name: 'war and peace',
      count: 3,
      price: 400,
    },
    {
      id: 45,
      name: 'js',
      count: 1,
      price: 1300,
    },
  ];
  const result = calculateTotal(list);
  expect(result).toBe(2500);
});

test('calculate sum with discount', () => {
  const list = [
    {
      id: 776,
      name: 'war and peace',
      count: 3,
      price: 401,
    },
    {
      id: 45,
      name: 'js',
      count: 1,
      price: 1300,
    },
  ];
  const result = calculateTotal(list, true);
  expect(result).toBeCloseTo(2230.173);
});
