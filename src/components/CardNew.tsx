import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Product {
    images: string[];
    name: string;
    description: string;
    sizes: string[];
    price: string;
}

const StyledCard = styled.div`
`;

const StyledCarousel = styled(Carousel)`
`;

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
`;

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <StyledCard>
            <StyledCarousel showArrows={true} showThumbs={false} showStatus={false}>
                {product.images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={product.name} />
                    </div>
                ))}
            </StyledCarousel>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">
                    {product.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {product.sizes.map((size, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {size}
                    </span>
                ))}
            </div>
            <div className="px-6 py-4 flex items-center">
                <StyledCheckbox className="mr-2" /> Available
                <span className="text-xl">{product.price}</span>
            </div>
        </StyledCard>
    );
};

export default ProductCard;
