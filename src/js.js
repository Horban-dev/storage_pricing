// function test(st, tr) {
//     const min = 7
//     if(st * 0.005 < 7 && tr * 0.01  < 7) {
//         return min
//     } else {
//         return st * 0.005 + tr * 0.01
//     }
// }
// console.log(test(50, 50))
// console.log(test(100, 100))
// console.log(test(300, 300))
// console.log(test(1000, 1000))


// function test(st, tr, type) {
    
//     let storagePrice, transferPrice;
//     if (type === "HDD") {
//       storagePrice = 0.01;
//     } else if (type === "SSD") {
//       storagePrice = 0.02;
//     }
//     transferPrice = 0.01;
    
//     const totalPrice = (st * storagePrice) + (tr * transferPrice);
    
//     if (totalPrice < 10) {
//       return totalPrice
//     } else {
//       return 10
//     }
//   }
//   console.log(test(50, 50, 'SSD'))
//   console.log(test(50, 50, 'HDD'))
//   // console.log(test(100, 100))
//   // console.log(test(300, 300))
//   // console.log(test(1000, 1000))



  // function test(storage, transfer, option) {
  //   const baseStorage = 75; 
  //   const baseTransfer = 75; 
  //   const storageRate = option === 'Multi' ? 0.06 : 0.03;
  //   const transferRate = 0.02; 
  //   let storagePrice = 0;
  //   if (storage > baseStorage) {
  //     storagePrice = (storage - baseStorage) * storageRate;
  //   }
  //   let transferPrice = 0;
  //   if (transfer > baseTransfer) {
  //     transferPrice = (transfer - baseTransfer) * transferRate;
  //   }
  //   return storagePrice + transferPrice;
  // }
  // // console.log(test(50, 50, 'Multi'))
  // // console.log(test(50, 50, 'Single'))
  // console.log(test(1000, 1000, 'Multi'))
  // console.log(test(1000, 1000, 'Single'))




//   const data = [
//     { name: 'backblaze.com', icon: 'src', value: 10 },
//     { name: 'bunny.net', icon: 'src', value: 5, option: 
//         [{subname: 'HDD', values: 0.5}, {subname: 'SSD', values: 0.2}]},
//     { name: 'scaleway.com', icon: 'src', value: 3, option: 
//     [{subname: 'Multi', values: 4}, {subname: 'Single', values: 10}]},
//     { name: 'vultr.com', icon: 'src', value: 7 },
//   ];
// function modifyData(data, subname) {
//   return data.map(obj => {
//     if (obj.option && obj.option.find(opt => opt.subname === subname)) {
//       const opt = obj.option.find(opt => opt.subname === subname);
//       obj.value = opt.values * obj.value;
//     }
//     return obj;
//   });
// }
// const ff = modifyData(data, 'SSD')
// console.log(ff[1])