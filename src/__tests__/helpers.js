/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const {
    incrementQty, 
    decrementQty,
    recalculateSubtotal,
    qtyInput,
    priceInput,
    Value,
    diskon,
    grandTotal,
    angka
} = require('../helpers.js');

test('Qty 1 ditambah 1 harusnya 2', () => {
    expect(incrementQty(1)).toBe(2);
});

test('Jika qty 2 dikurangi 1 harusnya 1', () => {
    expect(decrementQty(2)).toBe(1);
});

test('Subtotal harusnya price 25000 dikali qty 2 = 50000', () => {
    expect(recalculateSubtotal(25000,2)).toBe(50000);
});

test('Jika kode promo = KODE50 dari barang seharga 50000 dan qty 2 (total 100000) adalah 50000', () => {
    expect(diskon(50000, 2, "KODE50")).toBe(50000);
}); 

test('Grandtotal dari barang dengan harga 50000 dan qty 2 diskon KODE50 adalah 50000', () => {
    expect(grandTotal(50000, 2, "KODE50")).toBe(50000);
});

// test('Jika qty dan price di isi dengan huruf maka qty = 1 dan price = 0', () => {
//     expect(angka(String)).toBe(0);
// });