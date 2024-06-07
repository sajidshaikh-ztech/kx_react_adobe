// src/queries.js
import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query {
  categories(
    filters: {
      ids: {in: ["119"]}
      parent_id: {in: ["2"]}
    }
    pageSize:3
    currentPage: 1
  ) {
    total_count
    items {
      uid
      level
      name
      path
      children_count
      children {
        uid
        level
        name
        path
        children_count
        children {
          uid
          level
          name
          path
        }
      }
    }
    page_info {
      current_page
      page_size
      total_pages
    }
  }
}
`;
