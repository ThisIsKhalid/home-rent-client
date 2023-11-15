"use client";

import { closeModal } from "@/redux/features/modals/useRegisterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Modal from "./Modal";

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

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Travel Nest" subtitle="Create an account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title="Register"
      onClose={() => dispatch(closeModal())}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      actionLabel="Register"
    />
  );
};

export default RegisterModal;
