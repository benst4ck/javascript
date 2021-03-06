var a = [1,2,3];
b = a.join();  // 将数组所有元素转化为字符串连接在一起 默认用逗号连接
b;
// "1,2,3"

b.split();  //Array.join和String.split互为逆操作
// ["1,2,3"]

b.split(',')  //通过split()方法后 数组的元素都是字符串形式
// ["1", "2", "3"]

c = a.join('');
c;
// "123"
c.split('');
// ["1", "2", "3"]

d = a.join(' ');
d;
// "1 2 3"
d.split(' ');
// ["1", "2", "3"]

var b = new Array(5);
b.join('-');
// "----"

var a = [1,2,3];
a.reverse();      //逆序排列数组
a;
// [3, 2, 1]

[9,'cat','Dog',35,undefined,'c','@','38',38].sort()  //取每个元素第一位 按ASCII码表顺序由小到大排序 undefined元素将会排到数组的尾部
// [35, 38, "38", 9, "@", "Dog", "c", "cat", undefined]

'aac' > 'aab'  //字符串比较大小时 都是先比较首字符 首字符大的即为较大的字符串 如果首字符一样 则转而比较下一个字符
// true
'44' > '123'
// true

var a = ['cat', 'Dog', 'ant', 'Bug','Cat','dog'];
a.sort(function(s, t) {  //忽略大小写进行排序
    var a = s.toLowerCase();
    var b = t.toLowerCase();
    if (a < b) return -1;  //返回小于0的值 意味着s应该排在前
    if (a > b) return 1;  //返回大于0的值 意味着t应该排在前
    return 0;  //返回0时 意味着s和t相等 按原本的顺序排
});
// ["ant", "Bug", "cat", "Cat", "Dog", "dog"]

// 可以通过向sort()传入比较函数 来自定义排序方式
var arr = [222, 33, 4, 1111]
arr.sort();
// [1111, 222, 33, 4]

arr.sort(function(a,b) {
    return a-b;  // 当返回负数时 参数a排前面 当返回正数时 参数b排在前面
});
// [4, 33, 222, 1111]


var a = [1,2,3];
a.concat(4,5);  // 返回新数组 而不是修改a数组 类似push方法 但是push方法是直接修改原数组
// [1, 2, 3, 4, 5]

a.concat([6,7],8,[9,10]);  // 参数中如果有数组 参数会降一维
// [1, 2, 3, 6, 7, 8, 9, 10]

a.concat([4,5,[6,7]]);
// [1, 2, 3, 4, 5, [6, 7]]


var a = [1,2,3,4,5];
a.slice(0,3);  //切片 包括起始位置的索引 但不包括终点位置的索引
// [1, 2, 3]

a.slice(3);  //只提供一个参数时 该参数为起点索引 一直切片到数组末尾
// [4, 5]

a.slice(1,-1);  //负数为反向索引 -1表示从反向数的第一个元素
// [2, 3, 4]

a.slice(-3,-2);
// [3]

a.slice(-1)
// [5]


var a = [1,2,3,4,5,6,7,8];
a.splice(5);  // 只提供一个参数时 表示从索引5开始 删除元素一直到数组末尾 返回被删除的元素组成的数组 该方法直接修改调用该方法的数组
// [6, 7, 8]
a;
// [1, 2, 3, 4, 5]

a.splice(1,2);  // 从索引1位置开始 删除两个元素
// [2, 3]
a;
// [1, 4, 5]

a.splice(1, 0, 'a', 'b', 'c');  // 从索引1位置开始 删除0个元素 插入'a' 'b' 'c'三个元素 
// []
a;
// [1, "a", "b", "c", 4, 5]

a.splice(1, 2, [2, 3]);
// ["a", "b"]
a;
// [1, [2, 3], "c", 4, 5]


var a = [1];
a.unshift(2,4); // 在数组的头部一次性添加一个或多个元素 返回数组的新长度
// 3
a;
// [2, 4, 1]
a.shift();  // 删除数组的第一个元素 返回被删除的值
// 2
a;
// [4, 1]