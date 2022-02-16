
// 普通声明调用
// function getItemList(id, price) {
//     console.log('price: ', price);
//     console.log('id: ', id);
// }

// getItemList(343, 12)

// 换个写法
function getItemList({id, price}) {
    console.log('price: ', price);
    console.log('id: ', id);
}

getItemList({id: 343, price: 12})