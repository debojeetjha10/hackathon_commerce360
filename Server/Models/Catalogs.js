const mongoose = require('mongoose')

const subSchema = new mongoose.Schema({
    product: String,
    productCode: String,
    productchannel: String,
    productactive: String,
 });

const CatalogSchema = new mongoose.Schema({
    productname : String,
    attributes : [subSchema]

})

const CatalogModel = mongoose.model("catalogs", CatalogSchema)
module.exports = CatalogModel

