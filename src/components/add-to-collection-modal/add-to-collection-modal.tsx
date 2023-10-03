import { FC, useState } from "react";
import {
  FormType,
  IAddToCollectionModalProps,
  defaultForm,
} from "./add-to-collection.interface";
import { Modal } from "@/components/modal";
import { StylesWrapper } from "./add-to-collection.styles";
import { Button } from "../button";
import { Input } from "../input";
import { useForm } from "react-hook-form";
import { IconButton } from "../icon-button";
import { BsArrowLeftShort } from "react-icons/bs";
import { createNewCollections } from "@/shared/utils/create-new-collections";
import { imagePlaceholder } from "@/shared/utils/image-placeholder";
import Image from "next/image";
import { addToCollection } from "@/shared/utils/add-to-collection";
import {
  ADD_NEW_COLLECTION,
  CLEAR,
  CREATE,
  CREATE_NEW_COLLECTION,
  MAX_20_CHARACTERS,
  NO_COLLECTION_YET,
} from "@/shared/utils/constants";

export const AddToCollectionModal: FC<IAddToCollectionModalProps> = ({
  open = true,
  onClose,
  plantId,
  userId,
  collections,
  onUpdateToast,
}) => {
  const [isNewCollection, setIsNewCollection] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isDirty },
  } = useForm<FormType>({ defaultValues: defaultForm });

  const handleClose = () => {
    onClose();
    setIsNewCollection(false);
    reset();
  };

  const collectionName = watch("collectionTitle");

  const onSubmit = handleSubmit(async (data) => {
    const response = await createNewCollections(
      userId,
      plantId,
      data.collectionTitle
    );
    if (response.success) {
      onUpdateToast(response.message, "success");
      handleClose();
    } else {
      onUpdateToast(response.message, "error");
    }
  });

  const handleAddToCollection = async (collectionId: string) => {
    try {
      const response = await addToCollection(userId, collectionId, plantId);
      if (response.success) {
        handleClose();
        onUpdateToast(response.message, "success");
      } else {
        onUpdateToast(response.message, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      {isNewCollection ? (
        <StylesWrapper isNewCollection={isNewCollection} onSubmit={onSubmit}>
          <IconButton
            className="back-button"
            type="button"
            icon={<BsArrowLeftShort size={20} />}
            onClick={() => setIsNewCollection(false)}
          />
          <div className="collection-modal-heading">
            <p>{CREATE_NEW_COLLECTION}</p>
          </div>
          <div className="new-collection-input-content" onSubmit={onSubmit}>
            <Input
              id="new-collection-input"
              label="Collection Name"
              name="collectionTitle"
              register={register}
              maxLength={20}
            />
            <p className="collection-name-characters">
              {collectionName.length}
              {MAX_20_CHARACTERS}
            </p>
          </div>
          <div className="collection-modal-footer">
            <Button
              color="secondary"
              variant="outlined"
              type="button"
              onClick={() => reset()}
              disabled={!isDirty}
            >
              {CLEAR}
            </Button>
            <Button type="submit" disabled={!isDirty}>
              {CREATE}
            </Button>
          </div>
        </StylesWrapper>
      ) : (
        <StylesWrapper isNewCollection={isNewCollection}>
          <div className="collection-modal-heading">
            <p>{ADD_NEW_COLLECTION}</p>
          </div>
          <div className="collection-modal-content">
            {collections.length > 0 ? (
              collections.map((collection, index) => (
                <div key={index}>
                  <button
                    type="button"
                    className="collection-container"
                    onClick={() => handleAddToCollection(collection._id)}
                  >
                    <Image
                      src={collection.image.src}
                      alt={collection.image.alt}
                      sizes="(max-width: 768px) 100vw, (max-width: 992px) 33vw, 20vw"
                      fill={true}
                      blurDataURL={imagePlaceholder}
                      placeholder="blur"
                      style={{ objectFit: "cover" }}
                      className="plant-image"
                      priority={true}
                    />
                  </button>
                  <p className="collection-title">{collection.title}</p>
                </div>
              ))
            ) : (
              <p className="no-collection-text">{NO_COLLECTION_YET}</p>
            )}
          </div>
          <div className="collection-modal-footer">
            <Button
              fullWidth
              onClick={() => setIsNewCollection(true)}
              type="button"
            >
              {CREATE_NEW_COLLECTION}
            </Button>
          </div>
        </StylesWrapper>
      )}
    </Modal>
  );
};
