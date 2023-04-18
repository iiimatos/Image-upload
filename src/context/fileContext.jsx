import { createContext, useContext, useState } from "react";
import { imageRename } from "../util/Functions";
import { storage } from "../config/firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const context = createContext();

export const useFileContext = () => useContext(context);

export const FileProvider = ({ children }) => {
  const [urlFile, setUrlFile] = useState("");
  const [progressCompleted, setProgressCompleted] = useState(false);

  const uploadImage = async (image) => {
    const name = imageRename(image.name);
    const imageRef = ref(storage, name);
    const uploadImage = uploadBytesResumable(imageRef, image);
    uploadImage.on(
      "state_changed",
      () => {
        setProgressCompleted(true);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref).then((downloadURL) => {
          setUrlFile(downloadURL);
          setProgressCompleted(false);
        });
      }
    );
  };

  return (
    <context.Provider value={{ uploadImage, urlFile, progressCompleted }}>
      {children}
    </context.Provider>
  );
};
