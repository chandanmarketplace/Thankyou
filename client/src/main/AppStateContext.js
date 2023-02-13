import React, { createContext, useEffect, useState } from "react";

const AppStateContext = createContext();

const AppStateContextProvider = (props) => {
    // console.log(props)
    const children = props.children;


    const [selected, setSelected] = useState();

    const [id, setId] = useState(0);
    const [inputConfig, setInputConfig] = useState({
        left: [
            {
                label: "Order Confirmation",
                type: "orderConfirmation",
                disabled: true,
                id: (id * +1) + (id * 2) + "order"
            },
            {
                label: "Customer Information",
                type: "customerInfo",
                disabled: true,
                id: id * +1 + id * 2 + "customerInfo"
            }
        ],
        right: []
    });
    const [shopId, setShopId] = useState(props.shop);

    const [products, setProducts] = useState([]);

    const [collections, setCollections] = useState([]);

    const [first, setfirst] = useState("block");
    const [second, setSecond] = useState("none");
    const [view, setView] = useState("main");


    useEffect(() => {
        // console.log("inputConfig", inputConfig);
    }, [inputConfig])
    const addToConfig = (type, componentDetail) => {
        const newlist = [...inputConfig?.[type]];
        const obj = {
            id: "" + id,
            ...componentDetail
        };
        newlist.push(obj);
        setSelected(obj);
        const newState = {
            ...inputConfig,
            [type]: newlist,
        }
        setInputConfig(newState);
        setId(id + 1);
    }

    const updateConfig = (type, data) => {
        const newList = inputConfig[type]?.map(field => {
            return data?.id === field.id ? data : field;
        })

        const obj = {
            ...inputConfig,
            [type]: newList,
        }
        setInputConfig(obj)
    }

    const deleteFromConfig = (type, data) => {
        const newList = inputConfig[type]?.filter(field => {
            return data?.id !== field.id;
        })

        const obj = {
            ...inputConfig,
            [type]: newList,
        }
        setInputConfig(obj)
    }

    const selectForSetting = (component) => {
        setSelected(component);
    }

    const value = {
        id,
        inputConfig,
        setInputConfig,
        addToConfig,
        selected,
        selectForSetting,
        updateConfig,
        deleteFromConfig,
        setId,
        first, setfirst,
        second, setSecond,
        view, setView,
        shopId, setShopId,
        products, setProducts,
        collections, setCollections
    }
    return (<AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>)
};

export {
    AppStateContext,
    AppStateContextProvider
}