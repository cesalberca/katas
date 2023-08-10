import { PaginationHelper } from "./pagination-helper";

const buildPaginationgHelper = (list: any[], pageNumber: number) =>
  new PaginationHelper(list, pageNumber);

describe("item count", () => {
  it("should have zero items when there is no items", () => {
    const helper = buildPaginationgHelper([], 1);

    expect(helper.itemCount()).toBe(0);
  });

  it("give the length of all items", () => {
    const helper = buildPaginationgHelper(["a", "b", "c"], 1);

    expect(helper.itemCount()).toBe(3);
  });
});

describe("pages count", () => {
  it("should have 1 page when the number of items match the number expected per page", () => {
    const helper = buildPaginationgHelper(["a", "b", "c"], 1);

    expect(helper.pageCount()).toBe(3);
  });

  it("should have 2 pages", () => {
    const helper = buildPaginationgHelper(["a", "b", "c"], 2);

    expect(helper.pageCount()).toBe(2);
  });
});

describe("count the number of items per page", () => {
  it("should be -1 when the page does not exist", () => {
    const helper = buildPaginationgHelper(["a", "b", "c"], 2);

    expect(helper.pageItemCount(2)).toBe(-1);
  });

  it("should be able to find the number of items when there is only one page", () => {
    const helper = buildPaginationgHelper(["a", "b", "c"], 3);

    expect(helper.pageItemCount(0)).toBe(3);
  });

  it("should be able to find the number of items of the second page", () => {
    const helper = buildPaginationgHelper(["a", "b", "c", "d"], 3);

    expect(helper.pageItemCount(1)).toBe(1);
  });

  it("have two items on the second page", () => {
    const helper = buildPaginationgHelper(["a", "b", "c", "d", "e"], 3);

    expect(helper.pageItemCount(1)).toBe(2);
  });
});

describe("find page based on item index", () => {
  it("should find the first index on the first page", () => {
    const helper = buildPaginationgHelper(["a", "b", "c", "d", "e"], 3);

    expect(helper.pageIndex(0)).toBe(0);
  });

  it("should give -1 when the item does not exist", () => {
    const helper = buildPaginationgHelper(["a", "b", "c", "d", "e"], 3);

    expect(helper.pageIndex(10)).toBe(-1);
  });

  it("find the item on the second page", () => {
    const helper = buildPaginationgHelper(["a", "b"], 1);
    expect(helper.pageIndex(1)).toBe(1);
  });

  it("should pass the acceptance test", () => {
    const helper = buildPaginationgHelper(["a", "b", "c", "d", "e", "f"], 4);

    expect(helper.pageIndex(5)).toBe(1);
    expect(helper.pageIndex(2)).toBe(0);
    expect(helper.pageIndex(-10)).toBe(-1);
  });

  it("should pass edge case", () => {
    const helper = buildPaginationgHelper(
      Array.from({ length: 24 }, (_, i) => i + 1),
      10
    );

    expect(helper.pageIndex(22)).toBe(2);
  });
});
