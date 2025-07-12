const   monHoc= [
    {
        ten:"Toán",
        Diem:7
    },
    {
        ten:"Văn",
        Diem:8
    } 
    ,{
        ten:"Anh",
        Diem:7
    } 
    ,
    {
        ten:"Lý",
        Diem:15
    }
];
var tongdiem= monHoc.reduce((total,item)=>{
    let tong=0;
    tong=total+item.Diem;
    return tong;
},0);
console.log(tongdiem);
var tong=0;
var totalDiem=monHoc.forEach((item)=>{
    tong+=item.Diem;
});
console.log(tong);
//
const arrayString="Chẳng có gì hết";
var ss= arrayString.split(" ").map((data)=>{
return data.toUpperCase();
});
console.log(ss);

//Baitap
//1.1
// var input= prompt("Nhap 1 so bat ky");
// input= parseFloat(input);
// function soduong(input){
// return input>0 && input%1==0;
// };
// if (isNaN(input)) {
//     alert("Vui lòng nhập một số!");
//   } else {
//     var result = soduong(input);
//     if (result == true) {
//       alert("YES");
//     } else {
//       alert("NO");
//     }
//   }

  // check xem no co phai la 1 hinh hay 0;
  const sum=((array)=>{
    let tong=0;
   array.reduce((total,item)=>{
       tong= total+=item;
        return total;
    },0);
    return tong;
});
var checkshape=(n,array)=>{
    if(n<3){
        return false;
    }   
    else if(
        array.some((item)=>{
            item<=0||item>=180
        })){
        return false;
    }
    else if(sum(array)!==(n-2)*180){
        return false
    } 
    return true;
};
const test1= checkshape(3,[160,10,10]);
  console.log(test1);

  // cach 2 cua bai tren
//   const sum1 = (array) => {
//     const total = array.reduce((total, number) => total + number, 0);
//     return total;
//   }
  
  
//   const isShapePossible = (n, angles) => {
//     if (n < 3) return false;
  
  
//     if (angles.some((angle) => angle <= 0 || angle >= 180)) return false;
    
//     return sum(angles) === (n - 2) * 180;
//   };
  
  
//   const test = isShapePossible(4, [90, 90, 90, 90]);
//   console.log(test); // true
  
//Tạo một hàm nhận vào một câu văn và trả về chữ viết tắt của câu văn đó. Lấy tất cả các từ có độ dài lớn hơn hoặc bằng n ký tự và trả về chữ cái đầu tiên của mỗi từ, được viết hoa.

const viettat=((chuoi,n)=>{
    let arr=chuoi.split(" ");
    let filter= arr.filter((item)=>{
           return item.length>=n;
        });
    let arr2=  filter.map((item)=>{
            return item[0];
        });
    let newStringupper=arr2.join("").toUpperCase();
    return newStringupper;
});
const test2= viettat("Con co be be",0);
console.log(test2);

//Tạo một hàm thay đổi kiểu viết (hoa hoặc thường) của các chữ cái trong một chuỗi.

const upperCase=((chuoi)=>{
    let arr= chuoi.split("");
    let counter=0;
    let doubletype= arr.map((item,index)=>{
        if(item==" "){
            return item;
        
        }
        let result= counter%2==0?item.toUpperCase():item.toLowerCase();
        counter+=1;
        return result;
    });
    return doubletype.join("");
});

const doi= upperCase("Beo ba");
console.log(doi);

//Trung vị của một nhóm số là số ở giữa khi nhóm được sắp xếp.
const sum2 = (arr) => {
  return arr.reduce((total, num) => total + num, 0);
};


const mean = (arr) => {
  return sum2(arr) / arr.length;
};


const median = (arr) => {
  const numberBefore = arr[Math.floor((arr.length - 1) / 2)];
  const numberAfter = arr[Math.ceil((arr.length - 1) / 2)];


  return mean([numberBefore, numberAfter]);
};


const test13 = median([1, 2, 4, 5, 6, 8, 8, 8, 10]);
console.log(test13); // 6

// //Viết một hàm getBirthdayCake(name, age) để tạo một chiếc bánh sinh nhật hình chữ nhật, dựa trên tên và tuổi của ai đó.
// Nếu tuổi là một số chẵn, hãy vẽ hình bao quanh bằng chữ "#".
// Nếu tuổi là một số lẻ, hãy vẽ hình bao quanh bằng chữ "*".
// Dòng tin nhắn phải ở định dạng: {tuổi} Chúc mừng sinh nhật {tên}! {tuổi}
// Để lại một khoảng trống giữa mép bánh và số tuổi
// Ví dụ:
// const test1 = getBirthdayCake("Nam", 18);
// console.log(test1);
/*
  ##################################
  # 18 Chúc mừng sinh nhật Nam! 18 #
  ##################################
*/


