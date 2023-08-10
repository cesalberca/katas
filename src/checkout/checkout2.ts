const productsList: Record<string, number> = {
  A: 50,
  B: 30,
  C: 20,
  D: 15,
};

const calcDiscount = ({
  products,
  product,
  promotionThreshold,
  discount,
}: {
  products: string;
  product: string;
  promotionThreshold: number;
  discount: number;
}) =>
  Math.floor(
    products.split("").filter((p) => p === product).length / promotionThreshold
  ) * discount;

export const checkout = (products: string) => {
  if (!/[ABCD]/.test(products) && products.length > 0)
    throw new Error("unkonwn product");

  const discountA = calcDiscount({
    products,
    product: "A",
    promotionThreshold: 3,
    discount: 20,
  });

  const discountB = calcDiscount({
    products,
    product: "B",
    promotionThreshold: 2,
    discount: 15,
  });

  return (
    products.split("").reduce((acc, curr) => acc + productsList[curr], 0) -
    discountA -
    discountB
  );
};
