export class PaginationHelper {
  constructor(public items: any[], public pageNumber: number) {}

  itemCount() {
    return this.items.length;
  }

  pageCount() {
    return Math.ceil(this.itemCount() / this.pageNumber);
  }

  pageItemCount(targetPage: number) {
    let itemsOrganizedByPages: Record<number, any[]> = {};

    let currentPage = 0;

    for (let i = 0; this.items.length > i; i++) {
      if (!itemsOrganizedByPages[currentPage]) {
        itemsOrganizedByPages[currentPage] = [this.items[i]];
      } else {
        itemsOrganizedByPages[currentPage].push(this.items[i]);
      }
      if (itemsOrganizedByPages[currentPage].length === this.pageNumber) {
        if (currentPage === targetPage)
          return itemsOrganizedByPages[currentPage].length;
        currentPage++;
      }
    }

    if (!itemsOrganizedByPages[targetPage]) return -1;

    return itemsOrganizedByPages[currentPage].length;
  }

  pageIndex(itemIndex: number) {
    if (!this.items[itemIndex]) return -1;
    let i = 0;
    let page = 0;
    let pageBreak = 0;

    while (i < this.items.length) {
      if (pageBreak === this.pageNumber - 1) {
        pageBreak = 0;
        page++;
      }
      if (i === itemIndex) {
        return page;
      }
      i++;
      pageBreak++;
    }
  }
}
