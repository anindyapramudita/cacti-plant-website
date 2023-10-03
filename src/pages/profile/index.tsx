import { Button } from "@/components/button";
import { UserProtectedRoute } from "@/components/protected-route";
import { useSession } from "next-auth/react";
import { StylesWrapper } from "./index.styles";
import { ImageCard } from "@/components/image-card";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getLikedPlants } from "@/shared/utils/get-liked-plants";
import { SimpleCard } from "@/components/simple-card";
import { Collection, PlantDataType } from "@/shared/type/data-types";
import { likePlant } from "@/shared/utils/like-plant";
import { getCollections } from "@/shared/utils/get-collections";
import { CollectionCard } from "@/components/collection-card";
import { deleteCollection } from "@/shared/utils/delete-collection";
import { ConfirmationModal } from "@/components/confirmation-modal";
import { ToastType } from "@/components/toast/toast.interface";
import {
  COLLECTION,
  EDIT_PROFILE,
  LIKED,
  NOT_LOGGED_IN,
  SETTINGS,
} from "@/shared/utils/constants";

type ProfileProp = {
  onCollectionClick: (
    plantId: string,
    userId: string,
    collection: Collection[]
  ) => void;
  onUpdateToast: (message: string, type: ToastType) => void;
};

export default function ProfilePage({
  onCollectionClick,
  onUpdateToast,
}: ProfileProp) {
  const { data: session } = useSession();

  const [currentTab, setCurrentTab] = useState<"Collection" | "Liked">("Liked");
  const [likedPlantsId, setLikedPlantsId] = useState<string[]>([]);
  const [likedPlants, setLikedPlants] = useState<PlantDataType[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState<boolean>(false);
  const [collectionToDelete, setCollectionToDelete] = useState<string>("");
  const [collectionNameToDelete, setCollectionNameToDelete] =
    useState<string>("");
  const [collectionModalOpen, setCollectionModalOpen] =
    useState<boolean>(false);

  const handleGetLikedPlants = useCallback(async () => {
    try {
      if (session && session.user.email && currentTab) {
        const likedPlantsArray = await getLikedPlants(session.user._id);
        if (likedPlantsArray) {
          setLikedPlants(likedPlantsArray.likedPlants);
          setLikedPlantsId(likedPlantsArray.likedPlantsId);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [session, currentTab]);

  const handleGetCollections = useCallback(async () => {
    try {
      if (session && session.user._id && collectionModalOpen) {
        const response = await getCollections(session.user._id);
        if (response) {
          setCollections(response.collections);
          setCollectionModalOpen(false);
          return response.collections;
        }
      } else if (session && session.user._id) {
        const response = await getCollections(session.user._id);
        if (response) {
          setCollections(response.collections);
          return response.collections;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [session, collectionModalOpen]);

  const handleLikeClick = useCallback(
    async (plantId: string) => {
      try {
        if (session) {
          const userId = session.user._id;
          const response = await likePlant(userId, plantId);
          if (response.success) {
            handleGetLikedPlants();
            onUpdateToast(response.message, "success");
            return true;
          } else {
            onUpdateToast(response.message, "error");
            return false;
          }
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    [session, handleGetLikedPlants, onUpdateToast]
  );

  const handleDeleteConfirmation = (
    collectionId: string,
    collectionTitle: string
  ) => {
    setConfirmationModalOpen(true);
    setCollectionToDelete(collectionId);
    setCollectionNameToDelete(collectionTitle);
  };

  const handleDeleteCollection = useCallback(
    async (collectionId: string) => {
      try {
        if (session) {
          const userId = session.user._id;
          const response = await deleteCollection(userId, collectionId);
          if (response.success) {
            handleGetCollections();
            handleCloseModal();
            onUpdateToast(response.message, "success");
          } else {
            onUpdateToast(response.message, "error");
            console.log("error");
          }
        } else {
          onUpdateToast(NOT_LOGGED_IN, "error");
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
    },
    [session, handleGetCollections, onUpdateToast]
  );

  const handleCloseModal = () => {
    setCollectionToDelete("");
    setConfirmationModalOpen(false);
  };

  useEffect(() => {
    handleGetLikedPlants();
    handleGetCollections();
  }, [handleGetLikedPlants, handleGetCollections]);

  const renderImages = useMemo(() => {
    const handleCollectionClick = async (plantId: string) => {
      try {
        setCollectionModalOpen(true);
        const newCollection = await handleGetCollections();
        onCollectionClick(plantId, session?.user._id as string, newCollection);
      } catch (error) {
        console.log(error);
      }
    };

    if (currentTab == "Liked") {
      if (likedPlants.length > 0) {
        return likedPlants.map((plant) => (
          <SimpleCard
            plant={plant}
            key={plant._id}
            onLikeClick={handleLikeClick}
            id={plant._id}
            isLiked={likedPlantsId.includes(plant._id)}
            onCollectionClick={handleCollectionClick}
          />
        ));
      } else {
        return <p className="no-image-text">No liked images yet</p>;
      }
    } else {
      if (collections.length > 0) {
        return collections.map((collection) => (
          <CollectionCard
            key={collection._id}
            title={collection.title}
            image={collection.image}
            savedPlants={collection.saved}
            onDeleteClick={() =>
              handleDeleteConfirmation(collection._id, collection.title)
            }
          />
        ));
      } else {
        return <p className="no-collection-text">No collections yet</p>;
      }
    }
  }, [
    collections,
    currentTab,
    handleLikeClick,
    likedPlants,
    likedPlantsId,
    onCollectionClick,
    session?.user._id,
    handleGetCollections,
  ]);

  return (
    <UserProtectedRoute>
      <StylesWrapper currentTab={currentTab}>
        <div className="profile-heading">
          <div className="profile-picture-wrapper">
            <ImageCard
              src={session?.user.image || ""}
              alt="profile-picture"
              width={125}
              height={125}
              className="profile-picture"
            />
          </div>
          <h1 className="user-name-heading">{session?.user.name}</h1>
          <div className="button-wrapper">
            <Button variant="outlined" color="secondary" size="small">
              {SETTINGS}
            </Button>
            <Button variant="outlined" color="secondary" size="small">
              {EDIT_PROFILE}
            </Button>
          </div>
        </div>
        <div className="profile-tab">
          <fieldset id="profile-category-tab" className="profile-category-tab">
            <input
              id="collection-tab"
              type="radio"
              name="profile-category-tab"
              className="category-tab"
              hidden
              onClick={() => setCurrentTab("Collection")}
            />
            <label htmlFor="collection-tab" className="category-tab-label">
              {COLLECTION}
            </label>
            <input
              id="liked-tab"
              type="radio"
              name="profile-category-tab"
              className="category-tab"
              hidden
              onClick={() => setCurrentTab("Liked")}
            />
            <label htmlFor="liked-tab" className="category-tab-label">
              {LIKED}
            </label>
          </fieldset>
          <div className="tab-underline" />
        </div>
        <div className="pictures-wrapper">{renderImages}</div>
        <ConfirmationModal
          title="Delete this collection"
          text={`"${collectionNameToDelete}" will be permanently deleted`}
          onCancelClick={handleCloseModal}
          onActionClick={() => handleDeleteCollection(collectionToDelete)}
          open={confirmationModalOpen}
          onClose={handleCloseModal}
          cancelButtonLabel="Cancel"
          actionButtonLabel="Delete"
        />
      </StylesWrapper>
    </UserProtectedRoute>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
