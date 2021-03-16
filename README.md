
# ERP-trivial-Flask
Very basic ERP to learn Flask API, SQLAlchemy, Mashmallow, PostgreSQL.

### Problem Statement

#### Views:

-   Add/Edit/View Product
-   Add/Edit/View Location
-   Add/Edit/View ProductMovement

#### Report:

-   Balance quantity in each location

#### Use Cases:

-   Create 3/4 Products
-   Create 3/4 Locations
-   Make ProductMovements
    -   Move Product A to Location X
    -   Move Product B to Location X
    -   Move Product A from Location X to Location Y
    -   (make 20 such movements)
-   Get product balance in each Location in a grid view, with 3 columns: `Product`, `Warehouse`, `Qty`


#
### ScreenShots
1.Products
**![](https://lh4.googleusercontent.com/xberoj-b_E6B9DkxKXyHP_hSLMTFLfVNzDmr7kX7gXhmrJ7nuiPQE_aEXsWa4mDZpiz49XpQj_KFGMU7Iu2py4wmidPSfbsqAkEwwsZ1Xr-sIWK6fXWjGxCgtiTawojnG9fJCbLu)**
1.1. Add Product
**![](https://lh5.googleusercontent.com/pr5IxQlWJ7ULkktWrdwPoktGc2_6sDV7dcnzWyZH7fok-sXpKpk9RZVF4i2XYA1kKhDrgFwUZ-X7Ab8MMm1Ns3Gs2LPG0RDkCIU_moSI5_NylQu3vsOmZu9j6unTyoD0MSmiZ3XJ)**
1.2. UpdateProduct
**![](https://lh5.googleusercontent.com/5FE4SyCm_ZVnrmg-W9KmNFltelQhcAYBol5W1NsmynKmG6sKAX-14EoQTcuPsr71j3zC70x1x9xhiKQRQouME0P_VnJhEfnrJA_u0SoMeGtgtJoMaa6LCIO3Nwr7hMuctxRKlIqq)**
#

2. Locations
**![](https://lh6.googleusercontent.com/rhc-86vwDoENVCwUN37a1t6U_8zSLspnSpVLkb3GBYf37NwN4KRAfhCM_JuIo__zP5_XtzIB-E6MT3eCkIwKCbOB66M0nMGeaT7eZWRWI2xJ5hcvWFZQl2_PZHIqDoJ7XXAS5Wpx)**

#
3. Product Movements
**![](https://lh4.googleusercontent.com/BDqcNpGXJHHUcq3VRBSAbhT20YMpV4Dqjg7qXM9-LGNHWrLV8i9iXcfAPHvTF9qbMtVklSuUNHRf_er_7BKNNhf3Gxz3_aWI_SK5sqWUP3Y-0dBsUG3S5AClpWQiyZMUvU4avoD7)**

3.1 Add Product Movements
**![](https://lh6.googleusercontent.com/wJjvtAs0stNVOrn1jCNrlwE8xwEHw2DSfYXbgH_ZFZjpqzF-FT2cGMACDO_nIAwFWDj46IH8pCPV3pjqj4BFtqVTSDsD32wHJny-QHZP5g9lsHs4gPfiRIyLa2LIt7m3WvVsk8Ip)**
3.2 Update Product Movements
**![](https://lh6.googleusercontent.com/iIDOXJ4RxeIQT7Azl2FCN4bqpbBbvfPTN760qvAg0A_lQ3IF5wNMXJfuWGv24lmcKHpRiq2ODomrS5PeMrWgE49znuQGpgJ5P6_JPD4eRsK4h81HIu3LvtW3ZVM2_YrYhyg-tsGE)**
4. Report of Product movement by Location
**![](https://lh6.googleusercontent.com/z3Mka-UvL14Gd3HzGykQr6VVjMoHICfbHHSYLKkic6a-mKgajS1zLa71KKEHToUhVLbCWmCl8yNv7dUVqTP9VLFIX-XUDTfwyK-4VdAwjXtojprH7YVkBT8LPmbplRKtOwEaivvh)**