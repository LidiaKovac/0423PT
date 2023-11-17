const products = [
  {
    name: "ÖSTANÖ",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/oestanoe-sedia-verde-intenso-remmarn-verde-intenso__1209972_pe909498_s5.jpg",
    id: "50568900",
    lastChance: false,
    colors: [{ name: "verde", id: "10033", hex: "3b7d22" }],
    tagText: "Novità",
    ratingValue: 4.8,
    ratingCount: 17,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 19.95,
      current: {
        prefix: "€",
        wholeNumber: "19",
        separator: ",",
        decimals: "95",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
      tagText: "Novità",
    },
  },
  {
    name: "LIDÅS",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/lidas-sedia-bianco-sefast-bianco__1106351_pe868690_s5.jpg",
    id: "s39481381",
    lastChance: false,
    colors: [{ name: "bianco", id: "10156", hex: "ffffff" }],
    badge: { type: "TOP_SELLER", text: "Il più venduto" },
    ratingValue: 4.4,
    ratingCount: 68,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 35,
      current: {
        prefix: "€",
        wholeNumber: "35",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
    },
  },
  {
    name: "ADDE",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/adde-sedia-bianco__0728280_pe736170_s5.jpg",
    id: "10219178",
    lastChance: false,
    colors: [{ name: "bianco", id: "10156", hex: "ffffff" }],
    ratingValue: 4.5,
    ratingCount: 554,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 15,
      current: {
        prefix: "€",
        wholeNumber: "15",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
    },
  },
  {
    name: "MATCHSPEL",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/matchspel-sedia-da-gaming-bomstad-nero__0985645_pe816716_s5.jpg",
    id: "80507608",
    lastChance: false,
    colors: [{ name: "nero", id: "10139", hex: "000000" }],
    badge: { type: "TOP_SELLER", text: "Il più venduto" },
    ratingValue: 4.6,
    ratingCount: 43,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 189,
      current: {
        prefix: "€",
        wholeNumber: "189",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
    },
  },
  {
    name: "BERGMUND",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/bergmund-sedia-effetto-rovere-hallarp-beige__0926594_pe789377_s5.jpg",
    id: "s39388081",
    lastChance: false,
    colors: [
      { name: "beige", id: "10003", hex: "f4f3d7" },
      { name: "marrone", id: "10019", hex: "814820" },
    ],
    ratingValue: 4.6,
    ratingCount: 69,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 75,
      current: {
        prefix: "€",
        wholeNumber: "75",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
    },
  },
  {
    name: "TEODORES",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/teodores-sedia-bianco__0727344_pe735616_s5.jpg",
    id: "90350937",
    lastChance: false,
    colors: [{ name: "bianco", id: "10156", hex: "ffffff" }],
    ratingValue: 4.7,
    ratingCount: 331,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 35,
      current: {
        prefix: "€",
        wholeNumber: "35",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
    },
  },
  {
    name: "FANBYN",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/fanbyn-sedia-bianco-da-interno-esterno__0587379_pe672586_s5.jpg",
    id: "s49228474",
    lastChance: false,
    colors: [
      { name: "beige", id: "10003", hex: "f4f3d7" },
      { name: "bianco", id: "10156", hex: "ffffff" },
    ],
    ratingValue: 4.4,
    ratingCount: 11,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 75,
      current: {
        prefix: "€",
        wholeNumber: "75",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
    },
  },
  {
    name: "KARLPETTER",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/karlpetter-sedia-gunnared-verde-chiaro-sefast-bianco__1106897_pe868859_s5.jpg",
    id: "s29481447",
    lastChance: false,
    colors: [
      { name: "verde", id: "10033", hex: "3b7d22" },
      { name: "bianco", id: "10156", hex: "ffffff" },
    ],
    ratingValue: 4.7,
    ratingCount: 6,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 55,
      current: {
        prefix: "€",
        wholeNumber: "55",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
    },
  },
  {
    name: "JANINGE",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/janinge-sedia-bianco__0728156_pe736116_s5.jpg",
    id: "00246078",
    lastChance: false,
    colors: [{ name: "bianco", id: "10156", hex: "ffffff" }],
    badge: { type: "TOP_SELLER", text: "Il più venduto" },
    ratingValue: 4.6,
    ratingCount: 445,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 45,
      current: {
        prefix: "€",
        wholeNumber: "45",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
    },
  },
  {
    name: "ODGER",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/odger-sedia-antracite__0739669_pe741828_s5.jpg",
    id: "50457313",
    lastChance: false,
    colors: [{ name: "grigio", id: "10028", hex: "949494" }],
    ratingValue: 4.5,
    ratingCount: 252,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 70,
      current: {
        prefix: "€",
        wholeNumber: "70",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
    },
  },
  {
    name: "KÄTTIL",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/kaettil-sedia-nero-knisa-grigio-scuro__1016337_pe830330_s5.jpg",
    id: "40500345",
    lastChance: false,
    colors: [
      { name: "grigio", id: "10028", hex: "949494" },
      { name: "nero", id: "10139", hex: "000000" },
    ],
    ratingValue: 4.4,
    ratingCount: 27,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 49.95,
      current: {
        prefix: "€",
        wholeNumber: "49",
        separator: ",",
        decimals: "95",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
    },
  },
  {
    name: "STEFAN",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/stefan-sedia-bianco__0456421_pe604075_s5.jpg",
    id: "90339233",
    lastChance: false,
    colors: [{ name: "bianco", id: "10156", hex: "ffffff" }],
    ratingValue: 4.4,
    ratingCount: 460,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 40,
      current: {
        prefix: "€",
        wholeNumber: "40",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
    },
  },
  {
    name: "KRYLBO",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/krylbo-sedia-tonerud-beige-scuro__1208495_pe908606_s5.jpg",
    id: "60566745",
    lastChance: false,
    colors: [{ name: "beige", id: "10003", hex: "f4f3d7" }],
    tagText: "Novità",
    ratingValue: 5,
    ratingCount: 2,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 65,
      current: {
        prefix: "€",
        wholeNumber: "65",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
      tagText: "Novità",
    },
  },
  {
    name: "TOSSBERG",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/tossberg-sedia-metallo-nero-grigio__0661921_pe712124_s5.jpg",
    id: "90435324",
    lastChance: false,
    colors: [
      { name: "grigio", id: "10028", hex: "949494" },
      { name: "nero", id: "10139", hex: "000000" },
    ],
    ratingValue: 4.6,
    ratingCount: 31,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 139,
      current: {
        prefix: "€",
        wholeNumber: "139",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
    },
  },
  {
    name: "STEIN",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/stein-sedia-trasparente__0773405_pe756294_s5.jpg",
    id: "50403669",
    lastChance: false,
    colors: [{ name: "bianco", id: "10156", hex: "ffffff" }],
    tagText: "Nuovo prezzo più basso",
    ratingValue: 4.6,
    ratingCount: 338,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 55,
      current: {
        prefix: "€",
        wholeNumber: "55",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      previous: {
        prefix: "€",
        wholeNumber: "70",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
      prevPriceLabel: "Prezzo precedente",
      validFrom: "2023-11-01",
      validTo: "2024-07-31",
      tagText: "Nuovo prezzo più basso",
    },
  },
  {
    name: "KLINTEN",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/klinten-sedia-marrone-kilanda-beige-chiaro__1156101_pe886899_s5.jpg",
    id: "00546878",
    lastChance: false,
    colors: [
      { name: "beige", id: "10003", hex: "f4f3d7" },
      { name: "marrone", id: "10019", hex: "814820" },
    ],
    ratingValue: 4.7,
    ratingCount: 3,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 75,
      current: {
        prefix: "€",
        wholeNumber: "75",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
    },
  },
  {
    name: "GUNDE",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/gunde-sedia-pieghevole-bianco__0728314_pe736185_s5.jpg",
    id: "60217799",
    lastChance: false,
    colors: [{ name: "bianco", id: "10156", hex: "ffffff" }],
    badge: { type: "TOP_SELLER", text: "Il più venduto" },
    ratingValue: 4.4,
    ratingCount: 633,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 12,
      current: {
        prefix: "€",
        wholeNumber: "12",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
    },
  },
  {
    name: "MÅNHULT",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/manhult-sedia-nero-hakebo-grigio-verde__1156110_pe886912_s5.jpg",
    id: "00547057",
    lastChance: false,
    colors: [
      { name: "grigio", id: "10028", hex: "949494" },
      { name: "verde", id: "10033", hex: "3b7d22" },
      { name: "nero", id: "10139", hex: "000000" },
    ],
    ratingValue: 5,
    ratingCount: 4,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 60,
      current: {
        prefix: "€",
        wholeNumber: "60",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
    },
  },
  null,
  {
    name: "SANDSBERG",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/sandsberg-sedia-nero-mordente-marrone__1068130_pe852977_s5.jpg",
    id: "70412960",
    lastChance: false,
    colors: [
      { name: "marrone", id: "10019", hex: "814820" },
      { name: "nero", id: "10139", hex: "000000" },
    ],
    ratingValue: 4.3,
    ratingCount: 51,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 25,
      current: {
        prefix: "€",
        wholeNumber: "25",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
    },
  },
  {
    name: "TOBIAS",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/tobias-sedia-trasparente-cromato__0727342_pe735614_s5.jpg",
    id: "80349671",
    lastChance: false,
    colors: [
      { name: "grigio", id: "10028", hex: "949494" },
      { name: "bianco", id: "10156", hex: "ffffff" },
    ],
    ratingValue: 4.2,
    ratingCount: 195,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 85,
      current: {
        prefix: "€",
        wholeNumber: "85",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
    },
  },
  {
    name: "STOCKHOLM",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/stockholm-sedia-noce__0753719_pe747693_s5.jpg",
    id: "60518226",
    lastChance: false,
    colors: [
      { name: "marrone", id: "10019", hex: "814820" },
      { name: "nero", id: "10139", hex: "000000" },
    ],
    salesPrice: {
      currencyCode: "EUR",
      numeral: 169,
      current: {
        prefix: "€",
        wholeNumber: "169",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      discount: "",
    },
  },
  {
    name: "TEODORES",
    mainImageUrl:
      "https://www.ikea.com/it/it/images/products/teodores-sedia-bianco__1082708_pe858788_s5.jpg",
    id: "s19399839",
    lastChance: false,
    colors: [{ name: "bianco", id: "10156", hex: "ffffff" }],
    ratingValue: 4.6,
    ratingCount: 8,
    salesPrice: {
      currencyCode: "EUR",
      numeral: 140,
      current: {
        prefix: "€",
        wholeNumber: "140",
        separator: "",
        decimals: "",
        suffix: "",
        isRegularCurrency: false,
      },
      priceUnit: "4 pz.",
      unitText: "pz.",
      discount: "",
    },
  },
];
// input type range prezzo
// barra di ricerca
// paginazione
// carrello
// stelline
// pannello laterale con selezione

const container = document.querySelector(".store__wrap");
for (let i = 0; i < products.length; i++) {
  // if(i < 10) {
  //   "0" + i
  // } else i
  //condizione ? cosa fare : altrimenti
  // i < 10 ? "0" + i : i
  container.innerHTML += `
    <div class="card" onclick="select(event)" >
        <img src="${products[i].mainImageUrl}" />
        <h3>
            <span class="card__title-number">${i < 10 ? "0" + i : i}.</span> 
            ${products[i].name}
        </h3>
        <div class="card__body">

          <button><ion-icon name="cart-outline"></ion-icon> ${products[
            i
          ].salesPrice.numeral.toFixed(2)}${
    products[i].salesPrice.currencyCode
  }</button>
        </div>
      </div>`;
}

const select = function (clickEvent) {
  // clickEvent.target card che ho cliccato
  console.log(clickEvent.target);
  const selected = document.querySelectorAll(".selected");
  for (let i = 0; i < selected.length; i++) {
    selected[i].classList.remove("selected");
  }

  clickEvent.target.closest(".card").classList.add("selected");
};
