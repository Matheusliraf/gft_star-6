//JSON - JavaScript Object Notation
// chave e valor com o objerivo de trasferir dados
let invoice = {
    name: "Matehus",
    age: 21,
    products : {
        0: ["Mouse ",29.90 ],
        1: ["telcaod mecãnico", 129.90],
        2: ["Monitor", 899.99]
    },
}


genreteInvoice(invoice)

function genreteInvoice(invoiceproducts){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("-------------- ")

    for(let index in invoice.products){
        let [productName, produrctPrice ] = invoice.products[index]
        console.log(`- ${productName}: R$ ${produrctPrice}`)
    }
    
    
}
