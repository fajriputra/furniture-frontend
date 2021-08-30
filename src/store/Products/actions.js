import debounce from "debounce-promise";
import {
  SUCCESS_FETCHING_PRODUCT,
  START_FETCHING_PRODUCT,
  ERROR_FETCHING_PRODUCT,
  SET_PAGE,
  SET_KEYWORD,
  SET_CATEGORY,
  SET_TAGS,
  TOGGLE_TAG,
  PREV_PAGE,
  NEXT_PAGE,
} from "./constants";
import { getProducts } from "helpers/api/product";

// beri jeda sebelum fetching data
let debouncedFetchProducts = debounce(getProducts, 1000);

export const fetchProducts = (category = "All") => {
  return async (dispatch, getState) => {
    // menugaskan ke Redux store dengan pertanda fetching data dimulai
    dispatch(startFetchingProducts());

    // getState() untuk mendapatkan nilai state terbaru dari redux store
    let perPage = getState().products.perPage || 6;
    let currentPage = getState().products.currentPage || 1;
    let tags = getState().products.tags || [];
    let keyword = getState().products.keyword || "";

    const params = {
      limit: perPage,
      skip: currentPage * perPage - perPage,
      q: keyword,
      tags,
      category,
    };

    try {
      let {
        data: { data, count },
      } = await debouncedFetchProducts(params);

      if (category && category !== "All") {
        data = data?.filter((product) => {
          return product.category.name.toLowerCase() === category.toLowerCase();
        });
      }

      dispatch(successFetchingProducts({ data, count }));
    } catch (err) {
      dispatch(errorFetchingProducts());
    }
  };
};

export const startFetchingProducts = () => {
  return {
    type: START_FETCHING_PRODUCT,
  };
};

export const successFetchingProducts = (payload) => {
  return {
    type: SUCCESS_FETCHING_PRODUCT,
    ...payload,
  };
};

export const errorFetchingProducts = () => {
  return {
    type: ERROR_FETCHING_PRODUCT,
  };
};

export const setPage = (number = 1) => {
  return {
    type: SET_PAGE,
    currentPage: number,
  };
};

export const nextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const prevPage = () => {
  return {
    type: PREV_PAGE,
  };
};

// menentukan keyword
export const setKeyword = (keyword) => {
  return {
    type: SET_KEYWORD,
    keyword,
  };
};

// set kategori produk aktif
export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    category: category,
  };
};

// set tags produk aktif
export const setTags = (tags) => {
  return {
    type: SET_TAGS,
    tags,
  };
};

export const clearTags = () => {
  return setTags([]);
};

// set toggle tag aktif
export const toggleTag = (tag) => {
  return {
    type: TOGGLE_TAG,
    tag,
  };
};
