export function getProducts(collection){
    return collection.find({}).toArray()
}

