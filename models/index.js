// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// products belong to category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// categories contain many products
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// products belong to tags through ProductTTag
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});

// tags belong to products through ProductTag
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
