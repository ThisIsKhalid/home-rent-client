import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";


import { SafeUser } from "@/types/common";
import { useAppDispatch } from "@/redux/hooks";
import { openLoginModal } from "@/redux/features/modals/useLoginModalSlice";

interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();
  const userId = currentUser?.id;
//   console.log(userId,'hello', listingId);

  const dispatch = useAppDispatch();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);
//   console.log(hasFavorited, 'hasFavorited');

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser || !userId) {
        return dispatch(openLoginModal());
      }

      try {
        let request;

        if (hasFavorited) {
          request = () =>
            axios.delete(
              `${process.env.NEXT_PUBLIC_SERVER_URL}/houses/favorites/${userId}/${listingId}`
            );
        } else {
          request = () =>
            axios.post(
              `${process.env.NEXT_PUBLIC_SERVER_URL}/houses/favorites/${userId}/${listingId}`
            );
        }

        await request();
        router.refresh();
        toast.success("Success");
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, hasFavorited, listingId, router, dispatch, userId]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
