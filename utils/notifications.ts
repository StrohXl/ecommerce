const { notify } = useNotification();
export default {
  shoppingCart: {
    add: () =>
      notify({
        title: "Agregado",
        text: "Se ha agregado un producto al carrito",
        type: "success",
        
      }),
    modify: () =>
      notify({
        title: "Modificado",
        text: "Se ha modificado un producto del carrito",
        type: "success",
      }),
    delete: () =>
      notify({
        title: "Removido",
        text: "Se ha removido un producto del carrito",
        type: "success",
      }),
    deleteAll: () =>
      notify({
        title: "Removido",
        text: "Se han removido todos los productos del carrito",
        type: "success",
      }),
  },
};
