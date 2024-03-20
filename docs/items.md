# Items정리

## page items

### tour 메인

1. pageState = {
   isClick: false,
   state: false,
   page_type: "tour",
   page_index: searchParams.get("page_index") || "1",
   search_word: searchParams.get("search_word") || "",
   region: Array.from(new Set(searchParams.getAll("region"))) || [],
   category: Array.from(new Set(searchParams.getAll("category"))) || [],
   }

## component items

### scroll
