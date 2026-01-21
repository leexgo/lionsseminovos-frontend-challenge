export interface CatalogCar {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: string;
  image: string;
}

export interface CarCardProps {
  data: CatalogCar;
}

export const catalogDb = [
  {
    id: 1,
    brand: "RENAULT",
    model: "LOGAN LIFE10MT",
    year: 2022,
    price: "80.000",
    image:
      "https://imagecdn.app/v2/image/https%3A%2F%2Fdmmfmlu2mykln.cloudfront.net%2Fveiculos%2FCB5E00A1C1E94A9AB18A30CED138765C%2F367f628628b849a9b534f9b7f737df9f_FrentePlaqueta.webp?width=600%22",
  },
  {
    id: 2,
    brand: "HONDA",
    model: "ADV 150",
    year: 2022,
    price: "30.000",
    image:
      "https://imagecdn.app/v2/image/https%3A%2F%2Fdmmfmlu2mykln.cloudfront.net%2Fveiculos%2F5312CF6457EA45B1B053A1557408E41D%2F239c835ecf354e8091f7d04cadec0f0f_FrentePlaqueta.webp?width=600",
  },
  {
    id: 3,
    brand: "CHEVROLET",
    model: "ONIX PLUS 10TAT LTZ",
    year: 2023,
    price: "90.000",
    image:
      "https://imagecdn.app/v2/image/https%3A%2F%2Fdmmfmlu2mykln.cloudfront.net%2Fveiculos%2F797EAF2E22CE412CADFE1DF2206E4288%2Fb803ba611823446f8c57727bad60f70b_FrentePlaqueta.webp?width=600",
  },
  {
    id: 4,
    brand: "FIAT",
    model: "MOBI LIKE",
    year: 2020,
    price: "35.0000",
    image:
      "https://imagecdn.app/v2/image/https%3A%2F%2Fdmmfmlu2mykln.cloudfront.net%2Fveiculos%2F3F3CD2023B3A40F482121E4899F664E8%2F7977bbbb389a40fda61e28ec6811534e_FrentePlaqueta.webp?width=600",
  },
  {
    id: 5,
    brand: "FIAT",
    model: "ARGO 1.0",
    year: 2023,
    price: "90.000",
    image:
      "https://imagecdn.app/v2/image/https%3A%2F%2Fdmmfmlu2mykln.cloudfront.net%2Fveiculos%2F18A2AAE42026479998FB2990CFC9DFE5%2F235dfc7b2b8148baad2ac130007bfd12_FrentePlaqueta.webp?width=600",
  },
  {
    id: 6,
    brand: "PEUGEOT",
    model: "PEUGEOT 208 LIKE MT",
    year: 2023,
    price: "82.000",
    image:
      "https://imagecdn.app/v2/image/https%3A%2F%2Fdmmfmlu2mykln.cloudfront.net%2Fveiculos%2F6423A938661040A6A49A016F5BF33D25%2F6153f4d2e49f4546a300a4452ee7ed60_FrentePlaqueta.webp?width=600",
  },
];
