export const navigation = {
    items: [
      {
        name: "Dashboard",
        url: "/dashboard",
        icon: "icon-home",
        orderNo: 1,
        itemAttr: {
          id: "item_1",
        },
      },
      {
        name: "Product",
        url: "/Product",
        icon: "icon-diamond",
        orderNo: 2,
        itemAttr: {
          id: "item_2_children",
        },
        children: [
          {
            name: "Meta Data",
            url: "/Product/MetaData",
            orderNo: 1,
            itemAttr: {
              id: "child_2_l2_submenu_1",
            },
            children: [
              {
                name: "Product Type",
                url: "/Product/MetaData/ProductType/ProductTypeList",
                orderNo: 1,
                itemAttr: {
                  id: "child_2_l2_1_l3_1",
                },
              },
            ],
          },
        ],
      },
    ]
  }