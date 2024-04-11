import type { PACKAGE_TYPES } from "@/core/enums/api";
import type { MODAL_NAMES } from "@/core/enums/components";
import type { Component } from "vue";

export interface IModal {
  name: MODAL_NAMES;
  modal: Component;
};

export interface ISinglePackageContext {
  type: PACKAGE_TYPES;
  name: string;
  tags?: Object;
  versions?: string[]; 
};

export interface IModalContext extends Record<MODAL_NAMES, ISinglePackageContext | undefined> {};
