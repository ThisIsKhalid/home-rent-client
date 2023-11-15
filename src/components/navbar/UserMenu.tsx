"use client";

import { openLoginModal } from "@/redux/features/modals/useLoginSlice";
import { openModal } from "@/redux/features/modals/useRegisterSlice";
import { useAppDispatch } from "@/redux/hooks";
import { IUser } from "@/types/common";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

// import { SafeUser } from "@/app/types";

const UserMenu = ({ currentUser }: { currentUser: IUser | null }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  //   const onRent = useCallback(() => {
  //     if (!currentUser) {
  //       return loginModal.onOpen();
  //     }

  //     rentModal.onOpen();
  //   }, [loginModal, rentModal, currentUser]);

  const handleLogout = () => {
    signOut();
    toast.success("Logout successful");
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          //   onClick={onRent}
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={"/images/placeholder.jpg"} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser && currentUser?.email ? (
              <>
                <MenuItem
                  label="My trips"
                  onClick={() => router.push("/trips")}
                />
                <MenuItem
                  label="My favorites"
                  onClick={() => router.push("/favorites")}
                />
                <MenuItem
                  label="My reservations"
                  onClick={() => router.push("/reservations")}
                />
                <MenuItem
                  label="My properties"
                  onClick={() => router.push("/properties")}
                />
                {/* <MenuItem label="Airbnb your home" onClick={rentModal.onOpen} /> */}
                <hr />
                <MenuItem label="Logout" onClick={handleLogout} />
              </>
            ) : (
              <>
                <MenuItem
                  label="Login"
                  onClick={() => dispatch(openLoginModal())}
                />
                <MenuItem
                  label="Sign up"
                  onClick={() => dispatch(openModal())}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
