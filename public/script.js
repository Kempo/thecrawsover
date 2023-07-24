/*<![CDATA[*/
(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "thecrawsover.myshopify.com",
      storefrontAccessToken: "728c988275dbba238ba7fdc0654d9af2",
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("collection", {
        id: "452342907162",
        node: document.getElementById("collection-component-1690158830520"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                  width: "calc(25% - 20px)",
                },
              },
              button: {
                ":hover": {
                  "background-color": "#da7821",
                },
                "background-color": "#f28525",
                ":focus": {
                  "background-color": "#da7821",
                },
                "border-radius": "2px",
              },
            },
            text: {
              button: "Add to cart",
            },
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                ":hover": {
                  "background-color": "#da7821",
                },
                "background-color": "#f28525",
                ":focus": {
                  "background-color": "#da7821",
                },
                "border-radius": "2px",
              },
            },
            text: {
              button: "Add to cart",
            },
          },
          option: {},
          cart: {
            styles: {
              button: {
                ":hover": {
                  "background-color": "#da7821",
                },
                "background-color": "#f28525",
                ":focus": {
                  "background-color": "#da7821",
                },
                "border-radius": "2px",
              },
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
          },
          toggle: {
            styles: {
              toggle: {
                "background-color": "#f28525",
                ":hover": {
                  "background-color": "#da7821",
                },
                ":focus": {
                  "background-color": "#da7821",
                },
              },
            },
          },
        },
      });
    });
  }
})();
/*]]>*/
