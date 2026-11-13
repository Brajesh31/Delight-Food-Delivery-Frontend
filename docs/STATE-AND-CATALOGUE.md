# State and Catalogue Model

## Static catalogue

The catalogue and menu categories are exported from `src/assets/assets.js`.

### Menu category shape

Each menu category contains:
- `menu_name`: display label used for filtering.
- `menu_image`: imported local image asset.

The current categories are Salad, Rolls, Deserts, Sandwich, Cake, Pure Veg, Pasta, and Noodles. The spelling in the data is preserved as implemented.

### Food item shape

Each catalogue item contains:
- `_id`: string identifier.
- `name`: display name.
- `image`: imported local image.
- `price`: numeric sample price.
- `description`: display description.
- `category`: category label used by the Home page filter.

There are 32 sample food entries in the current asset module. Prices are frontend demo values, not trusted commercial prices.

## Context state

StoreContextProvider currently initializes:
- `cartItems`: object mapping food IDs to integer-like quantities.
- `deliveryFees`: fixed numeric value of 50.

It exposes:
- `food_list`
- `cartItems`
- `addToCart(itemId)`
- `removeFromCart(itemId)`
- `getTotalAmount()`
- `deliveryFees`

## Cart representation

Example conceptual state:

```js
{
  "1": 2,
  "5": 1
}
```

This represents two units of item ID 1 and one unit of item ID 5. The exact item names and prices are resolved from the local catalogue.

## Calculation

Subtotal is the sum of each selected item's sample price multiplied by its quantity. Delivery fee is displayed as a fixed amount and included only when subtotal is positive in the current page calculations.

The calculation is client-side and should never be used as the final amount for a real order. A production backend must resolve product IDs, current prices, availability, taxes, discounts, delivery fees, and totals independently.

## Known edge cases

- The decrement operation can write zero or negative quantities if called without a matching UI guard.
- A missing catalogue item can cause total calculation to fail when its price is accessed.
- Cart state is lost on refresh.
- No stock or availability check exists.
- There is no currency configuration or locale-aware formatting.
- No quantity limits are enforced.

These are current implementation limitations, not guarantees of production behavior.
