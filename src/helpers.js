const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;

function recalculateSubtotal(price, qty){
    return price*qty;
}

function angka(Id,Value){
    if(isNaN(Value) || Value <0 ){
        if(Id == "price"){
            return "0";
        }else if(Id == "qty"){
            return "1";
        }else{
            return "0";
        }    
    }else{
        return Value;
    }
}

function grandTotal(price, qty, kode) {
    return recalculateSubtotal(price, qty) - diskon(price, qty, kode);
}

function absoluteQty(qty) {
    return (parseInt(qty) < 1) ? 1 : qty;
}

function diskon(price, qty, kode) {
    const subTotal = recalculateSubtotal(price, qty);
    switch (kode) {
        case "KODE25":
            hasilDiskon = subTotal * 0.25;
            break;
        case "KODE10":
            hasilDiskon = subTotal * 0.10;
            break;
        case "KODE50":
            hasilDiskon = subTotal * 0.50;
            break;
        case "PELANGGAN1JT":
            hasilDiskon = subTotal * 0.40;
            break;
        default:
            hasilDiskon = 0;
            break;
    }
    return hasilDiskon;
}


module.exports = { 
    incrementQty, 
    decrementQty,
    recalculateSubtotal,
    angka,
    diskon,
    grandTotal,
    absoluteQty
};
