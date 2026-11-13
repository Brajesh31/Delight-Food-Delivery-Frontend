# Application Flows

## Route overview

The application uses React Router DOM with three declared paths:

| Route | Page | Current purpose |
|---|---|---|
| `/` | Home | Browse sample menu and select food categories |
| `/cart` | Cart | Review selected items and totals |
| `/orders` | PlaceOrder | Display delivery information fields and totals |

## Browse menu

1. The Home page initializes the selected category to `All`.
2. ExploreMenu renders the category list from `menu_list`.
3. Selecting a category updates local Home component state.
4. FoodDisplay filters `food_list` by category.
5. FoodDisplayItem renders the matching item and its add/remove controls.

Selecting the already active category resets the selection to `All`.

## Add and remove cart items

1. FoodDisplayItem reads the cart quantity from StoreContext.
2. When an item is not in the cart, its add control calls `addToCart(itemId)`.
3. The context increments the item quantity.
4. When the item is present, the quantity controls expose increment and decrement actions.
5. The cart page maps the local catalogue and renders entries with positive quantities.

The current remove operation decrements a quantity. The UI does not provide a separately verified remove-entire-item operation. Guarding against negative quantities and cleaning zero-count keys are worthwhile follow-up improvements.

## Cart totals

The context calculates subtotal by finding each selected item in the local food list and multiplying its price by the stored quantity. The cart and delivery screen add a fixed delivery fee of ₹50 when the subtotal is positive.

The values are demo data. They are not server-validated prices or a real delivery quote.

## Sign-in modal

Navbar opens the LoginSignup modal through App state. The modal toggles between Sign Up and Login presentation and locks body scrolling while mounted. No authentication provider, API request, password storage, session, or account creation exists in this repository.

## Delivery screen

The PlaceOrder component displays name, email, street, city, state, postal code, country, and phone inputs. The form currently has no submit handler, validation workflow, persistence, payment step, or order confirmation. Do not enter real personal data.

## Persistence and refresh

Cart state is stored in React component state only. A full page reload resets the cart. No localStorage, sessionStorage, IndexedDB, or backend persistence is currently implemented.
