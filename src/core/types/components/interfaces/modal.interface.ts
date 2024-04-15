import type { MODAL_NAMES } from "@/core/enums/components";
import type { Component } from "vue";
import type { ISinglePackageResponse } from "@/core/types/api";

export interface IModal {
  name: MODAL_NAMES;
  modal: Component;
};

export interface IModalContext extends Record<MODAL_NAMES, ISinglePackageResponse | null> {};
