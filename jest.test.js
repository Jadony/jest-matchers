/*
 * @Author: 安风 jiadongyao@cai-inc.com
 * @Date: 2023-02-23 22:11:23
 * @LastEditors: 安风 jiadongyao@cai-inc.com
 * @LastEditTime: 2023-03-14 19:38:43
 * @FilePath: /auto-test-jest-learn/2.jest的匹配器/jest.test.js
 * @Description:
 */

test("测试", () => {
  // toBe 匹配器 matchers 测试期待是否与匹配器中的值相等 相当于object.is ===
  const a = { name: 'Zero' };
  // 因为 a 的引用地址，和 toBe 中对象的引用地址不一致，会导致测试不通过，需要使用其他的匹配器
  expect(a).toBe({ name: 'Zero' });
});
test('测试对象相等', () => {
  // toEqual 匹配器，只会匹配对象中的内容是否相等
  const a = { name: 'Zero' };
  expect(a).toEqual({ name: 'Zero' });  // 断言
})

// 有关真假值的匹配器
test('测试是否为null', () => {
  // toBeNull 匹配器，可以判断变量是否为null，只能匹配null
  const a = null;
  expect(a).toBeNull();
})
test('测试是否为undefined', () => {
  // toBeUndefined 匹配器，可以判断变量是否为 undefined，只能匹配undefined
  const a = undefined;
  expect(a).toBeUndefined();
})
test('测试变量是否定义过', () => {
  // toBeDefined 匹配器，希望被测试的值是定义好的
  const a = '';
  expect(a).toBeDefined();
})
test('测试变量真值', () => {
  // toBeTruthy 匹配器，可以判断变量是否为真值，会对非 bool 值进行转换
  const a = '123';
  expect(a).toBeTruthy();
})
test('测试变量假值', () => {
  // toBeFalsy 匹配器，可以判断变量是否为假值，会对非 bool 值进行转换
  const a = '';
  expect(a).toBeFalsy();
})
test('测试变量不是假值', () => {
  // not 匹配器，可以将匹配后的结果进行取反
  const a = '1';
  expect(a).not.toBeFalsy();
})

// 数字相关的匹配器
test('是否大于 a 的数字', () => {
  // toBeGreaterThan 匹配器，期望值是否大于匹配器的参数
  const a = 123;
  expect(a).toBeGreaterThan(1);
})
test('是否小于 a 的数字', () => {
  // toBeLessThan 匹配器，期望值是否小于匹配器的参数
  const a = 0;
  expect(a).toBeLessThan(1);
})
test('是否大于等于 a 的数字', () => {
  // toBeGreaterThanOrEqual 匹配器，期望值是否大于或等于匹配器的参数
  // toBeLessOrEqual 匹配器，与之相反
  const a = 123;
  expect(a).toBeGreaterThanOrEqual(1);
})
test('是否大于等于 a 的数字', () => {
  const a1 = 0.1;
  const a2 = 0.2;
  // js 中，浮点数值在相加时不准确
  // expect(a1 + a2).toEqual(0.3);
  // 使用 toBeCloseTo 匹配器解决，趋近于0.3
  expect(a1 + a2).toBeCloseTo(0.3);
})

// 字符串匹配器
test('是否包含 day ', () => {
  const a = 'happy every day';
  // toMatch 匹配器，匹配当前字符串中是否含有这个值，支持正则
  expect(a).toMatch('day');
})

// 数组匹配器
test('数组中是否包含 zoo 这个元素', () => {
  const a = ['zoo', 'ZooTeam', 'Zero'];
  // toContain 匹配器，判断当前数组中是否包含这个元素，Set 也可以使用
  expect(a).toContain('zoo');
})

// 异常匹配器
const error = () => {
  throw new Error('error');
}
test('是否存在异常', () => {
  // toThrow 匹配器，可以捕捉抛出的异常，参数为抛出的 error ，可以用来判断是否为某个异常
  expect(error).toThrow();
})