const getBirthdayCake=((name,age)=>{
    let char= age%2==0?"#":"*";
    let loichuc= `${char} ${age} Chúc mừng sinh nhật ${name}! ${age} ${char}`;
    let end= char.repeat(loichuc.length);
   return `
    ${end}
    ${loichuc}
    ${end}
  `     
})
const test14 = getBirthdayCake("Nam", 18);
console.log(test14);

//ài:
// Tạo một hàm thay thế n từ cuối cùng bằng "blah". Thêm "..." vào "blah" cuối cùng. 
// Nếu n dài hơn số từ trong câu, hãy thay tất cả các từ bằng "blah"
// Tất cả các từ "blah" sẽ là chữ thường!
// Ví dụ: 
// "Anh học CNTT hả, cài win dùm em nhé!" —> "Anh học CNTT hả, cài win blah blah blah…"

const blah=((chuoi2,number)=>{
    const word= chuoi2.split(" ");
    const newWord= word.map((item,index,word1)=>{
        return number>word1.length-index-1?"blah":item;
    })
    const newString= newWord.join(" ");
    return `${newString}...`
})
console.log(blah( "Anh học CNTT hả, cài win dùm em nhé!",4));


//Tạo một hàm truyền vào một array gồm các phần tử là object (gồm các key: product, quantity, price) để tính toán tổng giá và trả về dưới dạng một số.
// Ví dụ:
// const test1 = getTotalPrice([
// 	{ product: "Sữa", quantity: 1, price: 7000 }
// ]);
// console.log(test1); // 7000


const sum11 = (array) => {
    return array.reduce((total, num) => total + num, 0);
  };
  
  
  const getTotalPrice = (array) => {
    const arrayTotal = array.map((item) => item.quantity * item.price);
    return sum11(arrayTotal);
  };
  
  
  const test11 = getTotalPrice([
      { product: "Sữa", quantity: 1, price: 7000 }
  ]);
  console.log(test11); // 7000
  
  // viết hoa chữ cái đầu
//   Ví dụ: 
// "Fix bug là chuyện dễ. Tìm đoạn code gây ra bug để fix mới là chuyện khó." —>
//  "Fix Bug Là Chuyện Dễ. Tìm Đoạn Code Gây Ra Bug Để Fix Mới Là Chuyện Khó."

   const viethoa= ((array)=>{
    let neww= array.split(" ");
    const typeword= neww.map((item)=>{
        return item[0].toUpperCase()+item.slice(1   );
    })
    return typeword.join(" ");
   })
   console.log(viethoa("Fix bug là chuyện dễ. Tìm đoạn code gây ra bug để fix mới là chuyện khó."));

   //cầu chì
   const chooseFuse=((fuses,current)=>{
    const num= parseFloat(current);
    const findfu=fuses.map((parseFloat)).filter((item)=>{
       return item>=num;
    });
    return `${Math.min(...findfu)}V`;

   })
   const test10 = chooseFuse(["3V", "5V", "12V"], "4.5V");
console.log(test10);

//
const countOnes = arr => {
    const result = arr.reduce((total, row) => total + row.filter(cell => cell === 1).length, 0);
    return result;
  }
  
  
  const test111 = countOnes([
    [1, 0],
    [0, 1],
  ]);
  console.log(test111); // 1
  
//   :
//   Viết hàm swappingCases(string) truyền vào một string bất kỳ, đảo ngược cách viết hoa, viết thường của các chữ cái.
//   Ví dụ: 
//   "Le VAn HunG" —> "lE vaN hUNg"
//   "Đặng PhưƠnG NAm" —> "đẶNG pHƯơNg naM"
  const swappingCases=((string)=>{
    let nn= string.split("");
    const arrnew= nn.map((item)=>{
       return item===item.toUpperCase()?item.toLowerCase():item.toUpperCase();
    }).join("");
    return arrnew;
  })
  const test122 = "Le VAn HunG";
console.log(swappingCases(test122));

