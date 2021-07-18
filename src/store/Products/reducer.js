import {
  START_FETCHING_PRODUCT,
  ERROR_FETCHING_PRODUCT,
  SUCCESS_FETCHING_PRODUCT,
  SET_PAGE,
  SET_CATEGORY,
  SET_KEYWORD,
  SET_TAGS,
  NEXT_PAGE,
  PREV_PAGE,
  TOGGLE_CATEGORY,
  TOGGLE_TAG,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [], // menyimpan data products
  currentPage: 1, // set page aktif dgn default 1
  totalItems: -1, // total item / produk, default -1 alias belum diketahui
  perPage: 6, // menampilkan item perPage, default 6
  keyword: "", // untuk filtering product berdasarkan nama
  category: [], // category yang sedang aktif
  tags: [], // tags yang sedang aktif
  status: statuslist.idle, // status req data ke server
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // memulai fetching produk
    case START_FETCHING_PRODUCT:
      return { ...state, status: statuslist.process };
    // success fetching
    case SUCCESS_FETCHING_PRODUCT:
      return {
        ...state,
        data: action.data,
        totalItems: action.count,
        status: statuslist.success,
      };
    // error fetching
    case ERROR_FETCHING_PRODUCT:
      return { ...state, status: statuslist.error };
    case SET_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_KEYWORD:
      return { ...state, keyword: action.keyword, category: [], tags: [] };
    case SET_CATEGORY:
      return {
        ...state,
        currentPage: 1,
        tags: [],
        category: action.category,
        keyword: "",
      };
    case SET_TAGS:
      return {
        ...state,
        tags: action.tags,
      };
    case TOGGLE_CATEGORY:
      // apakah tag yang dikirimkan oleh action (action.tag) saat ini sudah ada / aktif
      if (!state.category.includes(action.category)) {
        // jika tidak, set tags ke dalam state / aktifkan
        return {
          ...state,
          currentPage: 1,
          category: [...state.category, action.category],
        };
      } else {
        // jika terdapat pada state, filter tags berdasarkan tags yang aktif, lalu nonaktifkan/hapus
        return {
          ...state,
          currentPage: 1,
          category: state.category.filter((ctg) => ctg !== action.category),
        };
      }
    case TOGGLE_TAG:
      // apakah tag yang dikirimkan oleh action (action.tag) saat ini sudah ada / aktif
      if (!state.tags.includes(action.tag)) {
        // jika tidak, set tags ke dalam state / aktifkan
        return { ...state, currentPage: 1, tags: [...state.tags, action.tag] };
      } else {
        // jika terdapat pada state, filter tags berdasarkan tags yang aktif, lalu nonaktifkan/hapus
        return {
          ...state,
          currentPage: 1,
          tags: state.tags.filter((tag) => tag !== action.tag),
        };
      }

    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };

    case PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };

    default:
      return state;
  }
}
