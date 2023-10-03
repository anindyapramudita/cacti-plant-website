import { FC } from "react";
import { ICollectionCardProps } from "./collection-card.interface";
import { StylesWrapper } from "./collection-card.styles";
import { IconButton } from "../icon-button";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { imagePlaceholder } from "@/shared/utils/image-placeholder";
import Link from "next/link";

export const CollectionCard: FC<ICollectionCardProps> = ({
  title,
  image,
  savedPlants,
  onDeleteClick,
  ...props
}) => {
  return (
    <StylesWrapper {...props}>
      <Link className="image-wrapper" href="">
        <div className="image-container">
          <Image
            src={image.src}
            alt={image.alt}
            sizes="(max-width: 768px) 100vw, (max-width: 992px) 33vw, 20vw"
            fill={true}
            blurDataURL={imagePlaceholder}
            placeholder="blur"
            style={{ objectFit: "cover" }}
            className="plant-image"
            priority={true}
          />
        </div>
      </Link>
      <IconButton
        icon={<AiOutlineClose size={15} className="delete-icon" />}
        onClick={onDeleteClick}
        className="delete-button"
      />
      <p className="collection-title">{title}</p>
      <p className="plants-saved-title">{savedPlants} saved</p>
    </StylesWrapper>
  );
};
