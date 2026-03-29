SELECT
product_name,
year,
price
FROM sales
INNER JOIN product
    ON product.product_id = sales.product_id