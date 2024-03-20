# Items정리

## page items

### tour 메인

- pageState
  1.  isClick: false
  2.  state: false
  3.  page_type: "tour"
  4.  page_index: searchParams.get("page_index") || "1"
  5.  search_word: searchParams.get("search_word") || ""
  6.  region: Array.from(new Set(searchParams.getAll("region"))) || []
  7.  category: Array.from(new Set(searchParams.getAll("category"))) || []

## component items

### scroll
