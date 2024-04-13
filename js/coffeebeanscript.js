let coffeeBeans = [
  { id: 1, name: "Pacamara", price: 20.99, flavor: ["acidic"], stock: 27, soldQuantity: 100 },
  { id: 2, name: "Maragogipe", price: 13.99, flavor: ["smooth"], stock: 33, soldQuantity: 80 },
  { id: 3, name: "Mocha", price: 18.99, flavor: ["robust"], stock: 40, soldQuantity: 95 },
  { id: 4, name: "Monsooned Malabar", price: 22.99, flavor: ["strong"], stock: 22, soldQuantity: 50 },
  { id: 5, name: "Sulawesi", price: 25.99, flavor: ["sweet"], stock: 15, soldQuantity: 70 },
  { id: 6, name: "Sumatra", price: 19.99, flavor: ["sweet", "smooth"], stock: 30, soldQuantity: 60 },
  { id: 7, name: "Toraja", price: 21.99, flavor: ["smooth", "strong"], stock: 25, soldQuantity: 75 },
  { id: 8, name: "Yirgacheffe", price: 23.99, flavor: ["acidic", "sweet"], stock: 28, soldQuantity: 85 },
  { id: 9, name: "Peaberry", price: 26.99, flavor: ["robust", "acidic"], stock: 32, soldQuantity: 90 },
  { id: 10, name: "Blue Mountain", price: 24.99, flavor: ["smooth", "sweet"], stock: 20, soldQuantity: 110 },
  { id: 11, name: "Bean11", price: 15.99, flavor: ["strong"], stock: 45, soldQuantity: 120 },
  { id: 12, name: "Bean12", price: 16.99, flavor: ["sweet"], stock: 38, soldQuantity: 130 },
  { id: 13, name: "Bean13", price: 17.99, flavor: ["acidic"], stock: 50, soldQuantity: 140 },
  { id: 14, name: "Bean14", price: 14.99, flavor: ["robust"], stock: 40, soldQuantity: 150 },
  { id: 15, name: "Bean15", price: 18.99, flavor: ["smooth"], stock: 30, soldQuantity: 160 },
  { id: 16, name: "Bean16", price: 19.99, flavor: ["sweet", "strong"], stock: 27, soldQuantity: 170 },
  { id: 17, name: "Bean17", price: 22.99, flavor: ["smooth", "acidic"], stock: 35, soldQuantity: 180 },
  { id: 18, name: "Bean18", price: 23.99, flavor: ["robust", "sweet"], stock: 45, soldQuantity: 190 },
  { id: 19, name: "Bean19", price: 18.99, flavor: ["strong", "acidic"], stock: 31, soldQuantity: 200 },
  { id: 20, name: "Bean20", price: 21.99, flavor: ["smooth", "robust"], stock: 22, soldQuantity: 210 }
];
let images = [
    'imgs/goods/biologico_front.png',
    'imgs/goods/cremoso_front_1024x1024.png',
    'imgs/goods/doichaang_front_1024x1024.png',
    'imgs/goods/espresso_front_1024x1024.png',
    'imgs/goods/intenso500grani_front_1024x1024.png',
    'imgs/goods/italianstyle_front_1024x1024.png',
    'imgs/goods/premium_front_1024x1024.png',
    'imgs/goods/springtime_decaf.png'
];
function getRandomInteger(max, min = 1) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function FillContent2div(type, number){
    var result = "";
    var innerStr = '<div class="c2">'
                +'<div class="smallimg"><img src="%imgPath%"></div>'
                +'<div class="none1"></div>'
                +'<div class="shop1">'
                +    '<img src="imgs/ico/cart.png">'
                +    '<div class="shop2">'
                +        '<a onclick="alert(123)"><img src="imgs/ico/yellowcart.png"></a>'
                +    '</div>'
                +'</div>'
                +'</div> '

    switch(type){
        case '1':
        break;
        default:
            for(let i=0; i<6; i++){
                result += innerStr.replace("%imgPath%",images[getRandomInteger(7)])
            }
    }
    
    document.getElementById("conten2inner").innerHTML = result
}
function SelectedChanged(){
    var selectedFlavor = document.getElementById('Flavors').value
    var result = "";
    var iresult = 0
    var innerStr = '<div class="c2">'
                +'<div class="smallimg"><img src="%imgPath%"></div>'
                +'<div class="none1"></div>'
                +'<div class="shop1">'
                +    '<img src="imgs/ico/cart.png">'
                +    '<div class="shop2">'
                +        '<a onclick="alert(%id%)"><img src="imgs/ico/yellowcart.png"></a>'
                +    '</div>'
                +'</div>'
                +'</div> '
    
    coffeeBeans.forEach(function(item, index, array){
        if (item.flavor.includes(selectedFlavor) && iresult < 6){
            result += innerStr.replace("%imgPath%",images[getRandomInteger(7)]).replace("%id%",'\''+item.name+'\'')
            iresult++
        }
    })
    document.getElementById("conten2inner").innerHTML = result
}
function SelectedChangedForSort(){
    var selectedFlavor = document.getElementById('Flavors').value
    var sortCondition = document.getElementById('others').value
    var newArr = []
    var result = "";
    var iresult = 0
    var innerStr = '<div class="c2">'
                +'<div class="smallimg"><img src="%imgPath%"></div>'
                +'<div class="none1"></div>'
                +'<div class="shop1">'
                +    '<img src="imgs/ico/cart.png">'
                +    '<div class="shop2">'
                +        '<a onclick="alert(%id%)"><img src="imgs/ico/yellowcart.png"></a>'
                +    '</div>'
                +'</div>'
                +'</div> '
    
    coffeeBeans.forEach(function(item, index, array){
        if (item.flavor.includes(selectedFlavor) && iresult < 6){
            newArr.push(item)
            iresult++
        }
    })
    switch(sortCondition){
        case 'sellasc':
            newArr.sort(function(a,b){
                return a.soldQuantity < b.soldQuantity
            })
            break;
        case 'selldes':
            newArr.sort(function(a,b){
                return a.soldQuantity > b.soldQuantity
            })
            break;
        case 'priceasc':
            newArr.sort(function(a,b){
                return a.price < b.price
            })
            break;
        case 'pricedes':
            newArr.sort(function(a,b){
                return a.price > b.price
            })
            break;
        case 'stockasc':
            newArr.sort(function(a,b){
                return a.stock < b.stock
            })
            break;
        case 'stockdes':
            newArr.sort(function(a,b){
                return a.stock > b.stock
            })
            break;
    }
    iresult = 0
    newArr.forEach(function(item, index, array){
        if (item.flavor.includes(selectedFlavor) && iresult < 6){
            result += innerStr.replace("%imgPath%",images[getRandomInteger(7)]).replace("%id%",'\''+item.name+'\'')
            iresult++
        }
    })
    document.getElementById("conten2inner").innerHTML = result
}
function SubmitFeedBack(){
    var user = document.getElementById("name").value
    var email = document.getElementById("email").value
    var feedback = document.getElementById("feedback").value
    var message = "Thank you for your FeedBack " + user + "\n" 
    + "Your concern is our best encouragement."
    alert(message)
    event.preventDefault()
    window.location = 'feedback.html'
    return
}


