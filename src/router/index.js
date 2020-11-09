import Vue from "vue";
import VueRouter from "vue-router";
import Container from "@/components/container/Container";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    name: "Home",
    component: Container,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/Dashboard")
      },
      {
        path: "base",
        redirect: "/base/shop_list",
        name: "base",
        component: {
          render(c) {
            return c("router-view");
          }
        },
        children: [
          {
            path: "shop_list",
            name: "baseShopList",
            component: () => import("@/views/base/BaseShopList")
          },
          {
            path: "vendor_list",
            name: "baseVendorList",
            component: () => import("@/views/base/BaseVendorList")
          },
          {
            path: "items",
            name: "baseItems",
            component: () => import("@/views/base/BaseItems")
          },
          {
            path: "code",
            name: "baseCode",
            component: () => import("@/views/base/BaseCode")
          },
          {
            path: "code_detail",
            name: "baseCodeDetail",
            component: () => import("@/views/base/BaseCodeDetail")
          },
          {
            path: "code_group",
            name: "baseCcodeGroup",
            component: () => import("@/views/base/BaseCodeGroup")
          }
        ]
      },
      {
        path: "buy",
        redirect: "/buy/list",
        component: {
          render(c) {
            return c("router-view");
          }
        },
        children: [
          {
            path: "list",
            name: "buyList",
            component: () => import("@/views/buy/BuyList")
          },
          {
            path: "confirm",
            name: "buyConfirm",
            component: () => import("@/views/buy/BuyConfirm")
          },
          {
            path: "spec_list",
            name: "buySpecList",
            component: () => import("@/views/buy/BuySpecList")
          },
          {
            path: "search",
            name: "buySearch",
            component: () => import("@/views/buy/BuySearch")
          },
          {
            path: "invoice",
            name: "buyInvoice",
            component: () => import("@/views/buy/BuyInvoice")
          },
          {
            path: "not_in",
            name: "buyNotIn",
            component: () => import("@/views/buy/BuyNotIn")
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  base: "/",
  routes
});

export default router;