//Viêt hàm invertedNumbers(array) truyền vào một mảng có các phần tử là các số bất kỳ,
//  hãy đảo ngược giá trị từ âm sang dương, hoặc từ dương sang âm của các số trong mảng đó.
// Ví dụ: 
// [1, -10, -20, 15, 100, -30] —> [-1, 10, 20, -15, -100, 30]
// [-20, 30, 10, -25, -60, 20] —> [20, -30, -10, 25, 60, -20]
//
const invertedNumbers=((array)=>{
    const daonguoc= array.map((item)=>{
        return item>=0?item*(-1):item*(-1);
    })
    return daonguoc
})
console.log(invertedNumbers([1, -10, -20, 15, 100, -30]));
//Viết hàm ignoreNumbers(string) truyền vào một string bao gồm cả số và chữ, hãy trả về một string mới chỉ gồm chữ.
// Ví dụ: 
// "Test4Ag54SF" —> "TestAgSF"
// "JHk34Gl3gG" —> "JHkGlgG"

const charstr=((string)=>{
    const string2= string.split("");
    let ss2=string2.map((item)=>{
       return (isNaN(parseInt(item)))?item:""   
    }).join("");
    return ss2;
});
console.log(charstr("888dfh"));

// Viết hàm smallWords(string, number) truyền vào một string và một số number.
//  Trả ra một string mới chỉ gồm những từ ≤ number.
// Ví dụ: 
// smallWords("I Love Foood Code Too Playing Much", 4) —> "I Love Code Too Much".

const smallWords=((string, number)=>{
    const smw= string.split(" ");
    const smw2= smw.map((item)=>{
        return item.length<=number?item:""
    }).join(" ");
    return smw2;
});
console.log(smallWords("I Love Foood Code Too Playing Much", 4))

//Viết hàm multiplyNumberInString(string), truyền vào một string, hãy trả ra một string mới là phép nhân của các số có trong string đó.
// Ví dụ: 
// "JG23BGH5BA" —> "4925" 
// 2*2 = 4
// 3*3 = 9
// 5*5 = 25
// —> "4925"
 const multiplyNumberInString=((string)=>{
    const muti2= string.split("");
    const muti3= muti2.map((item)=>{
       return isNaN(parseInt(item))?"":item*item;
    }).join("");
    return muti3;
 });
 console.log(multiplyNumberInString("JG23BGH5BA"));

 //Tính tổng tiền trong giỏ hàng
// Đề bài:
// Cho một mảng giỏ hàng chứa các sản phẩm (bao gồm tên, giá, số lượng). Hãy tính tổng tiền của giỏ hàng đó.
// Ví dụ:
// const cart = [
//   { name: "iPhone", price: 1000, quantity: 5 },
//   { name: "iPad", price: 500, quantity: 2 },
//   { name: "MacBook", price: 2000, quantity: 1 },
// ];
// Tính toán để trả về: 1000 * 5 + 500 * 2 + 2000 * 1 = 8000

const summ= ((array)=>{
   let summm= array.reduce((total,item)=>{
        return total+item;
    });
    return summm;
})
const cart = ((array)=>{
    const ssum=array.map((item)=>{
        return item.price*item.quantity
    })
    return summ(ssum);
}) 
console.log(cart([
     { name: "iPhone", price: 1000, quantity: 5 },
    { name: "iPad", price: 500, quantity: 2 },
    { name: "MacBook", price: 2000, quantity: 1 },
    ]));

    //Cho một mảng danh sách các học sinh của một lớp. Hãy nhóm các học sinh Nam thành 1 nhóm, 
    // học sinh Nữ thành 1 nhóm.
// Ví dụ:
// const students = [
//   { hoTen: "Le Van A", gioiTinh: "Nam" },
//   { hoTen: "Do Van B", gioiTinh: "Nam" },
//   { hoTen: "Nguyen Thi C", gioiTinh: "Nu" },
//   { hoTen: "Dao Van D", gioiTinh: "Nam" },
//   { hoTen: "Hoang Thi E", gioiTinh: "Nu" },
//   { hoTen: "Vu Van F", gioiTinh: "Nam" },

const students = [
    { hoTen: "Le Van A", gioiTinh: "Nam" },
    { hoTen: "Do Van B", gioiTinh: "Nam" },
    { hoTen: "Nguyen Thi C", gioiTinh: "Nu" },
    { hoTen: "Dao Van D", gioiTinh: "Nam" },
    { hoTen: "Hoang Thi E", gioiTinh: "Nu" },
    { hoTen: "Vu Van F", gioiTinh: "Nam" },
  ];
  
  
  const groupedStudents = students.reduce((groups, item) => {
    if (groups[item.gioiTinh]) {
      groups[item.gioiTinh].push(item.hoTen);
    } else {
      groups[item.gioiTinh] = [item.hoTen];
    }
    return groups;
  }, {});
  
  
  console.log(groupedStudents);
  











