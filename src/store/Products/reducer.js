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
  data: [], // save products data
  currentPage: 1, // set page active and default 1
  totalItems: -1, // total items/products, default -1 as unknown
  perPage: 6, // display items per Page, default 6
  keyword: "", // filtering products based on keywords
  category: [], // currently active categories
  tags: [], // currently active tags
  status: statuslist.idle, // status req data to server
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // start fetching product
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
      // does the tag sent by action (action.category) currently exist/active
      if (!state.category.includes(action.category)) {
        // otherwise, set category to state /enable
        return {
          ...state,
          currentPage: 1,
          category: [...state.category, action.category],
        };
      } else {
        // if it exists in state, filter based on active category, then disable/delete
        return {
          ...state,
          currentPage: 1,
          category: state.category.filter((ctg) => ctg !== action.category),
        };
      }
    case TOGGLE_TAG:
      // does the tag sent by action (action.tag) currently exist/active
      if (!state.tags.includes(action.tag)) {
        // otherwise, set tags to state /enable
        return { ...state, currentPage: 1, tags: [...state.tags, action.tag] };
      } else {
        // if it exists in state, filter tags based on active category, then disable/delete
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
