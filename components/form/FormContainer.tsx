"use client";

import { actionFunction } from "@/utils/types";
import { useRouter } from "next/navigation";
import React, { useActionState, useEffect } from "react";
import { toast } from "sonner";

type ActionState = {
  message: string;
  redirectTo?: string;
};

const initialState: ActionState = {
  message: "",
};

const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) toast(state.message);
    if (state.redirectTo) router.push(state.redirectTo);
  }, [state, router]);
  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
