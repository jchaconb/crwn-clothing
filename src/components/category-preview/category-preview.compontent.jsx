import { useSelector } from "react-redux";

import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

import { selectCategoryIsLoading } from "../../store/categories/category.selector";

import Spinner from "../../components/spinner/spinner.component";
import { Fragment } from "react";

const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(selectCategoryIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryPreviewContainer>
          <h2>
            <Title to={title}>{title.toUpperCase()}</Title>
          </h2>
          <Preview>
            {products
              .filter((_, idx) => idx < 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </Preview>
        </CategoryPreviewContainer>
      )}
    </Fragment>
  );
};

export default CategoryPreview;
