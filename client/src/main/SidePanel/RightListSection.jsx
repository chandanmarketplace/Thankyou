import React, { useState, useEffect, useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { AppStateContext } from "../AppStateContext";
import { AddNewComponent } from "./AddNewComponent";

const RightListSection = (props) => {
    const {
        inputConfig,
        setInputConfig,
        selectForSetting,
        first,
        setfirst,
        second,
        setSecond,
    } = useContext(AppStateContext);

    function goToAddSection() {
        setfirst("none");
        setSecond("block");
    }

    function closeSectionFunction() {
        setfirst("block");
        setSecond("none");
    }

    const [characters, updateCharacters] = useState(inputConfig?.right);

    useEffect(() => {
        updateCharacters(inputConfig?.right);
    }, [inputConfig]);

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        // const items = Array.from(characters);
        // const [reorderedItem] = items.splice(result.source.index, 1);
        // items.splice(result.destination.index, 0, reorderedItem);

        // updateCharacters(items);

        const items = [...inputConfig?.right];
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        // setInputConfig(items);
        setInputConfig({
            right: items,
            left: inputConfig?.left,
        });
    }

    return (
        <>
            <div className={`default-eee d-${first}`}>
                <div>
                    <div className="header-LeftSide d-flex col-12 align-items-center bg-white">
                        <a
                            onClick={props.closeFunction}
                            className="exit currentPageTitle polaris-custom-back"
                        >
                            <svg
                                viewBox="0 0 20 20"
                                className="Polaris-Icon-back-menu"
                                focusable="false"
                                aria-hidden="true"
                            >
                                <path d="M1 0a1 1 0 00-1 1v3a1 1 0 002 0V2h16v16H2v-2a1 1 0 10-2 0v3a1 1 0 001 1h18a1 1 0 001-1V1a1 1 0 00-1-1H1z"></path>
                                <path d="M6.414 9H14a1 1 0 110 2H6.414l3.293 3.293a.999.999 0 11-1.414 1.414l-5-5a.999.999 0 010-1.414l5-5a.999.999 0 111.414 1.414L6.414 9z"></path>
                            </svg>
                            <span>Back</span>
                        </a>
                        <div className="template-title-text template-title">Right Area</div>
                    </div>

                    <div className="added-sections-eee mt-3 ">
                        <ul
                            style={{ marginBottom: "0" }}
                            className="characters right-area-ul p-0  segments-index"
                        >
                            <li
                                id="element-roll-2463415"
                                className="list-group-item slide-to bg-white"
                            >
                                Order Summary
                            </li>
                        </ul>
                        <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId="characters">
                                {(provided) => (
                                    <ul
                                        className="characters characters-right-area p-0  segments-index"
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {characters.map((charprops, index) => {
                                            const { id, label } = charprops;
                                            return (
                                                <Draggable key={id} draggableId={id} index={index}>
                                                    {(provided) => (
                                                        <li
                                                            onClick={() => {
                                                                selectForSetting(charprops);
                                                                goToAddSection();
                                                            }}
                                                            id="element-roll-2463415"
                                                            className="list-group-item slide-to bg-white"
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            {label}
                                                            <span class="Polaris-Icon element-drag-icon ui-sortable-handle"><svg class="editor-icon" viewBox="0 0 32 32"><path d="M7 2c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0 6c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0 6c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm6-8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0 6c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"></path></svg></span>
                                                        </li>
                                                    )}
                                                </Draggable>
                                            );
                                        })}
                                        {provided.placeholder}
                                    </ul>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </div>

                    <ul
                        className="nav custom-box-editor custom-bot-mrg-15 my-3 "
                        onClick={goToAddSection}
                    >
                        <li
                            className="list-group-item add-section slide-to"
                            data-id="add-section"
                            data-slide-to="add-section"
                        >
                            <div className="d-flex justify-content-center align-items-center ">
                                <span className="Polaris-Icon disply-unset editor-set-icon back-add-btn">
                                    <svg className="editor-icon " viewBox="0 0 20 20">
                                        <path
                                            d="M2 0H1C.448 0 0 .448 0 1v1c0 .552.448 1 1 1s1-.448 1-1c.552 0 1-.448 1-1s-.448-1-1-1zm4 2h2c.552 0 1-.448 1-1s-.448-1-1-1H6c-.552 0-1 .448-1 1s.448 1 1 1zm8-2h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1zM8 18H6c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1zm6 0h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1zm5-18h-1c-.552 0-1 .448-1 1s.448 1 1 1c0 .552.448 1 1 1s1-.448 1-1V1c0-.552-.448-1-1-1zm0 17c-.552 0-1 .448-1 1-.552 0-1 .448-1 1s.448 1 1 1h1c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1zM2 18c0-.552-.448-1-1-1s-1 .448-1 1v1c0 .552.448 1 1 1h1c.552 0 1-.448 1-1s-.448-1-1-1zm-1-3c.552 0 1-.448 1-1v-2c0-.552-.448-1-1-1s-1 .448-1 1v2c0 .552.448 1 1 1zm0-6c.552 0 1-.448 1-1V6c0-.552-.448-1-1-1s-1 .448-1 1v2c0 .552.448 1 1 1zm18 2c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1s1-.448 1-1v-2c0-.552-.448-1-1-1zm0-6c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1s1-.448 1-1V6c0-.552-.448-1-1-1zm-5 4h-3V6c0-.552-.448-1-1-1s-1 .448-1 1v3H6c-.552 0-1 .448-1 1s.448 1 1 1h3v3c0 .552.448 1 1 1s1-.448 1-1v-3h3c.552 0 1-.448 1-1s-.448-1-1-1z"
                                            fillRule="evenodd"
                                            style={{ fill: " #2c6ecb" }}
                                        ></path>
                                    </svg>
                                </span>
                                <span className="text">Add section</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`default-eeee d-${second}`}>
                <AddNewComponent
                    type="right"
                    list={inputConfig?.right}
                    closeSectionFunction={closeSectionFunction}
                />
            </div>
        </>
    );
};

export { RightListSection };