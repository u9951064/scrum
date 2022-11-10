import {
  createStore,
  useStore as baseUseStore,
  Store,
  type ActionContext,
} from "vuex";
import type { InjectionKey } from "vue";

export interface PopupMessage {
  visibility: "hidden" | "visible";
  title?: string | undefined;
  message?: string | undefined;
  icon: "success" | "error";
  btnLabel: string;
  btnCB?: Function | undefined;
}
export type PopupShow = Omit<PopupMessage, "visibility">;

export const key: InjectionKey<Store<PopupMessage>> = Symbol();

export const store = createStore<PopupMessage>({
  state: {
    visibility: "hidden",
    title: undefined,
    message: undefined,
    icon: "success",
    btnLabel: "繼續",
    btnCB: undefined,
  },
  getters: {
    hasTitle(state) {
      return typeof state.title === "string" && state.title.trim().length > 0;
    },
    hasMessage(state) {
      return (
        typeof state.message === "string" && state.message.trim().length > 0
      );
    },
  },
  mutations: {
    CLOSE_POPUP(state) {
      state.visibility = "hidden";
    },
    SHOW_POPUP(state, message: PopupShow) {
      state.visibility = "visible";
      state.title = message.title || undefined;
      state.message = message.message || undefined;
      state.icon = message.icon;
      state.btnLabel = message.btnLabel;
      state.btnCB = message.btnCB || undefined;
    },
  },
  actions: {
    show(
      context: ActionContext<PopupMessage, any>,
      message: Omit<PopupMessage, "visibility">
    ) {
      context.commit("SHOW_POPUP", message);
    },
    close(context: ActionContext<PopupMessage, any>) {
      context.commit("CLOSE_POPUP");
      if (typeof context.state.btnCB === "function") {
        context.state.btnCB();
      }
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
