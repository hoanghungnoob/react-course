/**
 //Benefit of function default argument
 function default argument giúp cho việc triển khai các hàm được định nghĩa dễ dàng hơn.
  Ta có thể vừa gọi hàm không truyền đối số, và cũng có thể gọi đến hàm đó khi truyền đối số.
  Khi ta gọi hàm không truyền đối số thì hàm đó sẽ gọi ra giá trị mặc định.
  Còn khi ta gọi hàm có truyền đối số thì sẽ gọi giá trị mới thay cho giá trị mặc định.
  => tạo sự tiện lợi và chiếm ít không gian lưu trữ


  //Benefit of arrow functions
  - có cú pháp ngắn gọn hơn so với hàm truyền thống
  - Nó có thể trả về kết quả mà không cần "return"

  //Benefit of the destructuring syntax
  - Có cú pháp ngắn gọn: 
        ex: // Without destructuring
                const person = { firstName: 'John', lastName: 'Doe' };
                const firstName = person.firstName;
                const lastName = person.lastName;

                // With destructuring
                const { firstName, lastName } = person;
  - dễ dàng cho việc gán giá trị
        ex: // Array destructuring
            const [a, b] = [1, 2];

            // Object destructuring
            const { x, y } = { x: 1, y: 2 };
  - Benefit of the spread operator: cho phép mở rộng phạm vi của mảng, object.. nó làm cho mã dễ đọc, ngắn gọn hơn; 
  Nó giúp ta dễ dàng hơn trong việc xử lí với mảng như tạo ra 1 bản sao, hợp nhất các phần tử mảng ...
 */
  const person = { name: 'Alice', age: 30 };
  function greet({ name })
   { console.log('Hello, $(name)!');
  }
  greet(person);