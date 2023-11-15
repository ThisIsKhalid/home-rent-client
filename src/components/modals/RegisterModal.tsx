"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Modal from "./Modal";
import { closeModal } from "@/redux/features/modals/useRegisterSlice";

const RegisterModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.registerModal.isOpen);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

     axios
       .post("/api/register", data)
       .then(() => {
         toast.success("Registered!");
         dispatch(closeModal());
       })
       .catch((error) => {
         toast.error(error);
       })
       .finally(() => {
         setIsLoading(false);
       });
  };
//   console.log(isOpen);

    

  return (
    <Modal 
     disabled={isLoading}
        isOpen={isOpen}
        title="Register"
        onClose={() => dispatch(closeModal())}
        onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default RegisterModal;
