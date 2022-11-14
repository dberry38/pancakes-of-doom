// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category - done
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products - done
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag) - done
Product.belongsToMany(Tag, {
  foreignKey: 'tag_id',
});

// Tags belongToMany Products (through ProductTag) - done
Tag.belongsToMany(Product, {
  foreignKey: 'product_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
