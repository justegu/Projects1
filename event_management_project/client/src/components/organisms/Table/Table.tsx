import {
  StyledAddNewUserContainer,
  StyledItemsContainer,
  StyledResultNoResultContainer,
} from "./styles";
import { IUser } from "../../../shared/api/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import API from "../../../shared/api/api";
import FullScreenLoader from "../../atoms/FullScreenLoader";
import Button from "../../atoms/Button";
import { useEffect, useState } from "react";
import Input from "../../atoms/Input";
import Modal from "../../atoms/Modal";
import Pagination from "../../atoms/Pagination";
import SearchFilter from "../../molecules/SearchFilter";

const Table = () => {
  // data
  const [displayData, setDisplayData] = useState<IUser[]>([]);

  //searchValue
  const [searchValue, setSearchValue] = useState("");

  // helps refresh data
  const queryClient = useQueryClient();

  // variables
  const [nameValue, setNameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [ageValue, setAgeValue] = useState("");

  // edit values
  const [editedUser, setEditedUser] = useState<IUser>({
    name: "",
    surname: "",
    email: "",
    age: "",
  });

  // buttons handlers
  const [showConfirmationToDelete, setShowConfirmationToDelete] = useState<
    string | null
  >(null);
  const [showConfirmationToEdit, setShowConfirmationToEdit] = useState<
    string | null
  >(null);

  // Modals
  const [showAddNewUserModal, setShowAddNewUserModal] = useState(false);
  const [showUserSavedModal, setShowUserSavedModal] = useState(false);
  const [showUserUpdatedModal, setShowUserUpdatedModal] = useState(false);
  const [showDeletedSuccesfullyModal, setShowDeletedSuccesfullyModal] =
    useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Titles
  const titleMapping: { [key: string]: string } = {
    name: "Vardas:",
    surname: "Pavardė:",
    email: "El.paštas:",
    age: "Amžius:",
  };

  // Win resize
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);

      if (newWindowWidth < 768) {
        setShowConfirmationToEdit(null);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // isModalActive
  useEffect(() => {
    if (
      showAddNewUserModal ||
      showUserSavedModal ||
      showDeletedSuccesfullyModal
    ) {
      setIsModalActive(true);
    } else {
      setIsModalActive(false);
    }
  }, [showAddNewUserModal, showUserSavedModal, showDeletedSuccesfullyModal]);

  // get all users
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: () => API.getUsers(),
    staleTime: 20000,
  });

  // SearchFilter
  useEffect(() => {
    if (data) {
      const filteredUsers = data.filter((user: IUser) => {
        const searchLower = searchValue.toLowerCase();
        const name = user.name.toLowerCase();
        const surname = user.surname.toLowerCase();
        const email = user.email.toLowerCase();
        const age = user.age.toString();

        return (
          name.includes(searchLower) ||
          surname.includes(searchLower) ||
          email.includes(searchLower) ||
          age.includes(searchLower)
        );
      });

      setDisplayData(filteredUsers);
    }
  }, [data, searchValue]);
  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue]);

  // Add new user
  const handleAddNew = () => {
    setShowAddNewUserModal(true);
  };

  const handleAddNewButtonInModal = async () => {
    try {
      const newUser = {
        name: nameValue,
        surname: surnameValue,
        email: emailValue,
        age: ageValue,
      };

      await API.postUser(newUser);

      queryClient.invalidateQueries(["users"]);
      setShowAddNewUserModal(false);

      setShowUserSavedModal(true);
    } catch (error) {
      console.error("Error adding new user", error);
    }
  };

  // update user
  const handleEdit = (user: IUser) => async () => {
    if (user._id) {
      setEditedUser({ ...user });

      setShowConfirmationToEdit(user._id);
    } else {
      console.error("Invalid user ID");
    }
  };

  const handleSaveEdit = (user: IUser) => async () => {
    try {
      if (user._id) {
        await API.updateUser(user._id, editedUser);

        queryClient.invalidateQueries(["users"]);
        setShowConfirmationToEdit(null);

        setShowUserUpdatedModal(true);
      } else {
        console.error("Invalid user ID");
      }
    } catch (error) {
      console.error("Error updating user", error);
    }
  };

  const handleCancelToEdit = () => {
    setShowConfirmationToEdit(null);
  };

  // delete user
  const handleDelete = (user: IUser) => {
    if (user._id) {
      setShowConfirmationToDelete(user._id);
    } else {
      console.error("Invalid user ID");
    }
  };

  const handleConfirmDelete = (user: IUser) => async () => {
    try {
      if (user._id) {
        await API.deleteUser(user._id);

        queryClient.invalidateQueries(["users"]);
        setShowConfirmationToDelete(null);

        setShowDeletedSuccesfullyModal(true);
      } else {
        console.error("Invalid user ID");
      }
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  const handleCancelToDelete = () => {
    setShowConfirmationToDelete(null);
  };

  // Pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <FullScreenLoader />;
  }
  if (isError) {
    return <p>Error... </p>;
  }

  return (
    <StyledItemsContainer>
      {isModalActive && <div className="modal-overlay" />}{" "}
      <div className={`content ${isModalActive ? "disabled" : ""}`}>
        <div className="top-button-container">
          <div className="filter-div">
            <SearchFilter
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              data={data}
              filteredData={displayData}
            />
          </div>
          <div className="button-div">
            <Button text="Pridėti naują" action={handleAddNew} />
          </div>
        </div>
        <div className="table-container">
          {windowWidth > 768 && (
            <div className="table-container__title">
              <div className="title-container">
                {Object.values(titleMapping).map((title) => (
                  <h4 key={title}>{title}</h4>
                ))}
              </div>
              <div className="empty"></div>
            </div>
          )}
          <StyledResultNoResultContainer className="result-no-result">
            {displayData.length > 0 ? (
              displayData
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((user: IUser) => (
                  <div key={user._id} className="user-data-container">
                    <div className="user-data-container-item-container">
                      {Object.entries(user)
                        .filter(([key]) => key !== "_id" && key !== "__v")
                        .map(([key, value]) => (
                          <div key={key} className="user-data-container-item">
                            <div className="title-and-items">
                              {windowWidth <= 768 && (
                                <h4>{titleMapping[key]}</h4>
                              )}
                              {showConfirmationToEdit === user._id ? (
                                <Input
                                  type="text"
                                  value={editedUser[key as keyof IUser]}
                                  setValue={(v: string) =>
                                    setEditedUser((prevState) => ({
                                      ...prevState,
                                      [key]: v,
                                    }))
                                  }
                                />
                              ) : (
                                <p>{value}</p>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className="buttons-container">
                      {showConfirmationToEdit === user._id ? (
                        <div className="save-yes-cancel">
                          <div className="save-yes-cancel__buttons-container">
                            <Button
                              text="Išsaugoti"
                              action={handleSaveEdit(user)}
                            />
                            <Button
                              text="Atšaukti"
                              action={handleCancelToEdit}
                            />
                          </div>
                        </div>
                      ) : showConfirmationToDelete === user._id ? (
                        <div className="save-yes-cancel">
                          <h5>Ar tikrai norite ištrinti?</h5>
                          <div className="save-yes-cancel__buttons-container">
                            <Button
                              text="Taip"
                              action={handleConfirmDelete(user)}
                            />
                            <Button
                              text="Atšaukti"
                              action={handleCancelToDelete}
                            />
                          </div>
                        </div>
                      ) : (
                        <>
                          <Button text="Redaguoti" action={handleEdit(user)} />
                          <Button
                            text="Ištrinti"
                            action={() => handleDelete(user)}
                          />
                        </>
                      )}
                    </div>
                  </div>
                ))
            ) : (
              <p className="no-result">No results..</p>
            )}
          </StyledResultNoResultContainer>
        </div>
        <div className="pagination-container">
          <Pagination
            currentPage={currentPage}
            totalItems={displayData.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            className="pagination-style"
          />
        </div>
        <div className="footer">
          <p> © 2023 Visos teisės saugomos</p>
        </div>
      </div>
      {showAddNewUserModal && (
        <Modal onClose={() => setShowAddNewUserModal(false)}>
          <StyledAddNewUserContainer>
            <div className="addNewUser-container">
              <div className="addNewUser-container__box">
                <div className="addNewUser-container__box__item">
                  <h5>Vardas</h5>
                  <Input
                    type="text"
                    value={nameValue}
                    setValue={setNameValue}
                  />
                </div>
                <div className="addNewUser-container__box__item">
                  <h5>Pavardė</h5>
                  <Input
                    type="text"
                    value={surnameValue}
                    setValue={setSurnameValue}
                  />
                </div>
              </div>
              <div className="addNewUser-container__box">
                <div className="addNewUser-container__box__item">
                  <h5>El.paštas</h5>
                  <Input
                    type="text"
                    value={emailValue}
                    setValue={setEmailValue}
                  />
                </div>
                <div className="addNewUser-container__box__item">
                  <h5>Amžius</h5>
                  <Input type="text" value={ageValue} setValue={setAgeValue} />
                </div>
              </div>
            </div>
            <div className="button">
              <Button text="Pridėti naują" action={handleAddNewButtonInModal} />
            </div>
          </StyledAddNewUserContainer>
        </Modal>
      )}
      {showUserSavedModal && (
        <Modal onClose={() => setShowUserSavedModal(false)}>
          <h5 className="success-delete-edit-save">
            Vartotojas pridėtas sėkmingai
          </h5>
        </Modal>
      )}
      {showDeletedSuccesfullyModal && (
        <Modal onClose={() => setShowDeletedSuccesfullyModal(false)}>
          <h5 className="success-delete-edit-save">
            Vartotojas ištrintas sėkmingai
          </h5>
        </Modal>
      )}
    </StyledItemsContainer>
  );
};

export default Table;
